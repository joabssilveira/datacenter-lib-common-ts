import axios, { AxiosInstance, AxiosStatic } from 'axios'
import { ApiClientUtils, BaseApiClient, IApiClientResult, Where } from 'fwork-jsts-common'
import { ApiRoutesNames } from '../api/routes'
import { IUser } from '../models'

export class UsersApiClient extends BaseApiClient<IUser, any,
  Where<IUser>, IUser, IUser> {
  baseApiUrl: string

  constructor(args: {
    baseApiUrl: string
    axios?: AxiosStatic | AxiosInstance,
  }) {
    super({
      apiUrl: `${args.baseApiUrl}${ApiRoutesNames.users}`,
      axios: args.axios,
    })

    this.baseApiUrl = args.baseApiUrl
  }

  async verify(args: {
    userUuid: string,
    code: string,
  }): Promise<IApiClientResult<boolean>> {
    const result: IApiClientResult<boolean> = {}

    try {
      const response = await (this.axios ?? axios).post(`${this.baseApiUrl}${ApiRoutesNames.usersVerify.replace(':uuid', args.userUuid).replace(':code', args.code)}`)

      if (response.status == 200) {
        if (response.data)
          result.data = response.data as boolean
        result.success = true
        result.msg = 'Usuário confirmado com sucesso'
      }
      else {
        result.success = false
        result.msg = 'Usuário não pode ser confirmado'
      }
    } catch (error) {
      result.success = false
      result.msg = ApiClientUtils.getErrorMessage(error)
    }

    return result
  }

  async recoverPwdCode(args: {
    email: string,
  }): Promise<IApiClientResult<{ message: string }>> {
    const result: IApiClientResult<{ message: string }> = {}

    try {
      const response = await (this.axios ?? axios).post(`${this.baseApiUrl}${ApiRoutesNames.usersRecoverPwdCode}`, { email: args.email })

      if (response.status == 200) {
        result.data = response.data
        result.success = true
      }
    } catch (error) {
      result.success = false
      result.msg = ApiClientUtils.getErrorMessage(error)
    }

    return result
  }

  async recoverPwdValidateCode(args: {
    email: string,
    code: string
  }): Promise<IApiClientResult<{ token: string }>> {
    const result: IApiClientResult<{ token: string }> = {}

    try {
      const response = await (this.axios ?? axios).post(`${this.baseApiUrl}${ApiRoutesNames.usersRecoverPwdValidateCode}`, { email: args.email, code: args.code })

      if (response.status == 200) {
        result.data = response.data
        result.success = true
      }
    } catch (error) {
      result.success = false
      result.msg = ApiClientUtils.getErrorMessage(error)
    }

    return result
  }

  async recoverPwdReset(args: {
    token: string,
    newPwd: string
  }): Promise<IApiClientResult<{ message: string }>> {
    const result: IApiClientResult<{ message: string }> = {}

    try {
      const response = await (this.axios ?? axios).post(`${this.baseApiUrl}${ApiRoutesNames.usersRecoverPwdReset}`, { newPwd: args.newPwd, token: args.token })

      if (response.status == 200) {
        result.data = response.data
        result.success = true
      }
    } catch (error) {
      result.success = false
      result.msg = ApiClientUtils.getErrorMessage(error)
    }

    return result
  }

}