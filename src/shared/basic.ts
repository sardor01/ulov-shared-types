import type { CompanyType, WeekDayType } from './enums'

interface Location {
  /**
   * @description This is a short description of the location
   * @example 'Cupertino, California, United States'
   */
  name: string
  lat: number
  long: number
  region: string
}

/**
 *
 * @description This interface describes the address of a company or a user
 *
 * @example
 *
 * const AutoritetAddress: Address = {
 *    delivery: {
 *      name: 'Cupertino, California, United States',
 *      lat: 41.7879,
 *      long: 69.12354,
 *      region: 'Bukhara'
 *    }
 * }
 *
 */
export interface Address {
  delivery: Location
  billing?: Location
}

/**
 *
 * @description This interface describes the properties of media file uploaded to server
 *
 * @example
 *
 * const TestImage1: Media = {
 *    id: '31231',
 *    path: 'https://test.com/test312355.png',
 *    name: 'Test image 1',
 *    size: 312314
 * }
 *
 */
export interface Media {
  id: string
  path: string
  name: string
  size: number
}

/**
 *
 * @description This interface describes working days and time of a company
 *
 * @example
 *
 * const AutoritetWorkingTime: WorkingTimeInterface = {
 *    days: [0, 1, 2, 3, 4, 5],
 *    from: '08:00',
 *    to: '23:00'
 * }
 *
 */
export interface WorkingTimeInterface {
  days: WeekDayType[]
  from: string
  to: string
}

export interface RoleInterface {
  id: string
  name: string
}

export interface CompanyInterface {
  id: string
  name: string
}

/**
 *
 * @description This interface describes service type
 *
 * @example
 *
 * const repair: ServiceType = {
 *    id: '23',
 *    company_type: 2,
 *    name: 'Repair'
 * }
 *
 */
export interface ServiceType {
  id: string
  company_type: CompanyType
  name: string
}

export interface Service {
  id: string
  type_id: string | ServiceType
  name: string
}
