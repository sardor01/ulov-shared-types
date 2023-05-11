import type { BaseQuery } from '~/shared/base_list_queries'
import type { Subject, Scope } from '~/shared/enums'

/**
 * @description This interface is a base schema for role
 *
 * @example
 *
 * const Tenant: Role = {
 *    id: '1',
 *    name: 'Tenant User',
 *    description: 'This user is tenant',
 *    scopes: [
 *      {
 *        subject: 'Setting',
 *        actions: ['create', 'read', 'write', 'delete']
 *      },
 *      {
 *        subject: 'Location',
 *        actions: ['create', 'read', 'write', 'delete']
 *      },
 *      {
 *        subject: 'Timetable',
 *        actions: ['create', 'read', 'write', 'delete']
 *      }
 *    ],
 *    created_at: '2022-11-09T12:52:06.634Z',
 *    updated_at: '2022-11-09T12:52:06.634Z'
 * }
 *
 */
interface Role {
  id: string
  name: string
  description: string
  scopes: Scope[]
  created_at: string
  updated_at: string
}

/**
 * @description This interface is used for roles in list page
 *
 * @example
 *
 * const Tenant: RoleResponse = {
 *    id: '1',
 *    name: 'Tenant User',
 *    description: 'This user is tenant',
 *    number_of_users: 11,
 *    subjects: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
 *    created_at: '2022-11-09T12:52:06.634Z',
 *    updated_at: '2022-11-09T12:52:06.634Z'
 * }
 *
 */
export interface RoleResponse extends Omit<Role, 'description' | 'scopes'> {
  number_of_users: string
  subjects: Subject[]
}

export type RoleFindResponse = Role

type RolePayload = Omit<Role, 'id' | 'created_at' | 'updated_at'>

/**
 * @description This interface is the payload when creating a role
 *
 * @example
 *
 * const Tenant: RoleCreatePayload = {
 *    name: 'Tenant User',
 *    description: 'This user is tenant',
 *    number_of_users: 11,
 *    scopes: [
 *      {
 *        subject: 'Setting',
 *        actions: ['create', 'read', 'write', 'delete']
 *      },
 *      {
 *        subject: 'Location',
 *        actions: ['create', 'read', 'write', 'delete']
 *      },
 *      {
 *        subject: 'Timetable',
 *        actions: ['create', 'read', 'write', 'delete']
 *      }
 *    ]
 * }
 *
 */
export type RoleCreatePayload = RolePayload

/**
 * @description This interface is the payload when updating a role
 *
 * @example
 *
 * const Tenant: RoleUpdatePayload = {
 *    name: 'Tenant User',
 *    description: 'This user is tenant',
 *    number_of_users: 11
 * }
 *
 */
export type RoleUpdatePayload = Partial<RolePayload>

export interface RoleFilter {
  name?: string
  number_of_users?: string
}

/**
 * @description This type is the query sent in GET request and also reflected in url
 *
 * @example
 *
 * const RoleQuery: RoleQuery = {
 *    page: {
 *      before: '12',
 *      after: '4',
 *      first: 6
 *    },
 *    q: 'Tenant User',
 *    sort: { type: 'asc', key: 'name' },
 *    filter: { number_of_users: 10 },
 *    fields: ['id', 'name', 'scopes']
 * }
 *
 */
export type RoleQuery = BaseQuery<
  keyof Pick<Role, 'id' | 'name' | 'updated_at'> | 'number_of_users',
  RoleFilter,
  keyof Pick<Role, 'id' | 'name' | 'updated_at'> | 'number_of_users'
>

/**
 * @description This interface for delete payload
 *
 * @example
 *
 * const RoleDeletePayload: RoleDeletePayload = {
 *    soft_delete: true,
 *    ids: ['1', '2']
 * }
 *
 */
export interface RoleDeletePayload {
  soft_delete: boolean
  ids: string[]
}
