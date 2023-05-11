export interface ServiceTypePayload {
  id: string
  name: string
  services: string[]
}
/**
 * @description This interface is used for service type show one of company
 *
 *  @example
 *const serviceTypeFindResponse: ServiceTypeFindResponse = {
 *service_types: [
 *  {
 *     id: '1',
 *     name: 'zaprafka',
 *     services: ['benzin', 'gaz']
 *   },
 *   {
 *     id: '2',
 *     name: 'moyka',
 *     services: ['shampun', 'sovun']
 *   }
 * ],
 * marks: ['Gaz', 'vaz', 'Honda', 'Toyata']
 * }
 */
export interface ServiceTypeFindResponse {
  service_types: ServiceTypePayload[]
  marks: string[]
}
