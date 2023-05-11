import type { PassportType } from '~/shared/enums'
import type { Media } from '~/shared/basic'
import type { User } from '~/users'

/**
 *  @description: This interface is used for company Employees list in table
 *
 *  @example:
 * const companyEmployees: CompanyEmployeeResponse[] = [
 *    {
 *      id:'1566',
 *      first_name:'Tommy',
 *      last_name: 'Jarry',
 *      phone:'+998941234567',
 *      status:0,
 *      address: {
 *        delivery: {
 *          name: 'Tashkent, Yeuju University',
 *          lat: 49.54544,
 *          long: 69.4545,
 *          region: 'Tashkent city'
 *        }
 *      },
 *      service_type:['11212','435435','54656'],
 *      avatar:{
 *         id:'547698',
 *         path:'http://example.png',
 *         name:'Photo of dogs',
 *         size: 12345678,
 *      },
 *      rating:4,
 *      passpord:'AA123445'
 *    }
 * ]
 */
export interface CompanyEmployeeResponse
  extends Omit<
    User,
    'avatar_id' | 'role_id' | 'gender' | 'date_of_birth' | 'status' | 'created_at' | 'updated_at'
  > {
  avatar: Media
  service_type: string[]
  rating: number
  passport: string
}

interface CompanyEmployeePayload
  extends Omit<User, 'id' | 'gender' | 'role_id' | 'created_at' | 'updated_at'> {
  passport_type: PassportType
  passport: string
  password: string
  company_id: string
  service_type: string[]
}

/**
 *  @description: This interface is used to create a new company Employee
 *
 *  @example:
 * const companyEmployee: CompanyEmployeeCreatePayload=
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
 *      company_id:'4545676',
 *      avatar_id:123456,
 *      passport_type:0,
 *      passport:'AA345456',
 *      password:'pass1234',
 *      company_id:'214365',
 *      service_type:['11212','435435','54656'],
 *    },
 */
export type CompanyEmployeeCreatePayload = CompanyEmployeePayload

/**
 *  @description: This interface is used to update a company Employee, all fields are optional
 *
 *  @example:
 * const companyEmployee: CompanyEmployeeUpdatePayload=
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
 *      company_id:'4545676',
 *      avatar_id:123456,
 *      passport_type:0,
 *      passport:'AA345456',
 *      company_id:'214365',
 *      service_type:['11212','435435','54656'],
 *    },
 */
export type CompanyEmployeeUpdatePayload = Partial<CompanyEmployeePayload>

/**
 *  @description: This interface is used to get a company Employee data
 *
 *  @example:
 * const companyEmployeeData: CompanyEmployeeFindResponse=
 *    {
 *      id:'435676',
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
 *      company_id:'4545676',
 *      passport_type:0,
 *      passport:'AA345456',
 *      company_id:'214365',
 *      service_type:['11212','435435','54656'],
 *      created_at:'2011-10-10T10:20:90'
 *    },
 */
export interface CompanyEmployeeFindResponse
  extends Omit<User, 'avatar_id' | 'gender' | 'role_id' | 'updated_at'> {
  avatar: Media
  passport_type: PassportType
  passport: string
  company_id: string
  service_type: string[]
}
