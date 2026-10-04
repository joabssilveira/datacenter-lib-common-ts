// api
import {
  ApiRequestHeaders,
  type DatacenterApiRequestGetOptions,
} from './api'
import {
  ApiRoutesNames,
} from './api/routes'

// apiClient
import {
  AuthenticationsApiClient,
} from './apiClient/authentications'
import {
  AuthorizationsApiClient,
} from './apiClient/authorizations'
import {
  HubSettingsApiClient,
} from './apiClient/hubSettings'
import {
  IdentityDocumentsApiClient,
} from './apiClient/identityDocuments'
import {
  IntegrationClientsApiClient,
} from './apiClient/integrationClients'
import {
  IntegrationClient_AuthorizationsApiClient
} from './apiClient/integrationClients_authorizations'
import {
  LegalPersonsApiClient,
} from './apiClient/legalPersons'
import {
  UsersApiClient,
} from './apiClient/users'
import {
  Users_GroupsApiClient,
} from './apiClient/users_groups'
import {
  UsersGroupsApiClient,
} from './apiClient/usersGroups'
import {
  UsersGroups_invitesApiClient,
} from './apiClient/usersGroups_invites'
import {
  type IUsers_SharedData_ApiClientGetOptions,
  UsersSharedDataApiClient,
} from './apiClient/usersSharedData'
import {
  WorkgroupsApiClient,
} from './apiClient/workgroups'
import {
  WorkgroupUnitsApiClient,
} from './apiClient/workgroupUnits'

// authApp
import {
  AuthAppRoutesNames,
} from './authApp'

// errors
import {
  ApplicationError,
  AuthenticationError,
  AuthorizationError,
  NotFoundError,
} from './errors'

// license
// import {
//   LicenseKeys,
// } from './license'

// models

// models/authentications
import {
  type AuthenticationTokenDataLocal,
  AuthenticationTokenDataProviders,
  AuthenticationType,
  type IAuthentication,
  type IAuthenticationRequestBody,
  type IAuthenticationRequestBodyDefault,
  type IAuthenticationRequestBodyFromGoogleToken,
  type IAuthenticationRequestBodyFromUuid,
  type IAuthenticationRequestBodyIntegration,
  type IAuthenticationTokenData,
  type IAuthenticationTokenDataDefault,
  type IAuthenticationTokenDataGoogle,
  type IAuthenticationTokenDataIntegration,
} from './models/authentication'

// models/authorizations
import {
  AuthorizationKeys,
} from './models/authorizations'

import {
  type IHubSetting,
} from './models/hub'

// models/index
import {
  Agent,
  AgentType,
  type IAuthorization,
  type IIntegrationClient,
  type IIntegrationClientAuthorization,
  type IModel,
  type IUser,
  type IUserGroup,
  type IUsersGroup,
  type IUsersGroupAuthorization,
  type IUsersGroupInvite,
  type IUserSharedData,
  type IWorkgroup,
  type IWorkgroupUnit,
  User,
  UsersGroupInviteStatus,
  UsersGroupInviteStatusUtils,
} from './models'

// models/legalPerson
import {
  BloodType,
  Gender,
  Handedness,
  HealthConditionType,
  type ICompany,
  type IEthnicity,
  type IHealthConditionCatalog,
  type IIdentityDocument,
  type IIdentityDocumentIssuer,
  type ILegalPerson,
  type ILegalPersonAddress,
  type ILegalPersonIdentityDocument,
  type IMedication,
  type IPerson,
  type IPersonHealth,
  type IPersonHealthCondition,
  type IPersonMedication,
  LegalPersonTypeOptions,
  LegalPersonTypes,
  MaritalStatus,
} from './models/legalPerson'

import {
  type IOutboxEvent,
  type IOutboxEventPayloadUserCreated,
  type IOutboxEventPayloadWorkgroupCreated,
  OutboxEventStatus,
  OutboxEventType,
  type IOutboxEventPayloadUserUpdated,
  type IOutboxEventPayloadWorkgroupRemoved,
  type IOutboxEventListenerProcess, type IOutboxEventNotifyPayload,
  OutboxEventListenerProcessStatus,
} from './models/outbox'

