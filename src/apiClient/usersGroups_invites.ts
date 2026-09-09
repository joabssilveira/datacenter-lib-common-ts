import type { AxiosInstance, AxiosRequestConfig, AxiosStatic } from 'axios'
import { ApiClientUtils, BaseApiClient, type ApiResponsePostData, type IApiClientResult, type Where } from 'fwork-jsts-common'
import { ApiRoutesNames } from '../api/routes'
import { type IUserGroup_Invite } from '../models'

export class UsersGroups_invitesApiClient extends BaseApiClient<IUserGroup_Invite, any,
  Where<IUserGroup_Invite>, IUserGroup_Invite, IUserGroup_Invite> {
  constructor(args: {
    baseApiUrl: string
    axios?: AxiosStatic | AxiosInstance,
  }) {
    super({
      apiUrl: `${args.baseApiUrl}${ApiRoutesNames.usersGroups_invites}`,
      axios: args.axios,
    })
  }

  async bulkPost(args: {
    data: IUserGroup_Invite[],
    status?: number[],
    config?: AxiosRequestConfig<IUserGroup_Invite[]> | undefined
  }): Promise<IApiClientResult<ApiResponsePostData<IUserGroup_Invite[]>>> {
    return ApiClientUtils.post<IUserGroup_Invite[], ApiResponsePostData<IUserGroup_Invite[]>>({
      apiUrl: this.apiUrl,
      axios: this.axios,
      ...args,
    })
  }
}