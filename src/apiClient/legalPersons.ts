import { AxiosInstance, AxiosStatic } from 'axios'
import { BaseApiClient } from 'fwork-jsts-common'
import { Where } from 'fwork-jsts-common'
import { ILegalPerson } from '../models'
import { ApiRoutesNames } from '../api/routes'

export class LegalPersonsApiClient extends BaseApiClient<ILegalPerson, any, 
  Where<ILegalPerson>,  
  ILegalPerson, ILegalPerson> {
  constructor(args: {
    baseApiUrl: string
    axios?: AxiosStatic | AxiosInstance,
  }) {
    super({
      apiUrl: `${args.baseApiUrl}${ApiRoutesNames.legalPersons}`,
      axios: args.axios,
    })
  }
}