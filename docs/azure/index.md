# Azure

## Start
- [install azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- az login
- az extension add --name containerapp --upgrade
- az account list -o table
- az provider register --namespace Microsoft.App

## Next
```bash
RESOURCE_GROUP="hb"
LOCATION="North Europe"
LOG_ANALYTICS_WORKSPACE="hb-logs"
CONTAINERAPPS_ENVIRONMENT="hb-apps"
```

Next, retrieve the Log Analytics Client ID and client secret. 
```bash
LOG_ANALYTICS_WORKSPACE_CLIENT_ID=`az monitor log-analytics workspace show --query customerId -g $RESOURCE_GROUP -n $LOG_ANALYTICS_WORKSPACE --out tsv`
```

```bash
LOG_ANALYTICS_WORKSPACE_CLIENT_SECRET=`az monitor log-analytics workspace get-shared-keys --query primarySharedKey -g $RESOURCE_GROUP -n $LOG_ANALYTICS_WORKSPACE --out tsv`
```

Create environment

```bash
az containerapp env create \
  --name $CONTAINERAPPS_ENVIRONMENT \
  --resource-group $RESOURCE_GROUP \
  --logs-workspace-id $LOG_ANALYTICS_WORKSPACE_CLIENT_ID \
  --logs-workspace-key $LOG_ANALYTICS_WORKSPACE_CLIENT_SECRET \
  --location "$LOCATION"
```

Create a container app

```bash
az containerapp create \
  --name my-container-app \
  --resource-group $RESOURCE_GROUP \
  --environment $CONTAINERAPPS_ENVIRONMENT \
  --image hb.azurecr.io/test/hbauthorize:latest \
  --target-port 80 \
  --ingress 'external' \
  --query configuration.ingress.fqdn
```