# Conditions

## Conditions-from-json-file.bicep
```csharp

@allowed([
  'dev'
  'uat'
  'prod'
])
@description('Deployment environment')
param environment string 

@minLength(6)
param adminUsername string

@secure()
@minLength(8)
param adminPassword string

var sqlDbName = 'SomeSqlDb'
var sqlServerName = 'SomeSqlServer'

resource sqlServer 'Microsoft.Sql/servers@2019-06-01-preview' = {
  name: sqlServerName
  location: resourceGroup().location
  properties: {
    minimalTlsVersion: '1.2'
    administratorLogin: adminUsername
    administratorLoginPassword: adminPassword
  }
}

var dbSkus = loadJsonContent('skuSettings/dbSku.json')
var dbSkuProperties = loadJsonContent('skuSettings/dbSkuProperties.json')

resource sqlDatabase 'Microsoft.Sql/servers/databases@2020-08-01-preview' = {
  name: '${sqlServer.name}/${sqlDbName}'
  location: resourceGroup().location
  sku: dbSkus[environment]
  properties: dbSkuProperties[environment]
}
```


## skuSettings/dbSku.json
```json
{
  "dev": {
    "name": "GP_Gen5",
    "tier": "GeneralPurpose",
    "family": "Gen5",
    "capacity": 4 
  },
  "uat": {
    "name": "GP_Gen5",
    "tier": "GeneralPurpose",
    "family": "Gen5",
    "capacity": 12 
  },
  "prod": {
    "name": "GP_Gen5",
    "tier": "GeneralPurpose",
    "family": "Gen5",
    "capacity": 24
  }
}
```


## skuSettings/dbSkuProperties.json
```json
{
  "dev": {
    "collation": "Latin1_General_CI_AS",
    "maxSizeBytes": 268435456000,
    "zoneRedundant": false
  },
  "uat": {
    "collation": "Latin1_General_CI_AS",
    "maxSizeBytes": 536870912000,
    "zoneRedundant": false
  },
  "prod": {
    "collation": "Latin1_General_CI_AS",
    "maxSizeBytes": 1073741824000,
    "zoneRedundant": true
  }
}
```