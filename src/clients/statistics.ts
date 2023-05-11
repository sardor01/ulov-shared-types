import type { FuelType, GenderType, Timely } from '~/shared/enums'

// start - TODO: move to shared because this is common
interface SingleStatistics {
  time: string
  value: number
}
type Statistics = SingleStatistics[]

interface RequestQuery {
  timely: Timely
  from: string
  to: string
}
// end - TODO: move to shared because this is common

interface VehicleStatisticsRequestQuery extends RequestQuery {
  brand_id: string
  model_id: string
  issueYear: number
  vehicle_color: string
  transmission: string
  region_id: string
  fuel_type: FuelType
}

// users
interface UserStatisticsRequestQuery extends RequestQuery {
  vehicle_count: number
  date_ob_birth: string
  gender: GenderType
  region_id: string
}

export type { Statistics, VehicleStatisticsRequestQuery, UserStatisticsRequestQuery }
