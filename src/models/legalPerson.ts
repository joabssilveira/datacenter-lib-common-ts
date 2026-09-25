import type { IModel, IUser, IWorkgroup, IWorkgroupUnit } from "."

export const LegalPersonTypes = {
  person: "person",
  company: "company",
} as const
export type LegalPersonTypes = typeof LegalPersonTypes[keyof typeof LegalPersonTypes]

export const LegalPersonTypeOptions: Record<keyof typeof LegalPersonTypes, {
  desc: string
  additionalDesc: string
}
> = {
  person: {
    desc: 'Pessoa Física',
    additionalDesc: '',
  },
  company: {
    desc: 'Pessoa Jurídica',
    additionalDesc: '',
  },
}

export interface ILegalPerson extends IModel {
  uuid: string,
  type: LegalPersonTypes,
  name: string,

  nationalId: string,
  nationalIdIdentityDocumentUuid: string,
  nationalIdIdentityDocument?: IIdentityDocument,

  phone1: string,
  phone2?: string,
  email?: string,

  identityDocuments?: ILegalPersonIdentityDocument[],
  addresses?: ILegalPersonAddress[],
  personData?: IPerson,
  companyData?: ICompany,

  workgroupUuid: string,
  workgroup?: IWorkgroup,

  workgroupUnit?: IWorkgroupUnit,

  users?: IUser[]
}

// novo
export interface ILegalPersonAddress {
  uuid: string,

  legalPersonUuid: string,
  legalPerson?: ILegalPerson,

  // TODO: geographic_region

  street: string,
  number: string,
  neighborhood: string,
  complement?: string,
  postalCode: string,
  reference?: string,
}

// novo
// DEFINICAO DOS DOCUMENTOS (TIPOS DE DOCUMENTOS) UTILIZADOS PELAS LEGAL PERSONS (RG, CNH)
export interface IIdentityDocument extends IModel {
  uuid: string,

  workgroupUuid: string,
  workgroup?: IWorkgroup,

  name: string,

  legalPersonType?: LegalPersonTypes,

  validationRegex?: string,
  mask?: string,
  replacement?: Record<string, string>,

  legalPersonIdentityDocuments?: ILegalPersonIdentityDocument[],
  legalPersons?: ILegalPerson[]
}

// novo
// ORGAOS EMISSORES DE DOCUMENTOS (TABELA DE SISTEMA)
export interface IIdentityDocumentIssuer {
  uuid: string,
  name: string,
  code?: string,
  legalPersonIdentityDocuments?: ILegalPersonIdentityDocument[],
}

// novo
// INSTANCIAS DOS DOCUMENTOS DAS ENTIDADES (RG DE JOAO)
export interface ILegalPersonIdentityDocument {
  uuid: string,

  legalPersonUuid: string,
  legalPerson?: ILegalPerson,

  identityDocumentUuid: string,
  identityDocument?: IIdentityDocument,

  identityDocumentIssuerUuid: string,
  identityDocumentIssuer?: IIdentityDocumentIssuer,

  value: string,
  issuedAt?: Date,
  expiresAt?: Date,
}

export const Gender = {
  male: 'male',
  female: 'female',
  other: 'other'
} as const
export type Gender = typeof Gender[keyof typeof Gender]

export const MaritalStatus = {
  single: 'single',
  married: 'married',
  divorced: 'divorced',
  widowed: 'widowed',
  civil_union: 'civil_union',
} as const
export type MaritalStatus = typeof MaritalStatus[keyof typeof MaritalStatus]

// novo
// ETINIAS (TABELA DE SISTEMA)
export interface IEthnicity {
  uuid: string,

  name: string,
  description: string,

  persons?: IPerson[] // virtual
}

export const Handedness = {
  right: 'right',
  left: 'left',
  ambidextrous: 'ambidextrous',
} as const
export type Handedness = typeof Handedness[keyof typeof Handedness]

// novo
// PESSOA FISICA
// novo
export interface IPerson extends IPersonHealth {
  legalPersonUuid: string,
  legalPerson?: ILegalPerson,

  ethnicityUuid?: string,
  ethnicity?: IEthnicity,

  dateOfBirth?: Date
  gender?: Gender
  birthCity?: string

  fatherLegalPersonUuid?: string
  father?: ILegalPerson

  motherLegalPersonUuid?: string
  mother?: ILegalPerson

  maritalStatus?: MaritalStatus
  occupation?: string
  handedness?: Handedness
}
export interface IPersonHealth {
  bloodType?: BloodType

  healthInsuranceName?: string
  healthInsuranceNumber?: string

  emergencyInstructions?: string

  healthConditions?: IPersonHealthCondition[] // virtual
  medications?: IPersonMedication[] // virtual
}

export const BloodType = {
  ["A+"]: "A+",
  ["A-"]: "A-",
  ["B+"]: "B+",
  ["B-"]: "B-",
  ["AB+"]: "AB+",
  ["AB-"]: "AB-",
  ["O+"]: "O+",
  ["O-"]: "O-",
} as const
export type BloodType = typeof BloodType[keyof typeof BloodType]

export const HealthConditionType = {
  allergy: "allergy",
  medical_condition: "medical_condition",
  disability: "disability",
  physical_restriction: "physical_restriction",
  other: "other",
} as const
export type HealthConditionType = typeof HealthConditionType[keyof typeof HealthConditionType]

// novo
// CATALOGO DE CONDICOES MEDICAS
export interface IHealthConditionCatalog {
  uuid: string,

  workgroupUuid: string,
  workgroup?: IWorkgroup,

  name: string,
  type: HealthConditionType,
  description?: string,

  persons?: IPersonHealthCondition[] // virtual
}

// novo
export interface IPersonHealthCondition {
  uuid: string,

  personUuid: string,
  person?: IPerson, // virtual

  healthConditionCatalogUuid: string,
  healthConditionCatalog?: IHealthConditionCatalog // virtual
}

// novo
// MEDICAMENTOS
export interface IMedication {
  uuid: string,

  workgroupUuid: string,
  workgroup?: IWorkgroup,

  name: string,

  persons?: IPersonMedication[] // virtual
}

// novo
export interface IPersonMedication {
  uuid: string,

  personUuid: string,
  person?: IPerson // virtual

  medicationUuid: string,
  medication?: IMedication // virtual
}

// novo
export interface ICompany {
  legalPersonUuid: string,
  legalPerson?: ILegalPerson,

  tradeName?: string,
  registrationDate?: Date,
}