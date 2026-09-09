import axios, { type AxiosInstance, type AxiosStatic } from 'axios'
import { type ApiClientGetOptions, ApiClientUtils, type ApiResponseGetListData, type IApiClientResult, type Where } from 'fwork-jsts-common'
import { ApiRoutesNames } from '../api/routes'
import { type IUserSharedData } from '../models'

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