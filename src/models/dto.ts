import { Where } from "fwork-jsts-common";
import { IWorkgroup } from ".";

export interface IWorkgroupBulkUpdate {
  values: Pick<IWorkgroup, 'licenseData'>,
  where: Where<IWorkgroup>,
}