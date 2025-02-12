import { AxiosInstance, AxiosStatic } from 'axios'
import { BaseApiClient } from 'fwork-jsts-common'
import { Where } from 'fwork-jsts-common'
import { IWorkgroupUnit } from '../models'
import { ApiRoutesNames } from '../api/routes'

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