import type { AxiosInstance, AxiosStatic } from 'axios'
import type { Where } from 'fwork-jsts-common'
import { BaseApiClient } from 'fwork-jsts-common'
import { ApiRoutesNames } from '../api/routes'
import type { IIntegrationClient } from '../models'

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