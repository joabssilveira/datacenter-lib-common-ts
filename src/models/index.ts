// import type { CheckLicenseResponseItemStatus } from 'licensemanager-lib-common-ts'
import type { IAuthentication } from "./authentication"
import type { IIdentityDocument, ILegalPerson } from './legalPerson'

export interface IModel {
  created_at: Date,
  updated_at: Date,
  deleted_at?: Date,
  note?: string,
}

export interface IWorkgroup extends IModel {
  uuid: string,
  name: string,

  legalPersons?: ILegalPerson[]
  integrationClients?: IIntegrationClient[]

  // licenseData?: {
  //   status: CheckLicenseResponseItemStatus,
  // }

  identityDocuments?: IIdentityDocument[],
  usersGroups?: IUsersGroup[],
  workgroupUnits?: IWorkgroupUnit[],
}

export interface IWorkgroupUnit extends IModel {
  legalPersonUuid: string,
  legalPerson?: ILegalPerson,

  workgroupUuid: string,
  workgroup?: IWorkgroup,

  usersGroups?: IUsersGroup[]
}

export interface IUser extends IModel {
  uuid: string,
  name: string,
  login: string,
  email: string,
  pwd: string,
  imageUrl?: string,

  validated?: boolean,

  legalPersonUuid?: string,
  legalPerson?: ILegalPerson,

  groups?: IUserGroup[],
  receivedInvites?: IUsersGroupInvite[],
  sentInvites?: IUsersGroupInvite[],
  authentications?: IAuthentication[],
}

export class User implements IUser {
  uuid: any
  name: string
  login: string
  email: string
  validated?: boolean | undefined
  pwd: string
  imageUrl?: string | undefined
  legalPersonUuid?: string | undefined
  legalPerson?: ILegalPerson | undefined
  groups?: IUserGroup[] | undefined
  created_at: Date
  updated_at: Date
  deleted_at?: Date | undefined

  constructor(data: {
    uuid: string,
    name: string
    login: string,
    email: string,
    validated?: boolean,
    pwd: string,
    imageUrl?: string | undefined,
    legalPersonUuid?: string | undefined,
    legalPerson?: ILegalPerson | undefined,
    groups?: IUserGroup[] | undefined,
    created_at: Date,
    updated_at: Date,
    deleted_at?: Date | undefined,
  }) {
    this.uuid = data.uuid
    this.name = data.name
    this.login = data.login
    this.email = data.email
    this.validated = data.validated
    this.pwd = data.pwd
    this.imageUrl = data.imageUrl
    this.legalPersonUuid = data.legalPersonUuid
    this.legalPerson = data.legalPerson
    this.groups = data.groups
    this.created_at = data.created_at
    this.updated_at = data.updated_at
    this.deleted_at = data.deleted_at
  }

  toUserSharedData() {
    const sharedDataKeys: (keyof IUserSharedData)[] = ['uuid', 'name', 'login', 'email', 'validated', 'imageUrl']
    const sharedData: Partial<IUserSharedData> = {};
    sharedDataKeys.forEach(key => {
      if (key in this) {
        sharedData[key] = this[key];
      }
    });

    return sharedData as IUserSharedData;
  }

  static toUserSharedData(input: any): any {
    // Verifica se o objeto é um IUser
    if (
      input &&
      typeof input === 'object' &&
      'uuid' in input &&
      'name' in input &&
      'login' in input &&
      'email' in input &&
      'pwd' in input
    ) {
      // Cria uma instância de User e converte para IUserSharedData
      const userInstance = input instanceof User ? input : new User(input);
      return userInstance.toUserSharedData();
    }

    if (typeof input === 'object' && input !== null) {
      // Itera pelas propriedades do objeto ou elementos do array
      if (Array.isArray(input)) {
        return input.map(item => User.toUserSharedData(item));
      } else {
        const transformedObject: any = {};
        for (const key of Object.keys(input)) {
          transformedObject[key] = User.toUserSharedData(input[key]);
        }
        return transformedObject;
      }
    }

    // Retorna o valor original se não for um objeto ou array
    return input;
  }
}

