import { AxiosInstance, AxiosStatic } from 'axios'
import { BaseApiClient, Where } from 'fwork-jsts-common'
import { IUserGroup } from '../models'
import { ApiRoutesNames } from '../api/routes'

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