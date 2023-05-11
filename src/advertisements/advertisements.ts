import type { BaseQuery } from '~/shared/base_list_queries'
import type { PartialRecord } from '~/utils/types'

export enum AdvertisementType {
  DRAFT,
  PUBLISHED,
  FINISHED
}

/**
 * @description This is the type that describes advertisement query
 * @example {
	company_name: ['AVTORITET', 'ZAZ Forza']
	status: [0,1]
	start_time: '28.09.2022'
	end_time: '31.09.2022'
 * }
 */
type AdvertisementQueryDto = PartialRecord<
  keyof Pick<AdvertisementResponse, 'company_name' | 'status' | 'start_time' | 'end_time'>,
  string[] | string
>

/**
 * @description This is the type that describes advertisement list
 * @example {
*	page: {
		before: '12',
		after: '4',
		first: 6
	},
	q: 'Tenant User',
	sort: { type: 'asc', key: 'company_name' },
	filter: { company_name: ['sdfs'] },
	fields: ['name']
 * }
 */
export type AdvertisementQuery = BaseQuery<
  keyof Pick<AdvertisementResponse, 'id' | 'company_name' | 'topic' | 'start_time'>,
  AdvertisementQueryDto,
  keyof AdvertisementResponse
>

/**
 * @description This is the type that describes advertisement list
 * @example {
 *	id: '1'
	company_name: 'AVTORITET'
	topic: 'Скидка 20%'
	start_time: '28.09.2022'
	status: 1
	end_time: '31.09.2022'
 * }
 */
export interface AdvertisementResponse {
  id: string
  company_name: string
  topic: string
  start_time: string
  status: AdvertisementType
  end_time: string
}

/**
 * @description This is the type that describes advertisement create
 * @example {
 	topic: 'Скидка 20%'
	description: 'Bla bla bla'
	image_id: '123'
	video_id: '321'
	addresses: ['id']
	car_models: ['id']
	service_ids: ['id']
	advertisement_service_id: 'ff456'
	company_name: 'AVTORITET'
	start_time: '28.09.2022'
	end_time: '31.09.2022'
	status: 2
 * }
 */
export interface AdvertisementCreatePayload {
  topic: string
  description: string
  image_id: string
  video_id: string
  addresses: string[]
  car_models: string[]
  service_ids: string[]
  advertisement_service_id: string
  start_time: string
  end_time: string
  status: AdvertisementType
}

export type AdvertisementUpdatePayload = Partial<AdvertisementCreatePayload>
