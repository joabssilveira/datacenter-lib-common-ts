import { IModel } from ".";

export interface IHubSetting<N = string, GN = string, V = any> extends IModel {
  uuid: string,
  name: N,
  groupName: GN,
  value: V,
  active?: boolean
}