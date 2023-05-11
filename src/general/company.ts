import type { CompanyType, StatusType, PaymentType } from '~/shared/enums'
import type { Address, Media } from '~/shared/basic'

export interface Company {
  id: string
  name: string
  parent_id: string | null
  type: CompanyType
  phone: string
  payment: PaymentType[]
  address: Address
  status: StatusType
  description: string
  photos: Media[]
  cover: Media
}
