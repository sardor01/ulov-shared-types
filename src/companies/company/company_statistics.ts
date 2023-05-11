import type { CompanyProfit, Timely } from '~/shared/enums'

export interface CompanyStatisticsPayload {
  field: CompanyProfit
  timely: Timely
  from: Date
  to: Date
}
