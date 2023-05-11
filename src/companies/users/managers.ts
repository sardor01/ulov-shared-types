import type { Media } from '~/shared/basic'
import type { CompanyUserType } from '~/shared/enums'
import type { User } from '~/users'

/**
 *  @description: This interface is used for company Managers list in table
 *
 *  @example:
 * const companyManagers: CompanyManagerResponse[] = [
 *    {
 *      id:'1566',
 *      first_name:'Tommy'
 *      last_name: 'Jarry'
 *      phone:'+998941234567'
 *      date_of_birth:'10-09-1995',
 *      created_at:'2011-10-10T10:20:90'
 *      type:0
 *    }
 * ]
 */
export interface CompanyManagerResponse
  extends Omit<User, 'gender' | 'status' | 'address' | 'role_id' | 'avatar_id' | 'updated_at'> {
  type: CompanyUserType
}

interface CompanyManagerPayload extends Omit<User, 'id' | 'role_id' | 'updated_at' | 'created_at'> {
  password: string
  type: CompanyUserType
  company_id: string
}

/**
 *  @description: This interface is used to create a new company Manager
 *
 *  @example:
 * const companyManager: CompanyManagerCreatePayload=
 *    {
 *      first_name:'Tommy'
 *      last_name: 'Jarry'
 *      phone:'+998941234567'
 *      date_of_birth:'10-09-1995',
 *      status:0,
 *      address: {
 *        delivery: {
 *          name: 'Tashkent, Yeuju University',
 *          lat: 49.54544,
 *          long: 69.4545,
 *          region: 'Tashkent city'
 *        }
 *      },
 *      type:0
 *      avatar_id:123456,
 *      password:'pass1234',
 *      company_id:'214365'
 *    }
 */
export type CompanyManagerCreatePayload = CompanyManagerPayload

/**
 *  @description: This interface is used to update a company Manager, all fields are optional
 *
 *  @example:
 * const companyManagerFormPayload: CompanyManagerUpdatePayload=
 *    {
 *      first_name:'Tommy'
 *      last_name: 'Jarry'
 *      phone:'+998941234567'
 *      date_of_birth:'10-09-1995',
 *      status:0,
 *      address: {
 *        delivery: {
 *          name: 'Tashkent, Yeuju University',
 *          lat: 49.54544,
 *          long: 69.4545,
 *          region: 'Tashkent city'
 *        }
 *      },
 *      type:0
 *      avatar_id:123456,
 *      company_id:'214365'
 *    }
 */
export type CompanyManagerUpdatePayload = Partial<CompanyManagerCreatePayload>

/**
 *  @description: This interface is used to get a company Manager
 *
 *  @example:
 * const companyManager: CompanyManagerFindResponse=
 *    {
 *      id: 123434',
 *      first_name:'Tommy'
 *      last_name: 'Jarry'
 *      phone:'+998941234567'
 *      date_of_birth:'10-09-1995',
 *      status:0,
 *      address: {
 *        delivery: {
 *          name: 'Tashkent, Yeuju University',
 *          lat: 49.54544,
 *          long: 69.4545,
 *          region: 'Tashkent city'
 *        }
 *      },
 *      avatar:{
 *         id:'547698',
 *         path:'http://example.png',
 *         name:'Photo of dogs',
 *         size: 12345678,
 *      },
 *      type:0
 *      company_id:'214365',
 *      created_at:'2011-10-10T10:20:90'
 *    }
 */
export interface CompanyManagerFindResponse
  extends Omit<User, 'gender' | 'role_id' | 'updated_at' | 'avatar_id'> {
  type: CompanyUserType
  avatar: Media
}