export interface IUserSharedData {
  uuid: string,
  name: string,
  login: string,
  email: string,
  validated?: boolean,
  imageUrl?: string,
}

export interface IUsersGroup extends IModel {
  uuid: string,
  name: string,

  workgroupUnitUuid?: string,
  workgroupUnit?: IWorkgroupUnit,

  workgroupUuid: string,
  workgroup?: IWorkgroup,

  users?: IUserGroup[]
  authorizations?: IUsersGroupAuthorization[],
  usersInvites?: IUsersGroupInvite[],
}

export interface IUserGroup extends IModel {
  uuid: string,

  userUuid: string,
  user?: IUser,
  userGroupUuid: string,
  userGroup?: IUsersGroup
}

export const UsersGroupInviteStatus = {
  pending: 0,
  accepted: 1,
  refused: 2,
} as const
export type UsersGroupInviteStatus = typeof UsersGroupInviteStatus[keyof typeof UsersGroupInviteStatus]

export class UsersGroupInviteStatusUtils {
  static UsersGroupInviteStatusGetDescription = (status: UsersGroupInviteStatus) => {
    return status == UsersGroupInviteStatus.pending ? 'Pendente' : status == UsersGroupInviteStatus.accepted ? 'Aceito' : 'Negado'
  }
  static UsersGroupInviteStatusGetUiMaterialChipColor = (status: UsersGroupInviteStatus) => {
    return status == UsersGroupInviteStatus.pending ? 'warning' : status == UsersGroupInviteStatus.accepted ? 'success' : 'error'
  }
}

export interface IUsersGroupInvite extends IModel {
  uuid: string,
  userUuid: string,
  user?: IUser,
  targetUserUuid: string,
  targetUser?: IUser,
  userGroupUuid: string,
  userGroup?: IUsersGroup,
  dtUnix: number,
  status: UsersGroupInviteStatus,
}

// AUTHORIZATION...

// ESSE MODELO DEVE TER A COLECAO REIMPLEMENTADA NOS APPS QUE CONECTAM NO DCENTER
// EX. A DEFINICAO DAS AUTORIZACOES REFERENTES AO APP ESCOLAR DEVEM FICAR NA LIB DO ESCOLAR
// EX. A DEFINICAO DAS AUTORIZACOES REFERENTES AO APP MESSENGER DEVEM FICAR NA LIB DO MESSENGER
export interface IAuthorization extends IModel {
  key: string,
  description: string,

  usersGroups?: IUsersGroupAuthorization[]
}

// ESSE MODELO DEVE TER A COLECAO REIMPLEMENTADA NOS APPS QUE CONECTAM NO DCENTER
// EX. A RELACAO ENTRE OS GRUPOS DE USUARIOS E AS AUTORIZACOES REFERENTES AO APP ESCOLAR DEVEM FICAR NA LIB DO ESCOLAR
// EX. A RELACAO ENTRE OS GRUPOS DE USUARIOS E AS AUTORIZACOES REFERENTES AO APP MESSENGER DEVEM FICAR NA LIB DO MESSENGER
export interface IUsersGroupAuthorization extends IModel {
  uuid: string,

  authorizationKey: string,
  authorization?: IAuthorization,
  userGroupUuid: string,
  userGroup?: IUsersGroup,
}

// ...AUTHORIZATION

export interface IIntegrationClient extends IModel {
  uuid: string,

  workgroupUuid: string,
  workgroup?: IWorkgroup,

  name: string,
  secret: string,
  active?: boolean,

  authorizations?: IIntegrationClientAuthorization[]
}

export interface IIntegrationClientAuthorization extends IModel {
  uuid: string,
  authorizationKey: string,
  authorization?: IAuthorization,
  integrationClientUuid: string,
  integrationClient?: IIntegrationClient,
}

export const AgentType = {
  user: 0,
  integrationClient: 1,
} as const
export type AgentType = typeof AgentType[keyof typeof AgentType]

export type Agent = {
  uuid: string,
  type: AgentType,
  data?: IUserSharedData | IIntegrationClient
}