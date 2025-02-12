import { AxiosInstance, AxiosStatic } from 'axios'
import { BaseApiClient } from 'fwork-jsts-common'
import { Where } from 'fwork-jsts-common'
import { IAuthorization } from '../models'
import { ApiRoutesNames } from '../api/routes'

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