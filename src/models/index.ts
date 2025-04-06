import { JwtPayload } from "jsonwebtoken"

// authentication...

// TODO-rename to AuthenticationTypes
export const AuthenticationType = {
  default: 0,
  uuid: 1,
  google: 2,
} as const
export type AuthenticationType = typeof AuthenticationType[keyof typeof AuthenticationType]

export interface IAuthenticationRequestBody {
  type: AuthenticationType
}

export interface IAuthenticationRequestBodyDefault extends IAuthenticationRequestBody {
  login: string,
  pwd: string,
}

export interface IAuthenticationRequestBodyFromUuid extends IAuthenticationRequestBody {
  uuid: string,
}

export interface IAuthenticationRequestBodyFromGoogleToken extends IAuthenticationRequestBody {
  idToken: string,
  accessToken: string,
}

// AUTHENTICATION RESPONSE
export interface IAuthentication {
  uuid: string,
  userUuid: string,
  // user?: IUser,
  token: string,
}

// USED IN TOKEN ON FIELD ISS OF JWT TOKEN
export const AuthenticationTokenDataProviders = {
  default: 'default',
  google: 'accounts.google.com',
} as const
export type AuthenticationTokenDataProviders = typeof AuthenticationTokenDataProviders[keyof typeof AuthenticationTokenDataProviders]

export interface IAuthenticationTokenData extends JwtPayload {

}

export interface IAuthenticationTokenDataDefault extends IAuthenticationTokenData {
  authUuid: string,
  user: IUserSharedData,
}

export interface IAuthenticationTokenDataGoogle extends IAuthenticationTokenData {
  azp: string,
  email: string,
  email_verified: string,
  at_hash: string,
}

// ...authentication

export interface IWorkgroupUnitType {
  uuid: string,
  name: string,
  workgroupUnits?: IWorkgroupUnit[]
}

export interface IWorkgroup {
  uuid: string,
  name: string,
  // allowCreateUsersFreely?: boolean,

  legalPersons?: ILegalPerson[]
}

// export const legalPersonPropsNames = {
//   workgroupUuid: 'workgroupUuid'
// }

export const LegalPersonTypes = {
  person: 0,
  company: 1,
} as const
export type LegalPersonTypes = typeof LegalPersonTypes[keyof typeof LegalPersonTypes]

export interface ILegalPerson {
  uuid: string,
  type: LegalPersonTypes,
  name: string,

  workgroupUuid: string,
  workgroup?: IWorkgroup,

  workgroupUnit?: IWorkgroupUnit,

  users?: IUser[]
}

export interface IWorkgroupUnit {
  workgroupUnitTypeUuid: string,
  workgroupUnitType?: IWorkgroupUnitType,
  legalPersonUuid: string,
  legalPerson?: ILegalPerson,

  usersGroups?: IUserGroup[]
}

export interface IUser {
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

export interface IUserGroup {
  uuid: string,
  name: string,

  workgroupUnitUuid: string,
  workgroupUnit?: IWorkgroupUnit,

  users?: IUser_Group[]
  authorizations?: IUserGroup_Authorization[],
  usersInvites?: IUserGroup_Invite[],
}

export interface IUser_Group {
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

export interface IUserGroup_Invite {
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
export interface IAuthorization {
  key: string,
  description: string,

  usersGroups?: IUserGroup_Authorization[]
}

// ESSE MODELO DEVE TER A COLECAO REIMPLEMENTADA NOS APPS QUE CONECTAM NO DCENTER
// EX. A RELACAO ENTRE OS GRUPOS DE USUARIOS E AS AUTORIZACOES REFERENTES AO APP ESCOLAR DEVEM FICAR NA LIB DO ESCOLAR
// EX. A RELACAO ENTRE OS GRUPOS DE USUARIOS E AS AUTORIZACOES REFERENTES AO APP MESSENGER DEVEM FICAR NA LIB DO MESSENGER
export interface IUserGroup_Authorization {
  uuid: string,

  authorizationKey: string,
  authorization?: IAuthorization,
  userGroupUuid: string,
  userGroup?: IUserGroup,
}

// ...AUTHORIZATION