import type { GenderType, StatusType } from '~/shared/enums'
import type { Address } from '~/shared/basic'

export interface User {
  id: string
  first_name: string
  last_name: string
  phone: string
  date_of_birth: string
  gender: GenderType
  status: StatusType
  address: Address
  role_id: string
  avatar_id: string
  created_at: string
  updated_at: string
}
