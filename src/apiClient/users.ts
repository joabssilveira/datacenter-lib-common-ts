import { AxiosInstance, AxiosStatic } from 'axios'
import { BaseApiClient } from 'fwork-jsts-common'
import { Where } from 'fwork-jsts-common'
import { IUser } from '../models'
import { ApiRoutesNames } from '../api/routes'

export class UsersApiClient extends BaseApiClient<IUser, any,
  Where<IUser>, IUser, IUser> {
  constructor(args: {
    baseApiUrl: string
    axios?: AxiosStatic | AxiosInstance,
  }) {
    super({
      apiUrl: `${args.baseApiUrl}${ApiRoutesNames.users}`,
      axios: args.axios,
    })
  }
}