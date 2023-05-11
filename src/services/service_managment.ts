import type { BaseQuery } from '~/shared/base_list_queries'
import type { Media } from '~/shared/basic'
import type { CompanyType, UnitType, WorkStatus } from '~/shared/enums'

interface QueryDto {
  company_name?: string[]
  service_name?: string[]
  mechanic_name?: string[]
  status?: WorkStatus[]
}

type ChoosenColumns =
  | 'company_name'
  | 'service_name'
  | 'order_number'
  | 'order_created_at'
  | 'total_price'
  | 'mechanic_name'
  | 'service_count'
  | 'distance_traveled'
  | 'status'
  | 'unit_number'
  | 'measurement'

/**
 * @description This type is the query sent in GET request and also reflected in url
 *
 * @example
 *
 * const ServiceHistoryQuery: ServiceHistoryQuery = {
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
export type ListServiceHistoryPayloadCopy = BaseQuery<
  keyof Pick<
    ServiceHistoryResponse,
    'id' | 'service_name' | 'order_number' | 'total_price' | 'mechanic_name'
  >,
  QueryDto,
  ChoosenColumns
>

/**
 * @description This interface is a schema for Service History List Response
 *
 * @example
 *
 * const serviceHistoryList: ServiceHistoryResponse[] = [{
 *    id: '1',
 *    company_name: 'Auto repair',
 *    service_name: 'Расходники Пр',
 *    order_number: '1002',
 *    order_created_at: '2022-11-09T12:52:06.634Z',
 *    total_price: 45000,
 *    mechanic_name: 'Igor',
 *    service_count: 2,
 *    distance_traveled: 12000,
 *    status: 1,
 *    measurement: {
 *       measurement_number: 2,
 *       measurement_type: 1
 *    },
 *    avatar: https://api.uz/hmm.png
 * }]
 *
 */
export interface ServiceHistoryResponse {
  id: string
  company_name: string
  service_name: string
  order_number: number
  order_created_at: string
  total_price: number
  mechanic_name: string
  service_count: number
  distance_traveled: number
  status: WorkStatus
  measurement: Measurement
  avatar: string
}

type Measurement = {
  measurement_number: number
  measurement_type: UnitType
}

/**
 * @description This interface is a schema for Service History Show Response
 *
 * @example
 *
 * const serviceHistoryList:  ServiceHistoryFindResponse = {
 *    id: '1',
 *    order_number: '34',
 *    company_name: 'Test company 1',
 *    vehicle_number: '24',
 *    client_phone_number: '998904442211',
 *    status: 1,
 *    distance_traveled: 2122,
 *    services: [{
 *        service_name: 'Service 1',
 *        detail: 'This is test detail',
 *        fluid_type: 'Test fuel',
 *        measurement: {
 *          measurement_number: 3,
 *          measurement_type: 0
 *        },
 *        upcoming_distance_traveled: 4324,
 *        mechanic_name: 'John Doe',
 *        price: 244342
 *    }]
 *    total_price: 3123,
 *    order_created_at: '2022-11-09T12:52:06.634Z',
 *    comment: 'This is test comment',
 *    photo_paths: ['https://test.com/test3213.png', 'https://test.com/test456.png']
 * }
 *
 */
export interface ServiceHistoryFindResponse {
  id: string
  order_number: string
  company_name: string
  vehicle_number: string | null
  client_phone_number: string | null
  status: WorkStatus
  distance_traveled: number | null
  services: ServiceReportFindResponse[]
  total_price: number
  order_created_at: string
  comment: string
  photo_paths: Media['path'][]
}

/**
 * @description This interface is a schema for Service Report Show Response
 *
 * @example
 *
 * const serviceReport = {
 *    service_name: 'Service 1',
 *    detail: 'This is test detail',
 *    fluid_type: 'Test fuel',
 *    measurement: {
 *      measurement_number: 3,
 *      measurement_type: 0
 *    },
 *    upcoming_distance_traveled: 4324,
 *    mechanic_name: 'John Doe',
 *    price: 244342
 * }
 *
 */
export interface ServiceReportFindResponse {
  service_name: string
  detail: string
  fluid_type: string
  measurement: Measurement
  upcoming_distance_traveled: number
  mechanic_name: string
  price: number
}

/**
 * @description This interface is the payload when creating a service history
 *
 * @example
 *
 * const serviceHistory1: ServiceHistoryCreatePayload = {
 *    company_type: 'tow_truck',
 *    company_id: '2',
 *    vehicle_id: '56',
 *    client_phone_number: '998913336644',
 *    status: 1,
 *    distance_traveled: 213123,
 *    photo_ids: ['https://test.com/test3213.png', 'https://test.com/test456.png'],
 *    services: [{
 *        service_id: '2',
 *        detail: 'This is test detail',
 *        fluid_type: 'Test fuel',,
 *        measurement_number: 3,
 *        measurement_type: 0,
 *        upcoming_distance_traveled: 4654,
 *        mechanic_id: '87',
 *        price: 12346
 *    }],
 *    total_price: 123123,
 *    comment: 'This is test comment'
 * }
 *
 */
export interface ServiceHistoryCreatePayload {
  company_type: CompanyType
  company_id: string
  vehicle_id: string | null
  client_phone_number: string | null
  status: WorkStatus
  distance_traveled: number | null
  photo_ids: string[] | null
  services: ServiceReportCreatePayload[]
  total_price: number
  comment: string
}

/**
 * @description This interface is the payload when creating a service history
 *
 * @example
 *
 * const serviceHistory1: ServiceHistoryUpdatePayload = {
 *    company_id: '2',
 *    vehicle_id: '56',
 *    services: [{
 *        id: '54',
 *        service_id: '2',
 *        detail: 'This is test detail',
 *        fluid_type: 'Test fuel',,
 *        measurement_number: 3,
 *        measurement_type: 0,
 *        upcoming_distance_traveled: 4654,
 *        mechanic_id: '87',
 *        price: 12346
 *    }],
 *    total_price: 123123,
 *    comment: 'This is test comment'
 * }
 *
 */
export interface ServiceHistoryUpdatePayload
  extends Partial<Omit<ServiceHistoryCreatePayload, 'services'>> {
  services: ServiceReportUpdatePayload[]
}

/**
 * @description This interface is the payload when creating a service report
 *
 * @example
 *
 * const serviceReport1: ServiceReportCreatePayload = {
 *    service_id: '2',
 *    detail: 'This is test detail',
 *    fluid_type: 'Test fuel',,
 *    measurement_number: 3,
 *    measurement_type: 0,
 *    upcoming_distance_traveled: 4654,
 *    mechanic_id: '87',
 *    price: 12346
 * }
 *
 */
export interface ServiceReportCreatePayload {
  service_id: string
  detail: string
  fluid_type: string
  measurement_number: number
  measurement_type: UnitType
  upcoming_distance_traveled: number
  mechanic_id: string
  price: number
}

/**
 * @description This interface is the payload when creating a service report
 *
 * @example
 *
 * const serviceReport1: ServiceReportUpdatePayload = {
 *    id: '98',
 *    service_id: '2',
 *    detail: 'This is test detail',
 *    fluid_type: 'Test fuel',,
 *    mechanic_id: '87',
 *    price: 12346
 * }
 *
 */
export interface ServiceReportUpdatePayload extends Partial<ServiceReportCreatePayload> {
  id: string
}
