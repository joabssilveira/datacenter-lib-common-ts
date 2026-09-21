import type { AxiosInstance, AxiosStatic } from 'axios'
import type { Where } from 'fwork-jsts-common'
import { BaseApiClient } from 'fwork-jsts-common'
import { ApiRoutesNames } from '../api/routes'
import type { IIntegrationClient_Authorization } from '../models'

export class IntegrationClient_AuthorizationsApiClient extends BaseApiClient<IIntegrationClient_Authorization, any,
  Where<IIntegrationClient_Authorization>,
  IIntegrationClient_Authorization, IIntegrationClient_Authorization> {
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