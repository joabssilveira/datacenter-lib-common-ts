export const LicenseSubscriptionStatus = {
  pending: 'pending',           // criada, aguardando pagamento/ativação
  trial: 'trial',               // periodo de teste
  active: 'active',             // vigente e em dia
  grace_period: 'grace_period', // vencida/inadimplente, mas ainda com acesso temporario
  suspended: 'suspended',       // acesso bloqueado temporariamente (inadimplencia, analise, etc.), reversivel
  canceled: 'canceled',         // cancelada pelo usuario/owner (pode valer ate o fim do ciclo)
  expired: 'expired',           // ciclo terminou e nao foi renovada
  revoked: 'revoked',           // revogada pelo provider/admin (fraude, violacao, estorno)
} as const
export type LicenseSubscriptionStatus = typeof LicenseSubscriptionStatus[keyof typeof LicenseSubscriptionStatus]

export const licenseSubscriptionStatusOptions: Record<keyof typeof LicenseSubscriptionStatus, {
  desc: string,
  additionalDesc: string,
}> = {
  pending: {
    desc: 'Criada, aguardando pagamento/ativação',
    additionalDesc: '',
  },
  trial: {
    desc: 'Periodo de teste',
    additionalDesc: '',
  },
  active: {
    desc: 'Vigente e em dia',
    additionalDesc: '',
  },
  grace_period: {
    desc: 'Vencida/inadimplente, mas ainda com acesso temporario',
    additionalDesc: '',
  },
  suspended: {
    desc: 'Acesso bloqueado temporariamente (inadimplencia, analise, etc.), reversivel',
    additionalDesc: '',
  },
  canceled: {
    desc: 'Cancelada pelo usuario/owner (pode valer ate o fim do ciclo)',
    additionalDesc: '',
  },
  expired: {
    desc: 'Ciclo terminou e nao foi renovada',
    additionalDesc: '',
  },
  revoked: {
    desc: 'Revogada pelo provider/admin (fraude, violacao, estorno)',
    additionalDesc: '',
  },
}
export const licenseSubscriptionStatusActive = [LicenseSubscriptionStatus.trial, LicenseSubscriptionStatus.active, LicenseSubscriptionStatus.grace_period]

export interface ILicenseData {
  licenseSubscriptionStatus: LicenseSubscriptionStatus,
  data: any
}