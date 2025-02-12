import { AxiosInstance, AxiosRequestConfig, AxiosStatic } from 'axios'
import { ApiResponsePostData, Where, ApiClientUtils, BaseApiClient, IApiClientResult } from 'fwork-jsts-common'
import { IUserGroup_Invite } from '../models'
import { ApiRoutesNames } from '../api/routes'

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