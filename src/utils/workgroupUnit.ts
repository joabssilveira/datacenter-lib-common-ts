import { GQLWhere } from 'goqlite-client'
import { IWorkgroupUnit } from '../models'

export class WorkgroupUnitUtils {
  static getFullTextSearchWhere = (searchText: string) => {
    const where: GQLWhere<IWorkgroupUnit> | undefined = searchText ? {
      $and: [...searchText.trim().split(' ').map(text => {
        const result: GQLWhere<IWorkgroupUnit> = {
          $or: [{
            'legalPerson.name': { $ilike: text }
          }, {
            'workgroup.name': { $ilike: text }
          }, {
            'legalPerson.nationalId': { $ilike: text }
          },]
        }

        return result
      })]
    } : undefined

    return where
  }

  static sort = (args: {
    data: IWorkgroupUnit[], lang: string
  }) => {
    args.data.sort((a, b) => {
      let result = a?.legalPerson?.workgroup?.name.toUpperCase().localeCompare(b?.legalPerson?.workgroup?.name.toUpperCase() ?? '', args.lang) ?? 0
      if (result == 0)
        result = a?.legalPerson?.name.toUpperCase().localeCompare(b?.legalPerson?.name.toUpperCase() ?? '', args.lang) ?? 0
      
      return result
    })
  }
}