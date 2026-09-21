import { StrictOmit } from "fwork-jsts-common"
import { IAuthorization } from "."

export const AuthorizationKeys = {
  sysAdm: 'sysAdm',
  workgroupAdm: 'workgroupAdm',
  workgroupUnitAdm: 'workgroupUnitAdm',
  usersAdm: 'usersAdm',

  common: 'common'
} as const
export type AuthorizationKeys = typeof AuthorizationKeys[keyof typeof AuthorizationKeys]

export const Authorizations: Record<keyof typeof AuthorizationKeys, StrictOmit<IAuthorization, 'created_at' | 'updated_at' | 'deleted_at' | 'note'>> = {
  sysAdm: {
    key: AuthorizationKeys.sysAdm,
    description: 'SysAdm',
  },
  workgroupAdm: {
    key: AuthorizationKeys.workgroupAdm,
    description: 'Administrador do Grupo de Trabalho',
  }, 
  workgroupUnitAdm: {
    key: AuthorizationKeys.workgroupUnitAdm,
    description: 'Administrador da Unidade',
  },
  usersAdm: {
    key: AuthorizationKeys.usersAdm,
    description: 'Administrador de Usuários'
  },
  common: {
    key: AuthorizationKeys.common,
    description: 'Permissão Básica'
  }
}