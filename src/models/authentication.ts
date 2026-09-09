import type { JwtPayload } from "jsonwebtoken"
import type { IUserSharedData } from "."

export const AuthenticationType = {
  default: 0,
  uuid: 1,
  google: 2,
  integration: 3,
} as const
export type AuthenticationType = typeof AuthenticationType[keyof typeof AuthenticationType]

export interface IAuthenticationRequestBody {
  type: AuthenticationType
}

export interface IAuthenticationRequestBodyDefault extends IAuthenticationRequestBody {
  type: typeof AuthenticationType.default,
  login: string,
  pwd: string,
}

export interface IAuthenticationRequestBodyFromUuid extends IAuthenticationRequestBody {
  type: typeof AuthenticationType.uuid,
  uuid: string,
}

export interface IAuthenticationRequestBodyFromGoogleToken extends IAuthenticationRequestBody {
  type: typeof AuthenticationType.google,
  idToken: string,
  accessToken: string,
}

export interface IAuthenticationRequestBodyIntegration extends IAuthenticationRequestBody {
  type: typeof AuthenticationType.integration,
  client_id: string,
  secret: string,
}

export interface IAuthentication {
  uuid: string,
  token: string,
}

// USED IN TOKEN ON FIELD ISS OF JWT TOKEN
export const AuthenticationTokenDataProviders = {
  default: 'default',
  integration: 'integration',
  google: 'accounts.google.com',
} as const
export type AuthenticationTokenDataProviders = typeof AuthenticationTokenDataProviders[keyof typeof AuthenticationTokenDataProviders]

/**
 * IAuthenticationTokenDataDefault, IAuthenticationTokenDataIntegration or IAuthenticationTokenDataGoogle
 */
export interface IAuthenticationTokenData extends Omit<JwtPayload, 'iss'> {
  /**
   * AuthenticationTokenDataProviders: "default" | "integration" | "accounts.google.com"
   */
  iss: AuthenticationTokenDataProviders
}

export interface IAuthenticationTokenDataDefault extends IAuthenticationTokenData {
  authUuid: string,
  user: IUserSharedData,
}

export interface IAuthenticationTokenDataIntegration extends IAuthenticationTokenData {
  authUuid: string,
  clientUuid: string,
}

// datacenter nao gera esse toke, é gerado pelo google
export interface IAuthenticationTokenDataGoogle extends IAuthenticationTokenData {
  azp: string,
  email: string,
  email_verified: string,
  at_hash: string,
}

// tipos de token locais
// a autenticacao de fato usa esses tokens
// o do google por exemplo nao faz a autenticacao local, apenas verifica o usuario do google e vincula a uma autenticacao local de usuario ou cliente de integracao
export type AuthenticationTokenDataLocal = IAuthenticationTokenDataDefault | IAuthenticationTokenDataIntegration
