import type { BaseQuery } from '~/shared/base_list_queries'
import type { PartialRecord } from '~/utils/types'

type QueryDto = PartialRecord<keyof Pick<Gas, 'name'>, string[] | string>

/**
 * @description Interface that is used to interact with vehicle gas list,
 * namely filtering, sorting, partial response, search, pagination
 * @example {
 *    filters: {
 *      names: ["methane", "propan"]
 *     },
 *    sort_by: "name",
 *    sort_order: "desc",
 *    q: "Elec",
 *    page: {
 *      first: 10,
 *      after: 1
 *    },
 *    fields: ["inspection_period", "validity_period", "name"]
 *  }
 */
export type GasListQuery = BaseQuery<
  keyof Pick<Gas, 'name'>,
  QueryDto,
  'name' | 'validity_period' | 'inspection_period'
>

/**
 * @description This is base vehicle gas type that other related types are derived from
 */
interface Gas {
  id: string
  name: string
  validity_from: string
  validity_to: string
  inspection_from: string
  inspection_to: string
}

/**
 * @desctription This is single vehicle gas type on vehicles->notes->gas page.
 * Clients -> Vehicles -> Vehicles table -> Vehicle Show -> Notes -> Gas
 * @example {
 *    id: 1,
 *    name: "Methane",
 *    validity_period: ["01-01-2022", "01-09-2022"]
 *    inspection_period: ["01-01-2022", "01-09-2022"]
 *  }
 */
export interface GasResponse extends Pick<Gas, 'id' | 'name'> {
  validity_period: [string, string]
  inspection_period: [string, string]
}

/**
 * @desctription This is the type of vehicle gas.
 * Clients -> Vehicles -> Vehicles table -> Vehicle Show -> Notes -> Gas
 * @example {
 *    id: 1,
 *    name: "Methane",
 *    validity_period: ["01-01-2022", "01-09-2022"]
 *    inspection_period: ["01-01-2022", "01-09-2022"]
 *  }
 */
export interface GasFindResponse extends Pick<Gas, 'id' | 'name'> {
  validity_period: [string, string]
  inspection_period: [string, string]
}

/**
 * @description This is the type of gas record of vehicle to create
 * Clients -> Vehicles -> Vehicles table -> Vehicle Show -> Notes -> Gas -> Create Gas
 * @example {
 *    name: "Propane"
 *    validity_from: "01-01-2022",
 *    validity_to: "01-09-2022",
 *    inspection_from: "01-01-2022",
 *    inspection_to: "01-09-2022"
 *  }
 */
export type GasCreatePayload = Omit<Gas, 'id'>

/**
 * @description This is the type of gas record of vehicle to update
 * Clients -> Vehicles -> Vehicles table -> Vehicle Show -> Notes -> Gas -> Create Gas
 * @example {
 *    validity_to: "01-09-2022",
 *    inspection_to: "01-09-2022"
 *  }
 */
export type GasUpdatePayload = Partial<GasCreatePayload>
