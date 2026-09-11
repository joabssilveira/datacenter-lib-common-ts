import { IUserSharedData } from "../models"
import { AuthenticationTokenDataProviders, IAuthenticationTokenData, IAuthenticationTokenDataDefault, IAuthenticationTokenDataIntegration } from "../models/authentication"

export enum DatacenterCrudAuthTypes {
  skip,
  user,
  tokenDataDefault,
  tokenDataIntegration,
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

// export interface DatacenterCrudAuthTokenData extends DatacenterCrudAuth {
//   type: DatacenterCrudAuthTypes.tokenData
//   /**
//    * default, integration or google
//    */
//   tokenData: IAuthenticationTokenData,
// }

export interface DatacenterCrudAuthTokenDataDefault extends DatacenterCrudAuth {
  type: DatacenterCrudAuthTypes.tokenDataDefault
  tokenData: IAuthenticationTokenDataDefault,
}

export interface DatacenterCrudAuthTokenDataIntegration extends DatacenterCrudAuth {
  type: DatacenterCrudAuthTypes.tokenDataIntegration,
  tokenData: IAuthenticationTokenDataIntegration,
}

// export interface DatacenterCrudAuthTokenDataExt<T extends IAuthenticationTokenData> extends DatacenterCrudAuth {
//   type: DatacenterCrudAuthTypes.tokenData
//   tokenData: T,
// }

// export type DatacenterCrudAuthTokenDataLocal = DatacenterCrudAuthTokenDataExt<AuthenticationTokenDataLocal>
// export type DatacenterCrudAuthTokenDataLocal = DatacenterCrudAuthTokenDataExt<AuthenticationTokenDataLocal>

export function getUserUuidFromCrudAuth(options: {
  crudAuth: DatacenterCrudAuthUser | DatacenterCrudAuthTokenDataDefault
}): string {
  if (options.crudAuth.type == DatacenterCrudAuthTypes.user)
    return (options.crudAuth as DatacenterCrudAuthUser).user.uuid

  if (options.crudAuth.type == DatacenterCrudAuthTypes.tokenDataDefault)
    return (options.crudAuth as DatacenterCrudAuthTokenDataDefault).tokenData.user.uuid

  return ''
}

export function getCrudAuthFromTokenData(options: {
  tokenData: IAuthenticationTokenData
}): DatacenterCrudAuthTokenDataDefault | DatacenterCrudAuthTokenDataIntegration {
  const { tokenData } = options
  const result = tokenData.iss == AuthenticationTokenDataProviders.default ? {
    type: DatacenterCrudAuthTypes.tokenDataDefault,
    tokenData,
  } as DatacenterCrudAuthTokenDataDefault
    : tokenData.iss == AuthenticationTokenDataProviders.integration ? {
      type: DatacenterCrudAuthTypes.tokenDataIntegration,
      tokenData,
    } as DatacenterCrudAuthTokenDataIntegration : undefined

  if (!result)
    throw Error('Invalid token data. Token data must be default or integration')

  return result
}