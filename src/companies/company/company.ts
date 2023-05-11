import type { WorkingTimeInterface } from '~/shared/basic'
import type { Company } from '~/general/company'
import type { BaseQuery } from '~/shared/base_list_queries'
import type { StatusType } from '~/shared/enums'

export interface CompanyService {
  type_id: string
  service_ids: string[]
}

export interface UserPayload {
  id: string
  first_name: string
  last_name: string
}

interface CompanyListFilters {
  name?: string[]
  phone?: string
  address?: string
  status?: StatusType
  rating?: number
  working_time?: Date
}

/**
 * @description Interface that is used to company  query list,
 * namely filtering, sorting, partial response, search, pagination
 *
 *  @example:
 * const query: CompanyListQuery = {
      page: { before: '10' },
      q: 'tommy',
      sort: { type: OrderType.ASC, key: CompanyListSortableColumns.name },
      filter: { name: ['Tommy', 'Jarry'], rating: 4 },
      fields: [
        CompanyListPartialType.name,
        CompanyListPartialType.address,
        CompanyListPartialType.phone
      ]
    } 
 */
export type CompanyListQuery = BaseQuery<
  keyof Pick<Company, 'id' | 'name'> | 'is_free' | 'rating' | 'working_time',
  CompanyListFilters,
  keyof Pick<Company, 'name' | 'phone' | 'type' | 'address'>
>

/**
 * @description Interface is used to company list
 *
 * @example
 * cnst companyResponse: CompanyResponse = {
 *  d: '1',
 *  nme: 'Avtoretet',
 *  ype: 0,
 *  hone: '+998973585869',
 *  adress: {
 *   delivery: {
 *     name: 'Tashkent, Yeuju University',
 *     lat: 49.54544,
 *     long: 69.4545,
 *     region: 'Tashkent city'
 *   }
 *  }
 * satus: 0,
 *  over: {
 *   id: '547698',
 *  path: 'http://example.png',
 *   name: 'Photo of dogs',
 *   size: 12345678
 *  }
 *  s_free: true,
 *  ating: 4,
 *  wrking_time: {
 *   days: [1, 5, 4],
 *   from: '01/01/2022',
 *   to: '01/01/2022'
 * },
 *  company_id: '1'
 *}
 */
export interface CompanyResponse
  extends Omit<Company, 'parent_id' | 'payment' | 'description' | 'photos'> {
  is_free: boolean
  rating: number
  working_time: WorkingTimeInterface
  company_id: string
}

export interface CompanyPayload extends Company {
  password: string
  services: CompanyService[]
  working_days: number[]
  from: string
  to: string
}
/**
 * @description This interface  is used for company create
 *
 * @example
 *const companyCreatePayload: CompanyCreatePayload = {
 *  name: 'Avtoritet',
 *  parent_id: '1',
 *  type: 0,
 *  phone: '+998973585869',
 *  payment: [0, 1],
 *  address: {
 *    delivery: {
 *      name: 'Tashkent, Yeuju University',
 *      lat: 49.54544,
 *      long: 69.4545,
 *      region: 'Tashkent city'
 *    }
 *  },
 *  status: 0,
 *  description: 'Good',
 *  photos: [
 *    {
 *      id: '547698',
 *      path: 'http://example.png',
 *      name: 'Photo of dogs',
 *      size: 12345678
 *    }
 *  ],
 *  cover: {
 *    id: '547698',
 *    path: 'http://example.png',
 *    name: 'Photo of dogs',
 *    size: 12345678
 *  },
 *  password: '455878',
 *  services: [
 *    {
 *      type_id:'1',
 *      service_ids:['1','2']
 *      },
 *  ],
 *  working_days: [1,5],
 *  from: 'string',
 *  to: 'string'
 *}
 * }
 */
export type CompanyCreatePayload = CompanyPayload
/**
 * @description This interfase is used for update company
 *
 * @example example like companyCreatePayload
 */
export type CompanyUpdatePayload = Partial<CompanyCreatePayload>

/**
 * @description This interfase is used for show one company
 *
 * @example
 *  *const companyCreatePayload: CompanyCreatePayload = {
 *  id:'1',
 *  name: 'Avtoritet',
 *  parent_id: '1',
 *  type: 0,
 *  phone: '+998973585869',
 *  payment: [0, 1],
 *  address: {
 *    delivery: {
 *      name: 'Tashkent, Yeuju University',
 *      lat: 49.54544,
 *      long: 69.4545,
 *      region: 'Tashkent city'
 *    }
 *  },
 *  status: 0,
 *  description: 'Good',
 *  photos: [
 *    {
 *      id: '547698',
 *      path: 'http://example.png',
 *      name: 'Photo of dogs',
 *      size: 12345678
 *    }
 *  ],
 *  cover: {
 *    id: '547698',
 *    path: 'http://example.png',
 *    name: 'Photo of dogs',
 *    size: 12345678
 *  },
 *  services: [
 *    {
 *      type_id:'1',
 *      service_ids:['1','2']
 *      },
 *  ],
 *  working_time:{
 *      days: [1,5],
 *      from: 'string',
 *      to: 'string'
 *   },
 *  rating:4
 * }
 */
export interface CompanyFindResponse extends Company {
  services: CompanyService[]
  working_time: WorkingTimeInterface
  rating: number
}
