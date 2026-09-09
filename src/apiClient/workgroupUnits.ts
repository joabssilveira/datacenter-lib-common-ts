import type { AxiosInstance, AxiosStatic } from 'axios'
import { BaseApiClient, type Where } from 'fwork-jsts-common'
import { ApiRoutesNames } from '../api/routes'
import { type IWorkgroupUnit } from '../models'

export class WorkgroupUnitsApiClient extends BaseApiClient<IWorkgroupUnit, any,
  Where<IWorkgroupUnit>, IWorkgroupUnit, IWorkgroupUnit> {
  constructor(args: {
    baseApiUrl: string
    axios?: AxiosStatic | AxiosInstance,
  }) {
    super({
      apiUrl: `${args.baseApiUrl}${ApiRoutesNames.workgroupUnits}`,
      axios: args.axios,
    })
  }
}