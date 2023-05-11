import type { BaseQuery } from '~/shared/base_list_queries'
import type { StatusType } from '~/shared/enums'
import type { RoleInterface, Media } from '~/shared/basic'
import type { User } from '~/users'

/**
 * @description This interface is used for users in list page
 *
 * @example
 *
 * const Users: UserResponse[] = [
 *    {
 *      id: '1',
 *      first_name: 'John',
 *      last_name: 'Doe',
 *      phone: '998995552244',
 *      date_of_birth: '2001-11-09T12:52:06.634Z',
 *      gender: 0,
 *      status: 0,
 *      address: {
 *        delivery: {
 *          name: 'Tashkent, Yeuju University',
 *          lat: 49.54544,
 *          long: 69.4545,
 *          region: 'Tashkent city'
 *        }
 *      },
 *      role: { id: '2', name: 'Super admin' },
 *      avatar: {
 *        id: '2',
 *        path: 'https://test.com/test213123.png',
 *        name: 'Super admin Image',
 *        size: 13123123
 *      },
 *      created_at: '2022-11-09T12:52:06.634Z',
 *      updated_at: '2022-11-09T12:52:06.634Z'
 *    }
 * ]
 *
 */
export interface UserResponse extends Omit<User, 'role_id'> {
  avatar: Media
  role: RoleInterface
}

export type UserFindResponse = User

type UserPayload = Omit<User, 'id' | 'created_at' | 'updated_at'>

/**
 * @description This interface is the payload when creating users
 *
 * @example
 *
 * const UserPayload: UserCreatePayload = {
 *    first_name: 'John',
 *    last_name: 'Doe',
 *    phone: '998995554422',
 *    date_of_birth: '2001-11-09T12:52:06.634Z',
 *    gender: 0,
 *    status: 1,
 *    address: {
 *      delivery: {
 *        name: 'Tashkent, Yeuju University',
 *        lat: 49.54544,
 *        long: 69.4545,
 *        region: 'Tashkent city'
 *      },
 *      billing: {
 *        name: 'Samarkand, Yeuju University',
 *        lat: 49.54544,
 *        long: 69.4545,
 *        region: 'Samarkand'
 *      }
 *    },
 *    role_id: '2',
 *    avatar_id: '3'
 * }
 *
 */
export type UserCreatePayload = UserPayload

/**
 * @description This interface is the payload when updating users
 *
 * @example
 *
 * const UserPayload: UserUpdatePayload = {
 *    first_name: 'John',
 *    last_name: 'Doe',
 *    phone: '998995554422',
 *    role_id: '2',
 *    avatar_id: '3'
 * }
 *
 */
export type UserUpdatePayload = Partial<UserPayload>

interface UserFilter {
  first_name: string
  last_name: string
  status: StatusType
}

/**
 * @description This type is the query sent in GET request and also reflected in url
 *
 * @example
 *
 * const settingsUserQuery: SettingsUserQuery = {
 *    page: {
 *      before: '12',
 *      after: '4',
 *      first: 6
 *    },
 *    q: 'John Doe',
 *    sort: { type: 'asc', key: 'first_name' },
 *    filter: {
 *      first_name: 'John',
 *      date_of_birth: '2001-11-09T12:52:06.634Z'
 *    },
 *    fields: ['id', 'first_name', 'last_name', 'date_of_birth']
 * }
 *
 */
export type SettingsUserQuery = BaseQuery<
  keyof Pick<User, 'id' | 'first_name' | 'last_name' | 'date_of_birth' | 'role_id'>,
  UserFilter,
  keyof Pick<User, 'id' | 'first_name' | 'last_name' | 'date_of_birth' | 'role_id'>
>

/**
 * @description This interface for delete payload
 *
 * @example
 *
 * const UserDeletePayload: UserDeletePayload = {
 *    soft_delete: true,
 *    ids: ['1', '2']
 * }
 *
 */
export interface UserDeletePayload {
  soft_delete: boolean
  ids: string[]
}
