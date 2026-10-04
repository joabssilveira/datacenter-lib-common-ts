export const OutboxEventType = {
  userCreated: 'user_created',
  userUpdated: 'user_updated',
  workgroupCreated: 'workgroup_created',
  workgroupRemoved: 'workgroup_removed',
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
}

export interface IOutboxEventPayloadWorkgroupRemoved {
  uuid: string,
}

// 

export const OutboxEventStatus = {
  // pending: 'pending',
  // processing: 'processing',
  // processed: 'processed',
  // failed: 'failed',
  valid: 'valid',
  canceled: 'canceled',
} as const
export type OutboxEventStatus = typeof OutboxEventStatus[keyof typeof OutboxEventStatus]

export interface IOutboxEvent {
  id: string,
  idempotencyKey: string, // unique where status in peding or processing
  eventType: OutboxEventType,
  payload: IOutboxEventPayloadUserCreated
  | IOutboxEventPayloadUserUpdated
  | IOutboxEventPayloadWorkgroupCreated
  | IOutboxEventPayloadWorkgroupRemoved,
  status: OutboxEventStatus,
  createdAt: Date,
  // processedAt: Date,
  // retryCount: number,
  // lastError: string,
  // correlationId: string,

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