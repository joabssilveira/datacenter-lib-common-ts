import type { AxiosInstance, AxiosStatic } from 'axios'
import { BaseApiClient, type Where } from 'fwork-jsts-common'
import { ApiRoutesNames } from '../api/routes'
import { type IWorkgroup } from '../models'

export class WorkgroupsApiClient extends BaseApiClient<IWorkgroup, any,
  Where<IWorkgroup>, IWorkgroup, IWorkgroup> {
  constructor(args: {
    baseApiUrl: string
    axios?: AxiosStatic | AxiosInstance,
  }) {
    super({
      apiUrl: `${args.baseApiUrl}${ApiRoutesNames.workgroups}`,
      axios: args.axios,
    })
  }
}