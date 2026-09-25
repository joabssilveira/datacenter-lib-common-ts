import type { AxiosInstance, AxiosStatic } from 'axios'
import type { Where } from 'fwork-jsts-common'
import { BaseApiClient } from 'fwork-jsts-common'
import { ApiRoutesNames } from '../api/routes'
import type { IUserGroup } from '../models'

export class Users_GroupsApiClient extends BaseApiClient<IUserGroup, any,
  Where<IUserGroup>, IUserGroup, IUserGroup> {
  constructor(args: {
    baseApiUrl: string
    axios?: AxiosStatic | AxiosInstance,
  }) {
    super({
      apiUrl: `${args.baseApiUrl}${ApiRoutesNames.users_groups}`,
      axios: args.axios,
    })
  }
}