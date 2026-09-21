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
  usersGroups?: IUserGroup[],
  workgroupUnits?: IWorkgroupUnit[],
}

export interface IWorkgroupUnit extends IModel {
  legalPersonUuid: string,
  legalPerson?: ILegalPerson,

  workgroupUuid: string,
  workgroup?: IWorkgroup,

  usersGroups?: IUserGroup[]
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

  groups?: IUser_Group[],
  receivedInvites?: IUserGroup_Invite[],
  sentInvites?: IUserGroup_Invite[],
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
  groups?: IUser_Group[] | undefined
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
    groups?: IUser_Group[] | undefined,
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

export interface IUserGroup extends IModel {
  uuid: string,
  name: string,

  workgroupUnitUuid?: string,
  workgroupUnit?: IWorkgroupUnit,

  workgroupUuid: string,
  workgroup?: IWorkgroup,

  users?: IUser_Group[]
  authorizations?: IUserGroup_Authorization[],
  usersInvites?: IUserGroup_Invite[],
}

export interface IUser_Group extends IModel {
  uuid: string,

  userUuid: string,
  user?: IUser,
  userGroupUuid: string,
  userGroup?: IUserGroup
}

export const UserGroup_InviteStatus = {
  pending: 0,
  accepted: 1,
  refused: 2,
} as const
export type UserGroup_InviteStatus = typeof UserGroup_InviteStatus[keyof typeof UserGroup_InviteStatus]

export class UserGroup_InviteStatusUtils {
  static UserGroup_InviteStatusGetDescription = (status: UserGroup_InviteStatus) => {
    return status == UserGroup_InviteStatus.pending ? 'Pendente' : status == UserGroup_InviteStatus.accepted ? 'Aceito' : 'Negado'
  }
  static UserGroup_InviteStatusGetUiMaterialChipColor = (status: UserGroup_InviteStatus) => {
    return status == UserGroup_InviteStatus.pending ? 'warning' : status == UserGroup_InviteStatus.accepted ? 'success' : 'error'
  }
}

export interface IUserGroup_Invite extends IModel {
  uuid: string,
  userUuid: string,
  user?: IUser,
  targetUserUuid: string,
  targetUser?: IUser,
  userGroupUuid: string,
  userGroup?: IUserGroup,
  dtUnix: number,
  status: UserGroup_InviteStatus,
}

// AUTHORIZATION...

// ESSE MODELO DEVE TER A COLECAO REIMPLEMENTADA NOS APPS QUE CONECTAM NO DCENTER
// EX. A DEFINICAO DAS AUTORIZACOES REFERENTES AO APP ESCOLAR DEVEM FICAR NA LIB DO ESCOLAR
// EX. A DEFINICAO DAS AUTORIZACOES REFERENTES AO APP MESSENGER DEVEM FICAR NA LIB DO MESSENGER
export interface IAuthorization extends IModel {
  key: string,
  description: string,

  usersGroups?: IUserGroup_Authorization[]
}

// ESSE MODELO DEVE TER A COLECAO REIMPLEMENTADA NOS APPS QUE CONECTAM NO DCENTER
// EX. A RELACAO ENTRE OS GRUPOS DE USUARIOS E AS AUTORIZACOES REFERENTES AO APP ESCOLAR DEVEM FICAR NA LIB DO ESCOLAR
// EX. A RELACAO ENTRE OS GRUPOS DE USUARIOS E AS AUTORIZACOES REFERENTES AO APP MESSENGER DEVEM FICAR NA LIB DO MESSENGER
export interface IUserGroup_Authorization extends IModel {
  uuid: string,

  authorizationKey: string,
  authorization?: IAuthorization,
  userGroupUuid: string,
  userGroup?: IUserGroup,
}

// ...AUTHORIZATION

export interface IIntegrationClient extends IModel {
  uuid: string,

  workgroupUuid: string,
  workgroup?: IWorkgroup,

  name: string,
  secret: string,
  active?: boolean,

  authorizations?: IIntegrationClient_Authorization[]
}

export interface IIntegrationClient_Authorization extends IModel {
  uuid: string,
  authorizationKey: string,
  authorization?: IAuthorization,
  integrationClientUuid: string,
  integrationClient?: IIntegrationClient,
}