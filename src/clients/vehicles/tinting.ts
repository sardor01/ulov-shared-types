import type { BaseQuery } from '~/shared/base_list_queries'
import type { PartialRecord } from '~/utils/types'

type QueryDto = PartialRecord<keyof Pick<Tinting, 'type' | 'validity_period'>, string[] | string>

/**
 * @description This type is the query sent in GET request and also reflected in url
 *
 * @example
 *
 * const RoleQuery: RoleQuery = {
 *    page: {
 *      before: '12',
 *      after: '4',
 *      first: 6
 *    },
 *    sort: { type: 'asc', key: 'type' },
 *    filter: { validity_period: '2022-11-09T12:52:06.634Z' },
 *    fields: ['id', 'type', 'validity_period']
 * }
 *
 */
export type TintingListQuery = BaseQuery<
  keyof Pick<Tinting, 'type'>,
  QueryDto,
  keyof Pick<Tinting, 'type' | 'validity_period'>
>

/**
 *
 * @description This interface is base schema of tinting
 *
 * @example
 *
 * const tinting1: Tinting = {
 *    id: '12',
 *    type: 'Tinting type 1',
 *    place_id: '3',
 *    validity_period: ['2022-11-09T12:52:06.634Z', '2022-11-09T12:52:06.634Z']
 * }
 *
 */
interface Tinting {
  id: string
  type: string
  validity_period: [string, string]
}

/**
 *
 * @desctription This is the type of tinting.
 * Clients -> Vehicles -> Vehicles table -> Vehicle Show -> Notes -> Tinting
 *
 */
export type TintingFindResponse = Tinting

/**
 *
 * @desctription This is single tinting type on vehicles -> notes -> tinting page.
 * Clients -> Vehicles -> Vehicles table -> Vehicle Show -> Notes -> Tinting
 *
 */
export type TintingResponse = Tinting

/**
 * @description This interface is the payload when creating tinting
 *
 * @example
 *
 * const tinting: TintingCreatePayload = {
 *    type_id: '22',
 *    validity_from: '2022-11-09T12:52:06.634Z',
 *    validity_to: '2022-11-09T12:52:06.634Z'
 * }
 *
 */
export interface TintingCreatePayload {
  type_id: string
  validity_from: string
  validity_to: string
}

/**
 * @description This interface is the payload when updating tinting
 *
 * @example
 *
 * const tinting: TintingCreatePayload = {
 *    type_id: '22'
 * }
 *
 */
export type TintingUpdatePayload = Partial<TintingCreatePayload>
