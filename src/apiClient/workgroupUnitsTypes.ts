import { AxiosInstance, AxiosStatic } from 'axios'
import { BaseApiClient } from 'fwork-jsts-common'
import { Where } from 'fwork-jsts-common'
import { ApiRoutesNames } from '../api/routes'
import { IWorkgroupUnitType } from '../models'

export class WorkgroupUnitsTypesApiClient extends BaseApiClient<IWorkgroupUnitType, any,
  Where<IWorkgroupUnitType>, IWorkgroupUnitType, IWorkgroupUnitType> {
  constructor(args: {
    baseApiUrl: string
    axios?: AxiosStatic | AxiosInstance,
  }) {
    super({
      apiUrl: `${args.baseApiUrl}${ApiRoutesNames.workgroupUnitsTypes}`,
      axios: args.axios,
    })
  }
}