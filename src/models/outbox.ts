export const OutboxEventType = {
  userCreated: 'user_created', // notificando que foi criado
  userUpdated: 'user_updated', // notificando que foi atualizado
  workgroupCreated: 'workgroup_created', // notificando que foi criado
  workgroupUpdated: 'workgroup_updated', // notificando que foi alterado
  workgroupRemoved: 'workgroup_removed', // notificando que foi removido
} as const
export type OutboxEventType = typeof OutboxEventType[keyof typeof OutboxEventType]

export interface IOutboxEventPayloadUserCreated {
  uuid: string,
  validated: boolean,
}

export interface IOutboxEventPayloadUserUpdated {
  uuid: string,
  validatedAssigned: boolean,
}

export interface IOutboxEventPayloadWorkgroupCreated {
  uuid: string,
  ownerUuid: string,
  name: string,
}

export interface IOutboxEventPayloadWorkgroupUpdated {
  uuid: string,
  name: string,
}

export interface IOutboxEventPayloadWorkgroupRemoved {
  uuid: string,
}

// 

export const OutboxEventStatus = {
  valid: 'valid',
  canceled: 'canceled',
} as const
export type OutboxEventStatus = typeof OutboxEventStatus[keyof typeof OutboxEventStatus]

export interface IOutboxEvent<
  T = OutboxEventType,
  P = IOutboxEventPayloadUserCreated
  | IOutboxEventPayloadUserUpdated
  | IOutboxEventPayloadWorkgroupCreated
  | IOutboxEventPayloadWorkgroupRemoved,
> {
  id: string,
  idempotencyKey: string, // unique where status in peding or processing
  eventType: T,
  payload: P,
  status: OutboxEventStatus,
  createdAt: Date,
  listenerProcesses?: IOutboxEventListenerProcess[]
}

export const OutboxEventListenerProcessStatus = {
  processing: 'processing',
  processed: 'processed',
  failed: 'failed',
} as const
export type OutboxEventListenerProcessStatus = typeof OutboxEventListenerProcessStatus[keyof typeof OutboxEventListenerProcessStatus]

export interface IOutboxEventListenerProcess {
  id: string,
  listenerId: string,
  outboxEventId: string,
  outboxEvent?: IOutboxEvent,

  status: OutboxEventListenerProcessStatus,
  createdAt: Date,
  processedAt: Date,
  retryCount: number,
  message: string,
  correlationId: string,
}

export interface IOutboxEventNotifyPayload {
  id: string,
  event_type: string,
}