import { StringUtils } from "fwork-jsts-common"
import { ILegalPerson } from "../models/legalPerson"
import isEmail from "validator/lib/isEmail"

export class LegalPersonUtils {
  static userInputValidateToPostOrPut(args: {
    instance: ILegalPerson,
  }): boolean {
    // Evitar usar Partial como parametro de funcao pra não deixar a tipagem fraca. O Partial vai permitir passar qualquer coisa no parametro.
    // Usar Partial apenas no escopo local.
    const partialInstance: Partial<ILegalPerson> = args.instance

    if (!partialInstance.nationalIdIdentityDocument)
      // throw Error(`Não é possível validar a entidade sem o tipo de documento: ${partialInstance.name ?? 'unknown name'}`)
      return false

    let entityNationalIdRegexp: string = partialInstance.nationalIdIdentityDocument?.validationRegex ?? ''

    const result = !!partialInstance.name
      // nationalId
      && !!partialInstance.nationalId && (!StringUtils.isEmpty(entityNationalIdRegexp?.trim()) ? StringUtils.regExpCheck(partialInstance.nationalId, entityNationalIdRegexp!) : true)
      // phone
      && !!partialInstance.phone1
      // email
      && (!partialInstance.email || isEmail(partialInstance.email))

      // health
      && !partialInstance.personData?.healthConditions?.some(h =>
        !h.healthConditionCatalogUuid
      )
      && !partialInstance.personData?.medications?.some(m =>
        !m.medicationUuid
      )

      // person data father
      && (!partialInstance.personData?.father || LegalPersonUtils.userInputValidateToPostOrPut({
        instance: partialInstance.personData.father,
      }))
      // person data mother
      && (!partialInstance.personData?.mother || LegalPersonUtils.userInputValidateToPostOrPut({
        instance: partialInstance.personData.mother,
      }))

      // identityDocuments
      && !partialInstance.identityDocuments?.some(d =>
        !d.identityDocumentUuid
        || !d.value
      )
      // addreses
      && !partialInstance.addresses?.some(a =>
        // !a.cityUuid TODO: region
        !a.street
        || !a.number
        || !a.postalCode
      )

    return result
  }
}