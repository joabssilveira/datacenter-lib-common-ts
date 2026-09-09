import { StrictOmit } from "fwork-jsts-common"
import { IUserSharedData } from "../models"
import { AuthenticationTokenDataLocal, IAuthenticationTokenData, IAuthenticationTokenDataDefault } from "../models/authentication"

export enum DatacenterCrudAuthTypes {
  skip,
  user,
  tokenData,
}

/**
 * DatacenterCrudAuthSkip, DatacenterCrudAuthUser or DatacenterCrudAuthToken
 */
export interface DatacenterCrudAuth {
  /**
   * skip, user or tokenData
   */
  type: DatacenterCrudAuthTypes
}

export interface DatacenterCrudAuthSkip extends DatacenterCrudAuth {
  type: DatacenterCrudAuthTypes.skip
}

export interface DatacenterCrudAuthUser extends DatacenterCrudAuth {
  type: DatacenterCrudAuthTypes.user
  user: IUserSharedData
}

export interface DatacenterCrudAuthTokenData extends DatacenterCrudAuth {
  type: DatacenterCrudAuthTypes.tokenData
  /**
   * default, integration or google
   */
  tokenData: IAuthenticationTokenData,
}

export interface DatacenterCrudAuthTokenDataDefault extends StrictOmit<DatacenterCrudAuthTokenData, 'tokenData'> {
  type: DatacenterCrudAuthTypes.tokenData
  tokenData: IAuthenticationTokenDataDefault,
}

export interface DatacenterCrudAuthTokenDataExt<T extends IAuthenticationTokenData> extends DatacenterCrudAuth {
  type: DatacenterCrudAuthTypes.tokenData
  tokenData: T,
}

export type DatacenterCrudAuthTokenDataLocal = DatacenterCrudAuthTokenDataExt<AuthenticationTokenDataLocal>

export function getUserUuidFromCrudAuth(options: {
  crudAuth: DatacenterCrudAuthUser | DatacenterCrudAuthTokenDataDefault
}): string {
  if (options.crudAuth.type == DatacenterCrudAuthTypes.user)
    return (options.crudAuth as DatacenterCrudAuthUser).user.uuid

  if (options.crudAuth.type == DatacenterCrudAuthTypes.tokenData)
    return (options.crudAuth as DatacenterCrudAuthTokenDataDefault).tokenData.user.uuid

  return ''
}