import type { ServiceStatus } from '~/shared/enums'
import type { ServiceType } from '~/shared/basic'

export interface VehicleServiceHistoryResponse {
  id: string
  // TODO multiple services and types
  service_type: ServiceType
  number: number
  order_time: Date
  price: number
  // mechanic: User;
  number_of_services: number
  millage: number
}

export interface VehicleServiceHistoryFindResponse {
  id: string
  number: number
  status: ServiceStatus
  millage: number
  services: [[]]
}
