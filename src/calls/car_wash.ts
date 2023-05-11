import type { BaseQuery } from '~/shared/base_list_queries'
import type { Company } from '~/general/company'
import type { CompanyCall, TransportType } from '~/calls'
import type { PartialRecord } from '~/utils/types'

/**
 *
 * @description
 * CarWash phone call interface template
 *
 * @example
 *
 * {
 *  id: 23,
 *  company_id: 34,
 *  transport_type_id: 45,
 *  service_id: 456,
 *  call_time: '10.11.2022 23:23:00',
 *  price: 50000,
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
 *  description: 'Very nice',
 *  created_at: '11.12.2022 23:22:01',
 *  updated_at: '11.12.2022 00:00:14'
 * }
 *
 */
export interface CarWashCall extends CompanyCall {
  transport_type_id: string
  service_id: string
}

type QueryDto = PartialRecord<
  keyof Pick<CarWashCall, 'company_id' | 'call_time' | 'price'>,
  string[] | string
>

/**
 * @description This is the type that describes carWash list
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
export type CarWashCallQuery = BaseQuery<
  keyof Pick<CarWashCall, 'company_id' | 'call_time' | 'price'>,
  QueryDto,
  keyof CarWashCall
>

/**
 *
 * @description
 * CarWash GET request List response template
 *
 * @example
 *
 * [
 *  {
 *    id: 23
 *    company: { id: '33', name: 'AutoRepair' },
 *    transport_type_name: 'Легковой автомобиль',
 *    service_name: 'Полная мойка',
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
 *      }
 *    },
 *    description: 'Very nice'
 *   }
 *  ]
 *
 */
export interface CarWashCallResponse
  extends Omit<
    CarWashCall,
    'company_id' | 'transport_type_id' | 'service_id' | 'created_at' | 'updated_at'
  > {
  company: Pick<Company, 'id' | 'name'>
  transport_type_name: string
  service_name: string
}

/**
 *
 * @description
 * CarWash GET single request payload
 *
 * @example
 *
 *  {
 *    company_id: 'AutoRepair',
 *    transport_type_id: {
 *      id: 34,
 *      name: 'Легковой автомобиль'
 *    },
 *    service_id: 23,
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
 *    },
 *    description: 'Very nice'
 *   }
 *
 */
export interface CarWashCallFindResponse
  extends Omit<CarWashCall, 'id' | 'updated_at' | 'created_at' | 'transport_type_id'> {
  transport_type: TransportType
}

/**
 *
 * @description
 * CarWash phone call payload template
 *
 * @example
 *
 * {
 *  company_id: 34,
 *  transport_type_id: 45,
 *  service_id: 456,
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
export type CarWashCallPayload = Omit<CarWashCall, 'id' | 'created_at' | 'updated_at'>

/**
 *
 * @description
 * CarWash phone call create request payload
 *
 * @example
 *
 * {
 *  company_id: 34,
 *  transport_type_id: 45,
 *  service_id: 456,
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
export type CarWashCallCreatePayload = CarWashCallPayload

/**
 *
 * @description
 * CarWash update request payload
 *
 * This fields optional over `CarWashCallCreatePayload`
 *
 */
export type CarWashCallUpdatePayload = CarWashCallPayload

/**
 *
 * @description
 * CarWash delete request payload.
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
export interface CarWashCallDeletePayload {
  soft_delete: boolean
  ids: string[]
}
