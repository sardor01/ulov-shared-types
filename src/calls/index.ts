import type { Address } from '~/shared/basic'
import type { PaymentType } from '~/shared/enums'

export interface TransportType {
  id: string
  name: string
}

export interface CallsFuelType {
  id: string
  name: string
}

export interface CompanyCall {
  id: string
  company_id: string
  call_time: string
  price: number
  payment_type: PaymentType[]
  phone: string
  address: Address
  description: string
  created_at: string
  updated_at: string
}
