import axios, { AxiosInstance, AxiosStatic } from 'axios'
import { ApiResponseGetListData, Where, ApiClientGetOptions, ApiClientUtils, IApiClientResult } from 'fwork-jsts-common'
import { IUserSharedData } from '../models'
import { ApiRoutesNames } from '../api/routes'

export interface IUsers_SharedData_ApiClientGetOptions
  extends ApiClientGetOptions<IUserSharedData, Where<IUserSharedData>> {
  onlyRelated?: boolean
}

export class UsersSharedDataApiClient {
  apiUrl: string
  axios: AxiosStatic | AxiosInstance

  constructor(args: {
    baseApiUrl: string
    axios?: AxiosStatic | AxiosInstance,
  }) {
    this.apiUrl = `${args.baseApiUrl}${ApiRoutesNames.usersSharedData}`
    this.axios = args.axios ?? axios
  }

  async get(args?: IUsers_SharedData_ApiClientGetOptions): Promise<IApiClientResult<ApiResponseGetListData<IUserSharedData>>> {
    return ApiClientUtils.get<IUserSharedData, Where<IUserSharedData>>({
      apiUrl: this.apiUrl,
      axios: this.axios,
      ...args,
      params: {
        'onlyRelated': args?.onlyRelated
      }
    })
  }
}