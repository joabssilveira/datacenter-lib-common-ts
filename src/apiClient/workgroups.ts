import { AxiosInstance, AxiosStatic } from 'axios'
import { BaseApiClient } from 'fwork-jsts-common'
import { Where } from 'fwork-jsts-common'
import { IWorkgroup } from '../models'
import { ApiRoutesNames } from '../api/routes'

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