import type { BaseQuery } from '~/shared/base_list_queries'
import type { PartialRecord } from '~/utils/types'

/**
 * @description Power of attornet type. This type will be used
 * when we create power of attorney
 */
enum PowerOfAttorneyType {}

type QueryDto = PartialRecord<keyof Pick<PowerOfAttorney, 'type'>, string[] | string>

/**
 * @description Interface that is used to interact with vehicle power of attornet list,
 * namely filtering, sorting, partial response, search, pagination
 * @example {
 *    filters: {
 *      type: ["general"]
 *    },
 *    sort_by: "type",
 *    sort_order: "desc",
 *    q: "Hur",
 *    page: {
 *      first: 10,
 *      after: 1
 *    },
 *    fields: ["type", "validity_period", "licence", "issued_to", "passport"]
 *  }
 */
export type PowerOfAttorneyListQuery = BaseQuery<
  keyof Pick<PowerOfAttorney, 'type'>,
  QueryDto,
  'type' | 'validity_period' | 'licence' | 'issued_to' | 'passport'
>

/**
 * @description Base PowerOfAttorney type to derive other types from
 */
interface PowerOfAttorney {
  id: string
  type: PowerOfAttorneyType
  validity_from: string
  validity_to: string
  licence: {
    series: string
    number: number
  }
  issued_to: string
  passport: {
    series: string
    number: number
  }
}

/**
 * @description This is the type of power of attorney on it show page.
 * Clients -> Vehicles -> Vehicles table -> Vehicle Show -> Notes -> Power Of Attorneys -> Show
 * @example {
 *    validity_period: ["01-01-2022", "02-09-2022"],
 *    type: "general",
 *    licence: {
 *      series: "AK",
 *      number: 74327647
 *    },
 *    issued_to: "John",
 *    passport: {
 *      series: "KP",
 *      number: 23488393
 *    }
 *  }
 */
export interface PowerOfAttorneyFindResponse
  extends Omit<PowerOfAttorney, 'validity_from' | 'validity_to'> {
  validity_period: [string, string]
}

/**
 * @description This is the type of single power of attorney on list
 * Clients -> Vehicles -> Vehicles table -> Vehicle Show -> Notes -> Power Of Attorneys
 * @example {
 *    validity_period: ["01-01-2022", "02-09-2022"],
 *    type: "general",
 *    licence: {
 *      series: "AK",
 *      number: 74327647
 *    },
 *    issued_to: "John",
 *    passport: {
 *      series: "KP",
 *      number: 23488393
 *    }
 *  }
 */
export interface PowerOfAttorneyResponse
  extends Omit<PowerOfAttorney, 'validity_from' | 'validity_to'> {
  validity_period: [string, string]
}

/**
 * @description This is the type of create power of attorney payload to attach to vehicle
 * @example {
 *    type: "general"
 *    validity_from: "02-01-2022",
 *    validity_to: "02-09-2022",
 *    licence: {
 *      series: "IK"
 *      number: 3478375
 *    },
 *    issued_to: "Kira",
 *    passport: {
 *      series: "ER"
 *      number: 3435
 *    }
 *  }
 */
export type PowerOfAttorneyCreatePayload = Omit<PowerOfAttorney, 'id'>

/**
 * @description This is the type of update power of attorney payload that is attached to vehicle
 * @example {
 *    type: "general"
 *    validity_from: "02-01-2023",
 *    validity_to: "02-09-2023",
 *    licence: {
 *      series: "Ki"
 *      number: 3478376
 *    },
 *    issued_to: "Kiram",
 *    passport: {
 *      series: "RE"
 *      number: 3436
 *    }
 *  }
 */
export type PowerOfAttorneyUpdatePayload = Partial<PowerOfAttorneyCreatePayload>
