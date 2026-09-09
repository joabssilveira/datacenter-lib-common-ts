import type { ApiRequestGetOptions } from "fwork-jsts-common"
import type { Where } from "fwork-jsts-common"
import type { IUser } from "../models"

export const ApiRequestHeaders = {
  tokenProvider: 'token-provider'
} as const
export type ApiRequestHeaders = typeof ApiRequestHeaders[keyof typeof ApiRequestHeaders]

export type DatacenterApiRequestGetOptions<T, TWhere extends Where<T>> = ApiRequestGetOptions<T, TWhere> & {
  user?: IUser
}