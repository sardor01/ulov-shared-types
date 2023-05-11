import type { Profit, Timely } from '~/shared/enums'
import type { CompanyInterface } from '~/shared/basic'

export interface CompanyStatistics {
  field: Profit
  timely: Timely
  from: Date
  to: Date
}
export interface CompanyFilter {
  company: CompanyInterface
  service_type: string
  subscription: string
  region: string
  rating: string
}
export interface GetCompanyStatistics {
  query: CompanyStatistics
  filter: CompanyFilter
}
