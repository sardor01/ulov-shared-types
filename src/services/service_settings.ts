import type { BaseQuery } from '~/shared/base_list_queries'
import type { CompanyType } from '~/shared/enums'

/**
 * @description this interface is used for services in list page
 *
 * @example
 * const service1: ServiceResponse = {
 *    id: '12',
 *    company_type: 1,
 *    name: 'Test Service',
 *    details: ['Поршень', 'Шатуны', 'Замена ремня двигателя']
 * }
 */
export interface ServiceResponse {
  id: string
  company_type: CompanyType
  name: string
  details: string[]
}

interface QueryDto {
  company_type?: CompanyType[]
}

/**
 * @description This type is the query sent in GET request and also reflected in url
 *
 * @example
 * const query: ServiceHistoryQuery = {
 *    page: {
 *      after: '2',
 *      first: 10
 *    },
 *    q: 'John Doe',
 *    sort: { type: 'asc', key: 'service.name' },
 *    filter: {
 *      company_type: [1, 2, 3]
 *    }
 * }
 */
export type ListServiceHistoryQuery = BaseQuery<
  keyof Pick<ServiceResponse, 'name'>,
  QueryDto,
  keyof Pick<ServiceResponse, 'id' | 'name' | 'company_type'>
>

/**
 * @description This interface is the payload when creating service
 *
 * @example
 *
 * const service: ServiceCreatePayload = {
 *    company_type: 1,
 *    name: 'Test',
 *    details: ['Service 1', 'Service 2', 'Service 3']
 * }
 *
 */
export interface ServiceCreatePayload {
  company_type: CompanyType
  name: string
  details: string[]
}

/**
 * @description This interface is the payload when updating service
 *
 * @example
 *
 * const service: ServiceUpdatePayload = {
 *    company_type: 1,
 *    name: 'Test service'
 * }
 *
 */
export interface ServiceUpdatePayload extends Partial<ServiceCreatePayload> {
  id: string
}
