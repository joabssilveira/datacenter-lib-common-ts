export const AuthorizationKeys = {
  sysAdm: 'sysAdm',
  workgroupAdm: 'workgroupAdm',
  workgroupUnitAdm: 'workgroupUnitAdm',

  legalPersonsAdm: 'legalPersonsAdm',
  usersGroupsAdm: 'usersGroupsAdm',
  usersAdm: 'usersAdm',
} as const
export type AuthorizationsKeys = typeof AuthorizationKeys[keyof typeof AuthorizationKeys]