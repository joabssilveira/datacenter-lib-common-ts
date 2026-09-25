import type { AxiosInstance, AxiosRequestConfig, AxiosStatic } from 'axios'
import { ApiClientUtils, BaseApiClient, type ApiResponsePostData, type IApiClientResult, type Where } from 'fwork-jsts-common'
import { ApiRoutesNames } from '../api/routes'
import { type IUsersGroupInvite } from '../models'

export class UsersGroups_invitesApiClient extends BaseApiClient<IUsersGroupInvite, any,
  Where<IUsersGroupInvite>, IUsersGroupInvite, IUsersGroupInvite> {
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
    data: IUsersGroupInvite[],
    status?: number[],
    config?: AxiosRequestConfig<IUsersGroupInvite[]> | undefined
  }): Promise<IApiClientResult<ApiResponsePostData<IUsersGroupInvite[]>>> {
    return ApiClientUtils.post<IUsersGroupInvite[], ApiResponsePostData<IUsersGroupInvite[]>>({
      apiUrl: this.apiUrl,
      axios: this.axios,
      ...args,
    })
  }
}