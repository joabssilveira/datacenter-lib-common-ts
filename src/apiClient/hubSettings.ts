import type { AxiosInstance, AxiosStatic } from 'axios'
import type { Where } from 'fwork-jsts-common'
import { BaseApiClient } from 'fwork-jsts-common'
import { ApiRoutesNames } from '../api/routes'
import type { IHubSetting } from '../models/hub'

export class HubSettingsApiClient extends BaseApiClient<IHubSetting, any,
  Where<IHubSetting>,
  IHubSetting, IHubSetting> {
  constructor(args: {
    baseApiUrl: string
    axios?: AxiosStatic | AxiosInstance,
  }) {
    super({
      apiUrl: `${args.baseApiUrl}${ApiRoutesNames.hubSettings}`,
      axios: args.axios,
    })
  }
}