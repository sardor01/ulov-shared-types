import type { BaseQuery } from '~/shared/base_list_queries'
import type { PartialRecord } from '~/utils/types'

type QueryDto = PartialRecord<
  keyof Pick<TechnicalInspection, 'department_id' | 'place_id'>,
  string[] | string
>

/**
 * @description This type is the query sent in GET request and also reflected in url
 *
 * @example
 *
 * const TechnicalInspectionQuery: TechnicalInspectionQuery = {
 *    page: {
 *      before: '12',
 *      after: '4',
 *      first: 6
 *    },
 *    sort: { type: 'asc', key: 'department_name' },
 *    filter: { department_id: ['1', '2', '4'] },
 *    fields: ['department_name', 'validity_period', 'place']
 * }
 *
 */
export type TechnicalInspectionQuery = BaseQuery<
  keyof Pick<TechnicalInspection, 'department_id' | 'place_id'>,
  QueryDto,
  'department_name' | 'validity_period' | 'place'
>

/**
 *
 * @description This interface is base schema of technical inspection
 *
 * @example
 *
 * const technicalInspection1: TechnicalInspection = {
 *    id: '12',
 *    department_id: '324',
 *    place_id: '3',
 *    validity_from: '2022-11-09T12:52:06.634Z',
 *    validity_to: '2022-11-09T12:52:06.634Z'
 * }
 *
 */
interface TechnicalInspection {
  id: string
  department_id: string
  place_id: string
  validity_from: string
  validity_to: string
}

/**
 *
 * @description This interface is technical inspection for technical inspection Show page
 *
 * @example
 *
 * const technicalInspection1: TechnicalInspection = {
 *    id: '12',
 *    department_name: 'Test Department 1',
 *    validity_period: [
 *      '2022-11-09T12:52:06.634Z',
 *      '2022-11-09T12:52:06.634Z'
 *    ],
 *    place: 'Г. Ташкент'
 * }
 *
 */
export interface TechnicalInspectionFindResponse extends Pick<TechnicalInspection, 'id'> {
  department_name: string
  validity_period: [string, string]
  place: string
}

/**
 *
 * @description This interface is technical inspection for list page
 *
 * @example
 *
 * const technicalInspection1: TechnicalInspectionResponse = {
 *    id: '12',
 *    department_name: 'Test Department 1',
 *    validity_period: [
 *      '2022-11-09T12:52:06.634Z',
 *      '2022-11-09T12:52:06.634Z'
 *    ],
 *    place: 'Г. Ташкент'
 * }
 *
 */
export interface TechnicalInspectionResponse extends Pick<TechnicalInspection, 'id'> {
  department_name: string
  validity_period: [string, string]
  place: string
}

/**
 * @description This interface is the payload when creating technical inspection
 *
 * @example
 *
 * const technicalInspection: TechnicalInspectionCreatePayload = {
 *    department_id: '324',
 *    place_id: '3',
 *    validity_from: '2022-11-09T12:52:06.634Z',
 *    validity_to: '2022-11-09T12:52:06.634Z'
 * }
 *
 */
export type TechnicalInspectionCreatePayload = Omit<TechnicalInspection, 'id'>

/**
 * @description This interface is the payload when creating technical inspection
 *
 * @example
 *
 * const technicalInspection: TechnicalInspectionCreatePayload = {
 *    department_id: '324',
 *    place_id: '3',
 *    validity_from: '2022-11-09T12:52:06.634Z'
 * }
 *
 */
export type TechnicalInspectionUpdatePayload = Partial<TechnicalInspectionCreatePayload>
