export const ApiRoutesNames = {
  system: '/system',
  authentications: '/authentications',
  authorizations: '/authorizations',
  workgroupUnitsTypes: '/workgroup-units-types',
  workgroups: '/workgroups',
  workgroupsId: '/workgroups/:id',
  workgroupsBulkupdate: '/workgroups/bulk-update',
  legalPersons: '/legal-persons',
  users: '/users',
  usersVerify: '/users/verify/:uuid/:code',
  usersSharedData: '/users-sd',
  usersRecoverPwdCode: '/users/rpwd-c',
  usersRecoverPwdValidateCode: '/users/rpwd-vc',
  usersRecoverPwdReset: '/users/rpwd-r',
  workgroupUnits: '/workgroup-units',
  workgroupUnitsId: '/workgroup-units/:id',
  usersGroups: '/users-groups',
  usersGroupsId: '/users-groups/:id',
  usersGroups_authorizations: '/users-groups--authorizations',
  users_groups: '/users--groups',
  usersGroups_invites: '/users-groups--invites',
  integrationClients: '/integration-clients',
  integrationClientsId: '/integration-clients/:id',
  integrationClient_authorizations: '/integration-clients-authorizations',

  identityDocuments: '/identity-documents',
  identityDocumentsId: '/identity-documents/:id',

  // hub
  hubSettings: '/hub-settings',
  hubSettingsId: '/hub-settings/:id'
}