# Modules


## main.bicep
```csharp
param location string = 'AustraliaEast'
param webAppName string

@secure()
@description('Admin password for VM')
param adminPassword string

@description('Admin username for VM')
param adminUsername string


@allowed([
    'dev'
    'uat'
    'prod'
  ])
param environment string 

// Module 1 - App Service
module appService 'appservice.bicep' = {
  name: 'appServiceDeployment'
  params: {
    enviroment: environment
    webAppName: webAppName
    location: location
  }
}

// Module 2 - Storage
module storage 'storage.bicep' = {
  name: 'storageDeployment'
  params: {
    enviroment: environment
    location: location
  }
}

var isProd = environment == 'prod'

// Module 3 - VM
// Only deploy the VM in production environments
module vm 'vm.bicep' = if (isProd) {
  name: 'vmDeployment'
  params: {
    location: location
    adminPassword: adminPassword
    adminUsername: adminUsername
    vmName: 'ndc-awesome-vm'
  }
}

output appServiceName string = appService.outputs.appServiceName
output appServicePlanName string = appService.outputs.appServicePlanName

```


## storage.bicep
```csharp
param location string = 'AustraliaEast'

@allowed([
    'dev'
    'uat'
    'prod'
  ])
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


## appservice.bicep
```csharp
@allowed([
  'dev'
  'uat'
  'prod'
])
param enviroment string 
param webAppName string
param sku string = 'F1' // The SKU of App Service Plan
param linuxFxVersion string = 'node|14-lts' // The runtime stack of web app
param location string = 'AustraliaEast'

var appServicePlanName = toLower('AppServicePlan-${webAppName}-${enviroment}')
var webSiteName = toLower('wapp-${webAppName}-${enviroment}')

resource myAppServicePlan 'Microsoft.Web/serverfarms@2020-06-01' = {
  name: appServicePlanName
  location: location
  properties: {
    reserved: true
  }
  sku: {
    name: sku
  }
  kind: 'linux'
}

resource myAppService 'Microsoft.Web/sites@2020-06-01' = {
  name: webSiteName
  location: location
  properties: {
    serverFarmId: myAppServicePlan.id
    siteConfig: {
      linuxFxVersion: linuxFxVersion
    }
    httpsOnly: true    
  }
}

output appServiceName string = webSiteName
output appServicePlanName string = appServicePlanName

```

## vm.bicep
```csharp
@description('Username for the Virtual Machine.')
param adminUsername string

param vmName string

@description('Password for the Virtual Machine.')  // SSH key is recommended but this is ok for a demo
@secure()
param adminPassword string

@description('Location for all resources.')
param location string = resourceGroup().location

@description('The size of the VM')
param vmSize string = 'Standard_B2s'

var publicIPAddressName = '${vmName}PublicIP'
var networkInterfaceName = '${vmName}NetInt'
var osDiskType = 'Standard_LRS'
var subnetAddressPrefix = '10.1.0.0/24'
var addressPrefix = '10.1.0.0/16'
var dnsLabelPrefix = toLower('${vmName}-${uniqueString(resourceGroup().id)}')
var ubuntuOSVersion = '18.04-LTS'
var subnetName = 'Subnet'
var networkSecurityGroupName = 'SecGroupNet'
var virtualNetworkName = 'vNet'



resource nic 'Microsoft.Network/networkInterfaces@2021-05-01' = {
  name: networkInterfaceName
  location: location
  properties: {
    ipConfigurations: [
      {
        name: 'ipconfig1'
        properties: {
          subnet: {
            id: subnet.id
          }
          privateIPAllocationMethod: 'Dynamic'
          publicIPAddress: {
            id: publicIP.id
          }
        }
      }
    ]
    networkSecurityGroup: {
      id: nsg.id
    }
  }
}

resource nsg 'Microsoft.Network/networkSecurityGroups@2021-05-01' = {
  name: networkSecurityGroupName
  location: location
  properties: {
    securityRules: [
      {
        name: 'SSH'
        properties: {
          priority: 1000
          protocol: 'Tcp'
          access: 'Allow'
          direction: 'Inbound'
          sourceAddressPrefix: '*'
          sourcePortRange: '*'
          destinationAddressPrefix: '*'
          destinationPortRange: '22'
        }
      }
    ]
  }
}

resource vnet 'Microsoft.Network/virtualNetworks@2021-05-01' = {
  name: virtualNetworkName
  location: location
  properties: {
    addressSpace: {
      addressPrefixes: [
        addressPrefix
      ]
    }
  }
}

resource subnet 'Microsoft.Network/virtualNetworks/subnets@2021-05-01' = {
  parent: vnet
  name: subnetName
  properties: {
    addressPrefix: subnetAddressPrefix
    privateEndpointNetworkPolicies: 'Enabled'
    privateLinkServiceNetworkPolicies: 'Enabled'
  }
}

resource publicIP 'Microsoft.Network/publicIPAddresses@2021-05-01' = {
  name: publicIPAddressName
  location: location
  sku: {
    name: 'Basic'
  }
  properties: {
    publicIPAllocationMethod: 'Dynamic'
    publicIPAddressVersion: 'IPv4'
    dnsSettings: {
      domainNameLabel: dnsLabelPrefix
    }
    idleTimeoutInMinutes: 4
  }
}

resource vm 'Microsoft.Compute/virtualMachines@2021-11-01' = {
  name: vmName
  location: location
  properties: {
    hardwareProfile: {
      vmSize: vmSize
    }
    storageProfile: {
      osDisk: {
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: osDiskType
        }
      }
      imageReference: {
        publisher: 'Canonical'
        offer: 'UbuntuServer'
        sku: ubuntuOSVersion
        version: 'latest'
      }
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: nic.id
        }
      ]
    }
    osProfile: {
      computerName: vmName
      adminUsername: adminUsername
      adminPassword: adminPassword
    }
  }
}

output adminUsername string = adminUsername
output hostname string = publicIP.properties.dnsSettings.fqdn

```