// models/region
// import type { } from './models/region'

// types
import {
  type DatacenterCrudAuth,
  type DatacenterCrudAuthSkip,
  type DatacenterCrudAuthTokenDataDefault,
  type DatacenterCrudAuthTokenDataIntegration,
  DatacenterCrudAuthTypes,
  type DatacenterCrudAuthUser,
  getAgentFromCrudAuth,
  getCrudAuthFromTokenData,
} from './types'

// utils
import {
  LegalPersonUtils,
} from './utils/legalPerson'
import {
  formatPhone,
} from './utils/utils'
import {
  WorkgroupUnitUtils,
} from './utils/workgroupUnit'

export {
  Agent,
  AgentType,
  ApiRequestHeaders,
  ApiRoutesNames,
  ApplicationError,
  AuthAppRoutesNames,
  AuthenticationError,
  AuthenticationsApiClient,
  AuthenticationTokenDataProviders,
  AuthenticationType,
  AuthorizationError,
  NotFoundError,
  AuthorizationKeys,
  AuthorizationsApiClient,
  BloodType,
  DatacenterCrudAuth,
  DatacenterCrudAuthSkip,
  DatacenterCrudAuthTypes,
  DatacenterCrudAuthUser,
  formatPhone,
  Gender,
  getAgentFromCrudAuth,
  getCrudAuthFromTokenData,
  Handedness,
  HealthConditionType,
  HubSettingsApiClient,
  IdentityDocumentsApiClient,
  IntegrationClient_AuthorizationsApiClient,
  IntegrationClientsApiClient,
  LegalPersonsApiClient,
  LegalPersonTypeOptions,
  LegalPersonTypes,
  LegalPersonUtils,
  // LicenseKeys,
  MaritalStatus, OutboxEventStatus,
  OutboxEventType, User,
  Users_GroupsApiClient,
  UsersApiClient,
  UsersGroupInviteStatus,
  UsersGroupInviteStatusUtils,
  UsersGroups_invitesApiClient,
  UsersGroupsApiClient,
  UsersSharedDataApiClient,
  WorkgroupsApiClient,
  WorkgroupUnitsApiClient,
  WorkgroupUnitUtils,
  OutboxEventListenerProcessStatus,
  type IOutboxEventListenerProcess, 
  type IOutboxEventNotifyPayload,
  type IOutboxEventPayloadWorkgroupRemoved,
  type IOutboxEventPayloadUserUpdated,
  type AuthenticationTokenDataLocal,
  type DatacenterApiRequestGetOptions,
  type DatacenterCrudAuthTokenDataDefault,
  type DatacenterCrudAuthTokenDataIntegration,
  type IAuthentication,
  type IAuthenticationRequestBody,
  type IAuthenticationRequestBodyDefault,
  type IAuthenticationRequestBodyFromGoogleToken,
  type IAuthenticationRequestBodyFromUuid,
  type IAuthenticationRequestBodyIntegration,
  type IAuthenticationTokenData,
  type IAuthenticationTokenDataDefault,
  type IAuthenticationTokenDataGoogle,
  type IAuthenticationTokenDataIntegration,
  type IAuthorization,
  type ICompany,
  type IEthnicity,
  type IHealthConditionCatalog,
  type IHubSetting,
  type IIdentityDocument,
  type IIdentityDocumentIssuer,
  type IIntegrationClient,
  type IIntegrationClientAuthorization,
  type ILegalPerson,
  type ILegalPersonAddress,
  type ILegalPersonIdentityDocument,
  type IMedication,
  type IModel, 
  type IOutboxEvent,
  type IOutboxEventPayloadUserCreated,
  type IOutboxEventPayloadWorkgroupCreated, 
  type IPerson,
  type IPersonHealth,
  type IPersonHealthCondition,
  type IPersonMedication,
  type IUser,
  type IUserGroup,
  type IUsers_SharedData_ApiClientGetOptions,
  type IUsersGroup,
  type IUsersGroupAuthorization,
  type IUsersGroupInvite,
  type IUserSharedData,
  type IWorkgroup,
  type IWorkgroupUnit
}

