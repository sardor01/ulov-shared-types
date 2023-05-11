/**
 *
 * @description This interface show what properties to send to get paginated data
 *
 * @example
 *
 * const paginationQuery: PageableDto = {
 *    before: '15',
 *    after: '1',
 *    first: 4,
 *    last: 2
 * }
 *
 */
export interface PageableDto {
  /**
   * this is the id of item; send it to get items before this item
   */
  before?: string
  /**
   * this is the id of item; send it to get items after this item
   */
  after?: string
  /**
   * this is the number of items to get from the start of all items
   */
  first?: number
  /**
   * this is the number of items to get from the end of all items
   */
  last?: number
}
