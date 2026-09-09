import type { AxiosInstance, AxiosStatic } from 'axios'
import { BaseApiClient, type Where } from 'fwork-jsts-common'
import { ApiRoutesNames } from '../api/routes'
import { type IUserGroup } from '../models'

export class UsersGroupsApiClient extends BaseApiClient<IUserGroup, any,
  Where<IUserGroup>, IUserGroup, IUserGroup> {
  constructor(args: {
    baseApiUrl: string
    axios?: AxiosStatic | AxiosInstance,
  }) {
    super({
      apiUrl: `${args.baseApiUrl}${ApiRoutesNames.usersGroups}`,
      axios: args.axios,
    })
  }
}