import type { BaseQuery } from '~/shared/base_list_queries'
import type { Company } from '~/general/company'
import type { CompanyCall, CallsFuelType } from '~/calls'
import type { PartialRecord } from '~/utils/types'

/**
 *
 * @description
 * ReFueling phone call interface template
 *
 * @field `min_amount` is company could delivery fuel amount
 *
 * @example
 *
 * {
 *  id: 23
 *  company_id: 34
 *  fuel_type_id: 567,
 *  amount: 10000,
 *  min_amount: 5
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
export interface FuelCall extends CompanyCall {
  fuel_type_id: string
  amount: number
  min_amount: number
}

type QueryDto = PartialRecord<
  keyof Pick<FuelCall, 'company_id' | 'call_time' | 'price'>,
  string[] | string
>

/**
 * @description This is the type that describes fuel list
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
export type FuelCallQuery = BaseQuery<
  keyof Pick<FuelCall, 'company_id' | 'call_time' | 'price'>,
  QueryDto,
  keyof FuelCall
>

/**
 *
 * @description
 * ReFueling GET request List response template
 *
 * @example
 *
 * [
 *  {
 *    id: 23,
 *    company: { id: '12', name: 'Comfort oil' },
 *    fuel_type_name: 'Ai-90',
 *    amount: 10000,
 *    min_amount: 5
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
 *  ]
 *
 */
export interface FuelCallResponse extends Omit<FuelCall, 'company_id' | 'fuel_type_id'> {
  company: Pick<Company, 'id' | 'name'>
  fuel_type_name: CallsFuelType['name']
}

/**
 *
 * @description
 * ReFueling GET single request payload
 *
 * @example
 *
 *  {
 *    id: 23,
 *    company_id: 34,
 *    fuel_type_id: 567,
 *    amount: 10000,
 *    min_amount: 5,
 *    call_time: '10.11.2022 23:23:00',
 *    price: 345000,
 *    payment_type: ['cash', 'card'],
 *    phone: '+998936589565',
 *    address: {
 *      delivery: {
 *        name: 'Toshkent sh Chilonzor t 16kv',
 *        lat: 39.325345657,
 *        long: 69.545437676,
 *        region: 'Toshkent sh'
 *      },
 *    },
 *    description: 'Very nice',
 *    created_at: '11.12.2022 23:22:01',
 *    updated_at: '11.12.2022 00:00:14'
 *   }
 *
 */
export type FuelCallFindResponse = FuelCall

/**
 *
 * @description
 * ReFueling phone call payload template
 *
 * @field `min_amount` is company could delivery fuel amount
 *
 * @example
 *
 * {
 *  company_id: 34
 *  fuel_type_id: 567,
 *  amount: 10000,
 *  min_amount: 5,
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
 *    }
 *  },
 *  description: 'Very nice'
 * }
 *
 */
export type FuelCallPayload = Omit<FuelCall, 'id' | 'created_at' | 'updated_at'>

/**
 *
 * @description
 * ReFueling phone call create request payload
 *
 * @field `min_amount` is company could delivery fuel amount
 *
 * @example
 *
 * {
 *  company_id: 34
 *  fuel_type_id: 567,
 *  amount: 10000,
 *  min_amount: 5,
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
 *    }
 *  },
 *  description: 'Very nice'
 * }
 *
 */
export type FuelCallCreatePayload = FuelCallPayload

/**
 *
 * @description
 * ReFueling update request payload
 *
 * This fields optional over `FuelCallCreatePayload`
 *
 */
export type FuelCallUpdatePayload = Partial<FuelCallPayload>

/**
 *
 * @description
 * ReFueling delete request payload.
 * It is multi delete.
 * You can send `ids` list in payload.
 * And you can select soft delete or hard delete option.
 *
 * @field `soft_delete` is optional. @default true
 *
 * @example
 *
 * {
 *  soft_delete: false,
 *  ids: [3, 6, 7, 45]
 * }
 *
 */
export interface FuelCallDeletePayload {
  soft_delete: boolean
  ids: string[]
}
