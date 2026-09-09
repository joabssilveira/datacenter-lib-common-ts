import type { AxiosInstance, AxiosStatic } from 'axios'
import { BaseApiClient } from 'fwork-jsts-common'
import type { Where } from 'fwork-jsts-common'
import type { IIdentityDocument } from '../models/legalPerson'
import { ApiRoutesNames } from '../api/routes'

export class IdentityDocumentsApiClient extends BaseApiClient<IIdentityDocument, any, 
  Where<IIdentityDocument>,  
  IIdentityDocument, IIdentityDocument> {
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