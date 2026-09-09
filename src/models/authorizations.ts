
export const AuthorizationKeys = {
  sysAdm: 'sysAdm',
  workgroupAdm: 'workgroupAdm',
  workgroupUnitAdm: 'workgroupUnitAdm',
  usersAdm: 'usersAdm',

  common: 'common'
} as const
export type AuthorizationKeys = typeof AuthorizationKeys[keyof typeof AuthorizationKeys]