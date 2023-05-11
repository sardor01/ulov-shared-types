import type { BaseQuery } from '~/shared/base_list_queries'
import type { Company } from '~/general/company'
import type { CompanyCall } from '~/calls'
import type { PartialRecord } from '~/utils/types'

/**
 *
 * @description
 * AutoService phone call interface template
 *
 * @example
 *
 * {
 *  id: '23'
 *  company_id: '34'
 *  call_time: '10.11.2022 23:23:00'
 *  price: 345000
 *  payment_type: ['cash', 'card']
 *  phone: '+998936589565'
 *  address: {
 *    delivery: {
 *      name: 'Toshkent sh Chilonzor t 16kv',
 *      lat: 39.325345657,
 *      long: 69.545437676,
 *      region: 'Toshkent sh'
 *    }
 *  }
 *  description: 'Very nice'
 *  created_at: '11.12.2022 23:22:01'
 *  updated_at: '11.12.2022 00:00:14'
 * }
 *
 */
export type AutoServiceCall = CompanyCall

type QueryDto = PartialRecord<
  keyof Pick<AutoServiceCall, 'company_id' | 'call_time' | 'price'>,
  string[] | string
>

/**
 * @description This is the type that describes autoService list
 * @example {
*	page: {
		before: '12',
		after: '4',
		first: 6
	},
	q: 'Service 1',
	sort: { type: 'asc', key: 'company_id' },
	filter: { company_id: ['1', '3'], price: 45454 },
	fields: ['company_id', 'call_time']
 * }
 */
export type AutoServiceCallQuery = BaseQuery<
  keyof Pick<AutoServiceCall, 'company_id' | 'call_time' | 'price'>,
  QueryDto,
  keyof AutoServiceCall
>

/**
 *
 * @description
 * AutoService GET request List response template
 *
 * @example
 *
 * [
 *  {
 *    id: 23
 *    company: { id: '323', name: 'AutoRepair' }
 *    call_time: '10.11.2022 23:23:00'
 *    price: 345000
 *    payment_type: ['cash', 'card']
 *    phone: '+998936589565'
 *    address: {
 *      delivery: {
 *        name: 'Toshkent sh Chilonzor t 16kv',
 *        lat: 39.325345657,
 *        long: 69.545437676,
 *        region: 'Toshkent sh'
 *      }
 *    }
 *    description: 'Very nice',
 *    created_at: '11.12.2022 23:22:01'
 *    updated_at: '11.12.2022 00:00:14'
 *   }
 *  ]
 *
 */
export interface AutoServiceCallResponse extends Omit<AutoServiceCall, 'company_id'> {
  company: Pick<Company, 'id' | 'name'>
}

/**
 *
 * @description
 * AutoService GET single request payload
 *
 * @example
 *
 *  {
 *    id: 23
 *    company: { id: '323', name: 'AutoRepair' }
 *    call_time: '10.11.2022 23:23:00'
 *    price: 345000
 *    payment_type: ['cash', 'card']
 *    phone: '+998936589565'
 *    address: {
 *      delivery: {
 *        name: 'Toshkent sh Chilonzor t 16kv',
 *        lat: 39.325345657,
 *        long: 69.545437676,
 *        region: 'Toshkent sh'
 *      }
 *    }
 *    description: 'Very nice'
 *    created_at: '11.12.2022 23:22:01'
 *    updated_at: '11.12.2022 00:00:14'
 *   }
 *
 */
export type AutoServiceCallFindResponse = AutoServiceCallResponse

/**
 *
 * @description
 * AutoService phone call payload template
 *
 * @example
 *
 * {
 *  company_id: 34,
 *  call_time: '10.11.2022 23:23:00',
 *  price: 345000,
 *  payment_type: ['cash', 'card'],
 *  phone: '+998936589565',
 *  address: {
 *    delivery: {
 *      name: 'Toshkent sh Chilonzor t 16kv',
 *      lat: 39.325345657,
 *      long: 69.545437676,
 *      region: 'Toshkent sh'
 *    },
 *  },
 *  description: 'Very nice'
 * }
 *
 */
export type AutoServiceCallPayload = Omit<AutoServiceCall, 'id' | 'created_at' | 'updated_at'>

/**
 *
 * @description
 * AutoService phone call create request payload
 *
 * @example
 *
 * {
 *  company_id: 34,
 *  call_time: '10.11.2022 23:23:00',
 *  price: 345000,
 *  payment_type: ['cash', 'card'],
 *  phone: '+998936589565',
 *  address: {
 *    delivery: {
 *      name: 'Toshkent sh Chilonzor t 16kv',
 *      lat: 39.325345657,
 *      long: 69.545437676,
 *      region: 'Toshkent sh'
 *    },
 *  },
 *  description: 'Very nice'
 * }
 *
 */
export type AutoServiceCallCreatePayload = AutoServiceCallPayload

/**
 *
 * @description
 * AutoService update request payload
 *
 * This fields optional over `AutoServiceCallCreatePayload`
 *
 */
export type AutoServiceCallUpdatePayload = Partial<AutoServiceCallPayload>
