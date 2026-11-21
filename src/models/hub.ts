import { IModel } from ".";

export interface IHubSetting<N extends string = string, GN extends string = string, V = any> extends IModel {
  uuid: string,
  name: N,
  groupName: GN,
  value: V,
  active?: boolean
}

export const HubSettings = {
  DcWebhooks: 'dc-webhooks',
} as const
export type HubSettings = typeof HubSettings[keyof typeof HubSettings]

export const HubSettingsGroups = {
  datacenter: 'datacenter'
} as const
export type HubSettingsGroups = typeof HubSettingsGroups[keyof typeof HubSettingsGroups]

export interface IHubSettingDcWebhook {
  baseUrl: string
}

export interface IHubSettingDcWebhooks extends
  IHubSetting<
    typeof HubSettings.DcWebhooks,
    typeof HubSettingsGroups.datacenter,
    Record<
      string, // id da configuracao de webhook
      IHubSettingDcWebhook
    >
  > {
}