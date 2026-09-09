import type { IModel } from "."
import type { ILegalPersonAddress } from "./legalPerson"

export interface ICountry extends IModel {
  name: string,
  alpha2: string,
  alpha3: string,
  numericCode: string,
  phoneCode: string,

  states?: IState[],
}

export interface IState extends IStateBrazilCustomData {
  uuid: string,

  name: string,
  acronym: string,

  countryAlpha2: string,
  country?: ICountry,

  cities?: ICity[]
}
export interface IStateBrazilCustomData {
  BrIbgeCode?: string,
  BrRegionName?: string,
}

export interface ICity extends ICityBrazilCustomData {
  uuid: string,

  name: string,

  stateUuid: string,
  state?: IState,

  legalPersonAddresses?: ILegalPersonAddress[]
}
export interface ICityBrazilCustomData {
  BrIbgeCode?: string,
  BrIbgeFullCode?: string,
}