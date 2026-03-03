import { AxiosInstance, AxiosStatic } from 'axios'
import { BaseApiClient } from 'fwork-jsts-common'
import { Where } from 'fwork-jsts-common'
import { IIntegrationClient } from '../models'
import { ApiRoutesNames } from '../api/routes'

export class IntegrationClientsApiClient extends BaseApiClient<IIntegrationClient, any, 
  Where<IIntegrationClient>,  
  IIntegrationClient, IIntegrationClient> {
  constructor(args: {
    baseApiUrl: string
    axios?: AxiosStatic | AxiosInstance,
  }) {
    super({
      apiUrl: `${args.baseApiUrl}${ApiRoutesNames.integrationClients}`,
      axios: args.axios,
    })
  }
}