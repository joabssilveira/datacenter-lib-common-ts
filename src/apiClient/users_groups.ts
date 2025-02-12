import { AxiosInstance, AxiosStatic } from 'axios'
import { Where } from 'fwork-jsts-common'
import { BaseApiClient } from 'fwork-jsts-common'
import { IUser_Group } from '../models'
import { ApiRoutesNames } from '../api/routes'

export class Users_GroupsApiClient extends BaseApiClient<IUser_Group, any,
  Where<IUser_Group>, IUser_Group, IUser_Group> {
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