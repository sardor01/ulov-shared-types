import type { PageableDto } from './pageable.dto'
import type { OrderType } from './enums'

/**
 * @description This generic interface is the query builder.
 *
 * @variable T: this is a key of the object that is used for sorting
 *
 * @variable F: this is an object of VALUES with these types: string, string[], number, number[] - { company_ids: ['1', '2', '3', '45'] }
 *
 * @variable P: this is enum that contains strings and used when we want specific fields from the db
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
export interface BaseQuery<T, F, P = string> {
  page?: PageableDto
  /**
   * This query filters items based on its value
   */
  q?: string
  /**
   * This object sorts items based on its KEY according to its TYPE
   */
  sort?: { type: OrderType; key: T }
  /**
   * This object filters items according to provided VALUES with types: string, string[], number, number[]
   */
  filter?: F
  /**
   * This array of strings (keys of the item) picks required values to display
   */
  fields?: P[]
}
