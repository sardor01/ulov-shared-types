import type { BaseQuery } from '~/shared/base_list_queries'
import type { Company } from '~/general/company'
import type { CompanyCall, TransportType } from './index'
import type { PartialRecord } from '~/utils/types'

/**
 * @description This interface is a base schema for towTruckCall
 *
 * @example
 *
 * const towTruckCall: TowTruckCall = {
 *    id: '1',
 *    company_id: '2',
 *    transport_type_id: '4',
 *    call_time: '2023-11-09T12:52:06.634Z',
 *    price: 45000,
 *    payment_type: 1,
 *    phone: '998901112200',
 *    address: {
 *      delivery: {
 *        name: 'Tashkent, Yeuju University',
 *        lat: 49.54544,
 *        long: 69.4545,
 *        region: 'Tashkent city'
 *      }
 *    },
 *    description: 'Please come this spot',
 *    created_at: '2022-11-09T12:52:06.634Z',
 *    updated_at: '2022-11-09T12:52:06.634Z'
 * }
 *
 */
export interface TowTruckCall extends CompanyCall {
  transport_type_id: string
}

type QueryDto = PartialRecord<
  keyof Pick<TowTruckCall, 'company_id' | 'call_time' | 'price'>,
  string[] | string
>

/**
 * @description This is the type that describes towTruck list
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
export type TowTruckCallQuery = BaseQuery<
  keyof Pick<TowTruckCall, 'company_id' | 'call_time' | 'price'>,
  QueryDto,
  keyof TowTruckCall
>

/**
 * @description This interface is used for towTruckCalls in list page
 *
 * @example
 *
 * const towTruckCalls: TowTruckCallResponse[] = [
 *    {
 *      id: '1',
 *      company: { id: '23', name: 'Test autoservice' },
 *      transport_type_name: 'automobile',
 *      call_time: '2023-11-09T12:52:06.634Z',
 *      price: 45000,
 *      payment_type: 1,
 *      phone: '998901112200',
 *      address: {
 *        delivery: {
 *          name: 'Tashkent, Yeuju University',
 *          lat: 49.54544,
 *          long: 69.4545,
 *          region: 'Tashkent city'
 *        }
 *      },
 *      description: 'Please come this spot',
 *      created_at: '2022-11-09T12:52:06.634Z',
 *      updated_at: '2022-11-09T12:52:06.634Z'
 *    }
 * ]
 *
 */
export interface TowTruckCallResponse
  extends Omit<TowTruckCall, 'company_id' | 'transport_type_id'> {
  company: Pick<Company, 'id' | 'name'>
  transport_type_name: TransportType['name']
}

export type TowTruckCallFindResponse = TowTruckCall

export type TowTruckCallPayload = Omit<TowTruckCall, 'id' | 'created_at' | 'updated_at'>

/**
 * @description This interface is the payload when creating towTruckCall
 *
 * @example
 *
 * const towTruckCall: TowTruckCallCreatePayload = {
 *    company_id: '2',
 *    transport_type_id: '4',
 *    call_time: '2023-11-09T12:52:06.634Z',
 *    price: 45000,
 *    payment_type: 1,
 *    phone: '998901112200',
 *    address: {
 *      delivery: {
 *        name: 'Tashkent, Yeuju University',
 *        lat: 49.54544,
 *        long: 69.4545,
 *        region: 'Tashkent city'
 *      }
 *    },
 *    description: 'Please come this spot'
 * }
 *
 */
export type TowTruckCallCreatePayload = TowTruckCallPayload

/**
 * @description This interface is the payload when updating towTruckCall
 *
 * @example
 *
 * const towTruckCall: TowTruckCallCreatePayload = {
 *    company_id: '2',
 *    price: 45000,
 *    payment_type: 1,
 *    phone: '998901112200',
 *    description: 'Please come this spot'
 * }
 *
 */
export type TowTruckCallUpdatePayload = Partial<TowTruckCallPayload>
