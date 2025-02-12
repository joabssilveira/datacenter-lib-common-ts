import { ApiRequestGetOptions } from "fwork-jsts-common"
import { Where } from "fwork-jsts-common"
import { IUser } from "../models"

export const ApiRequestHeaders = {
  tokenProvider: 'token-provider'
} as const

export type ApiRequestHeaders = typeof ApiRequestHeaders[keyof typeof ApiRequestHeaders]

export type DatacenterApiRequestGetOptions<T, TWhere extends Where<T>> = ApiRequestGetOptions<T, TWhere> & {
  user?: IUser
}