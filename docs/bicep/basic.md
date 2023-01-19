# Basic bicep file


## main.bicep
```csharp
param location string = resourceGroup().location

@allowed([
    'dev'
    'uat'
    'prod'
  ])
@minLength(3)
@maxLength(4)
param enviroment string 

var uniquePart = uniqueString(resourceGroup().id)  // Note the 'seed' value. Same value when using same seed.
var stgAcctName = 'mystg${enviroment}${uniquePart}'  // string interpolation

resource mySymbolicName 'Microsoft.Storage/storageAccounts@2021-09-01' = {
  name: stgAcctName
  location: location
  kind: 'BlobStorage'
  sku: {
    name: 'Standard_LRS' // Standard for now
  }
  properties: {
    accessTier: 'Hot'
  }
}

output StorageAccountName string = stgAcctName

```


## dependson-example.bicep
```csharp
param location string = 'AustraliaEast'
param appNamePrefix string = uniqueString(resourceGroup().id)

var functionAppName = '${appNamePrefix}-functionapp'
var appServiceName = '${appNamePrefix}-appservice'

// remove dashes for storage account name
var storageAccountName = format('{0}sta', replace(appNamePrefix, '-', ''))

// Storage Account
resource storageAccount 'Microsoft.Storage/storageAccounts@2019-06-01' = {
  name: storageAccountName
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    supportsHttpsTrafficOnly: true
    accessTier: 'Hot'
  }
}

// App Service
resource appService 'Microsoft.Web/serverFarms@2020-06-01' = {
  name: appServiceName
  location: location
  kind: 'functionapp'
  sku: {
    name: 'Y1'
    tier: 'Dynamic'
    size: 'Y1'
    family: 'Y'
    capacity: 0
  }
}

// Function App
resource functionApp 'Microsoft.Web/sites@2021-03-01' = {
  name: functionAppName
  
  location: location
  kind: 'functionapp'
  properties: {
    enabled: true
    siteConfig: {
      appSettings: [
        {
          name: 'BlobStorageConnection'
          value: 'DefaultEndpointsProtocol=https;AccountName=${storageAccount.name};EndpointSuffix=${environment().suffixes.storage};AccountKey=${storageAccount.listKeys().keys[0].value}'
        }
      ]
    }
    httpsOnly: true
    serverFarmId: appService.id
  }
}

```


## existing-resource-example.bicep
```csharp
param location string = resourceGroup().location

@allowed([
    'dev'
    'uat'
    'prod'
  ])
@minLength(3)
@maxLength(4)
param enviroment string 

var uniquePart = uniqueString(resourceGroup().id)  // Note the 'seed' value. Same value when using same seed.
var stgAcctName = 'mystg${enviroment}${uniquePart}'  // string interpolation

resource mySymbolicName 'Microsoft.Storage/storageAccounts@2021-09-01' = {
  name: stgAcctName
  location: location
  kind: 'BlobStorage'
  sku: {
    name: 'Standard_LRS' // Standard for now
  }
  properties: {
    accessTier: 'Hot'
  }
}

// Reference in same resource group
resource alreadyCreatedStorage 'Microsoft.Storage/storageAccounts@2021-09-01' existing = {
  name: 'nameofstorageacct'
}

// Reference in different resource group
resource alreadyCreatedStorageOtherGroup 'Microsoft.Storage/storageAccounts@2021-09-01' existing = {
  name: 'nameofstorageacct'
  scope: resourceGroup('anotherResourceGroup')
}

// Reference in different subscription and resource group
resource alreadyCreatedStorageOtherSub 'Microsoft.Storage/storageAccounts@2021-09-01' existing = {
  name: 'nameofstorageacct'
  scope: resourceGroup('subscriptionId','anotherResourceGroup')
}

output StorageAccountName string = stgAcctName


```

