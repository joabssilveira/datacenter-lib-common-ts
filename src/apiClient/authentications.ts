import axios, { AxiosInstance, AxiosRequestConfig, AxiosStatic } from 'axios'
import { ApiClientUtils, IApiClientResult } from 'fwork-jsts-common'
import { ApiRoutesNames } from '../api/routes'
import {
  IAuthentication, IAuthenticationRequestBodyDefault,
  IAuthenticationRequestBodyFromGoogleToken, IAuthenticationRequestBodyFromUuid
} from '../models'

export class AuthenticationsApiClient {
  apiUrl: string
  axios: AxiosStatic | AxiosInstance

  constructor(args: {
    baseApiUrl: string
    axios?: AxiosStatic | AxiosInstance,
  }) {
    this.apiUrl = `${args.baseApiUrl}${ApiRoutesNames.authentications}`
    this.axios = args.axios ?? axios
  }

  async post(args: {
    data: IAuthenticationRequestBodyDefault | IAuthenticationRequestBodyFromUuid | IAuthenticationRequestBodyFromGoogleToken,
    config?: AxiosRequestConfig<IAuthenticationRequestBodyDefault | IAuthenticationRequestBodyFromUuid | IAuthenticationRequestBodyFromGoogleToken> | undefined
  }): Promise<IApiClientResult<IAuthentication> | undefined> {
    return await ApiClientUtils.post({
      apiUrl: this.apiUrl,
      data: args.data,
      config: args.config
    })
  }
}