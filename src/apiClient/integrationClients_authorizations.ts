import type { AxiosInstance, AxiosStatic } from 'axios'
import type { Where } from 'fwork-jsts-common'
import { BaseApiClient } from 'fwork-jsts-common'
import { ApiRoutesNames } from '../api/routes'
import type { IIntegrationClientAuthorization } from '../models'

export class IntegrationClient_AuthorizationsApiClient extends BaseApiClient<IIntegrationClientAuthorization, any,
  Where<IIntegrationClientAuthorization>,
  IIntegrationClientAuthorization, IIntegrationClientAuthorization> {
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