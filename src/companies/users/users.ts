import type { Media, RoleInterface } from '~/shared/basic'
import type { User } from '~/users'
import type { BaseQuery } from '~/shared/base_list_queries'

interface UserListFilters {
  name?: string[]
  phone?: string[]
  address?: string
  rating?: number
}

/**
 *  @description: This type is used for user list query
 * 
 *  @example:
 * const query: UserQuery = {
      page: { before: '10' },
      q: 'tommy',
      sort: { type: OrderType.ASC, key: UserListSortableColumns.name },
      filter: { name: ['Tommy', 'Jarry'], rating: 4 },
      fields: [
        UserListPartialType.name,
        UserListPartialType.rating,
        UserListPartialType.address,
        UserListPartialType.phone
      ]
    }
 * 
 */
export type UserQuery = BaseQuery<
  'id' | 'name' | 'rating' | 'address' | 'created_at',
  UserListFilters,
  'name' | 'phone' | 'address' | 'rating'
>

/**
 *  @description: This interface is used for company users list in table
 *
 *  @example:
 * const companyUsers: CompanyUsersResponse[] = [
 *    {
 *      id:'1234',
 *      first_name:'Tommy'
 *      last_name: 'Jarry'
 *      phone:'+998941234567'
 *      date_of_birth:'10-09-1995',
 *      status:0,
 *      created_at:'2011-10-10T10:20:90'
 *    }
 * ]
 */
export interface CompanyUsersResponse
  extends Omit<User, 'gender' | 'avatar_id' | 'updated_at' | 'address' | 'role_id'> {
  role: RoleInterface
}

interface CompanyUserPayload extends Omit<User, 'id' | 'gender' | 'updated_at' | 'created_at'> {
  password: string
  company_id: string
}

/**
 *  @description: This interface is used to create a new company user
 *
 *  @example:
 * const companyUser: CompanyUserCreatePayload=
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
 *      role_id:'436587',
 *      avatar_id:'123456',
 *      password:'pass1234',
 *      company_id:'214365'
 *    }
 *
 */

export type CompanyUserCreatePayload = CompanyUserPayload

/**
 *  @description: This interface is used to update a new company user, all fields are optional
 *
 *  @example:
 * const userForm: CompanyUserUpdatePayload=
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
 *      role_id:'436587',
 *      avatar_id:'123456',
 *      company_id:'214365'
 *    }
 *
 */
export type CompanyUserUpdatePayload = Partial<CompanyUserCreatePayload>

/**
 *  @description: This interface is used to get a company user data
 *
 *  @example:
 * const userData: CompanyUserFindResponse=
 *    {
 *      id:'123456',
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
 *      company_id:'214365',
 *      role: {
 *         id:'123456',
 *         name:'DIRECTOR'
 *      },
 *      avatar:{
 *         id:'547698',
 *         path:'http://example.png',
 *         name:'Photo of dogs',
 *         size: 12345678,
 *      },
 *      created_at:'2011-10-10T10:20:90'
 *    }
 *
 */
export interface CompanyUserFindResponse
  extends Omit<User, 'role_id' | 'gender' | 'updated_at' | 'avatar_id'> {
  role: RoleInterface
  avatar: Media
}
