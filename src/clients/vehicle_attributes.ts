import type { BaseQuery } from '~/shared/base_list_queries'
import type { Media } from '~/shared/basic'
import type { PartialRecord } from '~/utils/types'

type QueryDto = PartialRecord<keyof Pick<VehicleMake, 'id'>, string[] | string>

/**
 * @description Interface that is used to interact with vehicle settings, namely filtering, sorting, partial response, search, pagination
 * @example {
 *    filters: {
 *      make_ids: [1,2,3]
 *    },
 *    sort_by: "model_count",
 *    sort_order: "desc",
 *    q: "Kur",
 *    page: {
 *      first: 10,
 *      after: 1
 *    },
 *    fields: ["name", "model_count"]
 *  }
 */
export type VehicleMakeListQuery = BaseQuery<
  keyof Pick<VehicleMake, 'name'> | 'model_count',
  QueryDto,
  'name' | 'model_count'
>

/**
 * @description Base vehicle make type to derive other related types
 */
export interface VehicleMake {
  id: string
  logo_id: string
  name: string
}

/**
 * @description Base vehicle model type to derive other related types
 */
export interface VehicleModel {
  id: string
  name: string
}

/**
 * @description This is the type of vehicle make create
 * @example {
 *    logo_id: 1,
 *    name: "Tesla",
 *    models: ["X", "S"]
 *  }
 */
export interface VehicleMakeCreatePayload extends Omit<VehicleMake, 'id'> {
  models: string[]
}

/**
 * @description Update vehicle make on vehicle settings
 * @example {
 *    logo_id: 1,
 *    name: "Tesla",
 *    models: [
 *      {
 *        id: 1,
 *        name: "S"
 *      },
 *      {
 *        name: "Z"
 *      }
 *    ]
 *  }
 */
export type VehicleMakeUpdatePayload = Partial<VehicleMakeCreatePayload> & {
  models: (VehicleModel | Omit<VehicleModel, 'id'>)[]
}

/**
 * @description Single vehicle make in vehicle settings page
 * @example {
 *    name: "Ravon",
 *    logo: "https://api.uz/files/hhm.png",
 *    model_count: 2,
 *    models: [{ id: 1, name: "Nexia" }, { id: 2, name: "Cobalt" }]
 *  }
 */
export interface VehicleMakeResponse extends Omit<VehicleMake, 'logo_id'> {
  logo: Media['path']
  model_count: number
  models: VehicleModel[]
}
