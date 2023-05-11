import type { Media } from '~/shared/basic'
import type { PaymentType } from '~/shared/enums'
import type { User } from '~/users'

/**
 * @description Base user type in clients -> users page
 */
type VehicleUser = Omit<User, 'role_id'>

/**
 * @description This is the type of single user on clients -> users page list
 * @example {
 *    id: 1,
 *    first_name: "Kira",
 *    last_name: "Osaka",
 *    phone: "+998997776655",
 *    date_of_birth: "01-03-2003",
 *    gender: "male",
 *    status: "active",
 *    address: {
 *      delivery: {
 *        name: "Usmon Nosir",
 *        lat: "2.34234.4",
 *        long: "83.34324.543";
 *        region: "Chilanzar"
 *      },
 *      billing: {
 *        name: "Usmon Nosir",
 *        lat: "2.34234.4",
 *        long: "83.34324.543";
 *        region: "Chilanzar"
 *      }
 *    },
 *    created_at: "01-02-2020",
 *    updated_at: "01-02-2021",
 *    avatar: {
 *      id: 1,
 *      path: "https://api.uz/hmm.png"
 *      name: "Kira_On_Vocation.png"
 *      size: 1200
 *    },
 *    vehicle_count: 2
 *  }
 */
export interface VehicleUserResponse extends Omit<VehicleUser, 'avatar_id'> {
  vehicle_count: number
}

/**
 * @description This is the type of user on clients -> users page
 * @example {
 *    id: 1,
 *    first_name: "Kira",
 *    last_name: "Osaka",
 *    phone: "+998997776655",
 *    date_of_birth: "01-03-2003",
 *    gender: "male",
 *    status: "active",
 *    address: {
 *      delivery: {
 *        name: "Usmon Nosir",
 *        lat: "2.34234.4",
 *        long: "83.34324.543",
 *        region: "Chilanzar"
 *      },
 *      billing: {
 *        name: "Usmon Nosir",
 *        lat: "2.34234.4",
 *        long: "83.34324.543",
 *        region: "Chilanzar"
 *      }
 *    },
 *    created_at: "01-02-2020",
 *    updated_at: "01-02-2021"
 *  }
 */
export interface VehicleUserFindResponse extends Omit<VehicleUser, 'avatar_id'> {
  avatar: Media
}

/**
 * @description Base vehicle user type to derive similar types
 */
export type VehicleUserPayload = Omit<VehicleUser, 'id' | 'created_at' | 'updated_at'>

/**
 * @description This is the type of user payload
 * @example {
 *   first_name: "Kira",
 *   last_name: "Osaka",
 *   phone: "+998998883344",
 *   date_of_birth: "01-02-2003"
 *   gender: "male",
 *   status: "active",
 *   address: {
 *      delivery: {
 *        name: "Usmon Nosir",
 *        lat: "2.34234.4",
 *        long: "83.34324.543",
 *        region: "Chilanzar"
 *      },
 *      billing: {
 *        name: "Usmon Nosir",
 *        lat: "2.34234.4",
 *        long: "83.34324.543",
 *        region: "Chilanzar"
 *      }
 *    },
 *   avatar_id: 1,
 *  }
 */
export type VehicleUserCreatePayload = VehicleUserPayload

/**
 * @description This is the type of update user payload
 * @example {
 *   first_name: "Kira",
 *   last_name: "Osaka",
 *   phone: "+998998883344",
 *   date_of_birth: "01-02-2003"
 *   status: "active",
 *   address: {
 *      delivery: {
 *        name: "Usmon Nosir",
 *        lat: "2.34234.4",
 *        long: "83.34324.543",
 *        region: "Chilanzar"
 *      },
 *      billing: {
 *        name: "Usmon Nosir",
 *        lat: "2.34234.4",
 *        long: "83.34324.543",
 *        region: "Chilanzar"
 *      }
 *    },
 *   avatar_id: 1,
 *  }
 */
export type VehicleUserUpdatePayload = Partial<VehicleUserPayload>

/**
 * @description This is the type of a single payment history on
 * Clients -> Users -> Users Details -> Payments
 * @example {
 *    date: "01-02-2022",
 *    sender: "238423423548"
 *    receiver: "39857834578435784"
 *    price: 300000
 *    mechanic_name: "Hurry"
 *    service_count: 2
 *  }
 */
interface SinglePaymentHistory {
  payment_type: PaymentType
  date: string
  sender: string
  receiver: string
  price: number
  mechanic_name: string
  service_count: number
}

export interface VehicleUserResponse extends VehicleUser {
  vehicles: never[]
  paymentHistory: SinglePaymentHistory[]
}
