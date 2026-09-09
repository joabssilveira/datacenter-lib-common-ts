import type { AxiosInstance, AxiosStatic } from 'axios'
import type { Where } from 'fwork-jsts-common'
import { BaseApiClient } from 'fwork-jsts-common'
import { ApiRoutesNames } from '../api/routes'
import type { IAuthorization } from '../models'

export class AuthorizationsApiClient extends BaseApiClient<IAuthorization, any,
  Where<IAuthorization>,
  IAuthorization, IAuthorization> {
  constructor(args: {
    baseApiUrl: string
    axios?: AxiosStatic | AxiosInstance,
  }) {
    super({
      apiUrl: `${args.baseApiUrl}${ApiRoutesNames.authorizations}`,
      axios: args.axios,
    })
  }
}