import type { BaseQuery } from '~/shared/base_list_queries'
import type { FuelType, TransmissionType, StateNumberType } from '~/shared/enums'
import type { VehicleMake, VehicleModel } from '../vehicle_attributes'
import type { PartialRecord } from '~/utils/types'

/**
 * @description Type of technical passport of vehicle. This is used
 * when creating and updating vehicle
 * @example {
 *    series: "AF",
 *    number: 37643647
 *  }
 */
export interface VehicleTechPassport {
  series: string
  number: number
}

/**
 * @description This is the type that describes vehicles colors.
 * Color ID might be assigned to vehicles
 * @example {
 *    id: 1,
 *    name: "Red",
 *    code: "#133236"
 *  }
 */
export interface VehicleColor {
  id: string
  name: string
  code: string
}

type QueryDto = PartialRecord<
  keyof Pick<
    Vehicle,
    'make_id' | 'model_id' | 'year_of_issue' | 'color_id' | 'transmission_type' | 'fuel_type'
  >,
  string[] | string
>

/**
 * @description Interface that is used to interact with vehicles list,
 * namely filtering, sorting, partial response, search, pagination
 * @example {
 *    filters: {
 *      make_ids: [1,2]
 *      model_ids: [1,2]
 *      year_of_issues: [2001,2002]
 *      color_ids: [1,2]
 *      transmission_types: [manual]
 *      fuel_types: [methane,propane]
 *    },
 *    sort_by: "year_of_issue",
 *    sort_order: "asc",
 *    q: "Tesla Mo",
 *    page: {
 *      first: 10,
 *      after: 1
 *    },
 *    fields: ["model", "make", "updated_at", "created_at", "fuel_type", "transmission_type", "vin_number", "color"]
 *  }
 */
export type VehiclesListQuery = BaseQuery<
  keyof Pick<Vehicle, 'make_id' | 'model_id' | 'year_of_issue' | 'state_number' | 'color_id'>,
  QueryDto,
  keyof Pick<Vehicle, 'make_id' | 'model_id' | 'year_of_issue' | 'state_number' | 'color_id'>
>

/**
 * @description This is base vehicle type that other related types are derived from
 */
interface Vehicle {
  id: string
  photo: string
  make_id: string
  model_id: string
  state_number_type: StateNumberType
  state_number: string
  year_of_issue?: number
  tech_passport_series?: string
  tech_passport_number?: string
  phone_number?: string
  color_id?: string
  fuel_type?: FuelType
  transmission_type?: TransmissionType
  vin_number?: number
  tech_passport_photos?: [string, string]
  created_at: string
  updated_at: string
}

/**
 * @description This is single vehicle type on vehicles list page.
 * Fields that are optional in VehicleCreatePayload are nullable in this type
 * @example {
 *    id: 1,
 *    make: "Tesla",
 *    model: "S",
 *    tech_passport: {
 *      series: "AC",
 *      number: "1223237642354623643"
 *    },
 *    color: {
 *      id: 1,
 *      name: "Asfalt",
 *      code: "Iured"
 *    },
 *    vin_number: "1234567823646236487",
 *    transmission_type: "manual",
 *    fuel_type: null,
 *    state_number: "Ac12302UP",
 *    year_of_issue: 2017
 *  }
 */
export interface VehicleResponse
  extends Omit<
    Vehicle,
    | 'make_id'
    | 'model_id'
    | 'state_number_type'
    | 'tech_passport_series'
    | 'tech_passport_number'
    | 'year_of_issue'
    | 'color_id'
    | 'vin_number'
    | 'transmission_type'
    | 'fuel_type'
    | 'phone_number'
  > {
  make: VehicleMake
  model: VehicleModel
  tech_passport: VehicleTechPassport
  year_of_issue: number | null
  color: VehicleColor | null
  vin_number: number | null
  transmission_type: TransmissionType | null
  fuel_type: FuelType | null
}

/**
 * @description This is the type of vehicle on its show page.
 * Clients -> Vehicles page -> Vehicles table -> Vehicle Show page
 * Clients -> Users page -> User details -> User Vehicles List -> Vehicle Show page
 * @example {
 *    id: 2,
 *    photo: "http://api.uz/files/tayota_AC.png"
 *    make: "Tayota"
 *    model: "Land Cuiser"
 *    tech_passport: {
 *      series: "AC",
 *      number: "123243"
 *    }
 *    tech_passport_photos: [
 *      "http://api.uz/files/tayota_AC_tech_passport_front.png",
 *      "http://api.uz/files/tayora_AC_tech_passport_back.png"
 *    ]
 *    year_of_issue: 2012
 *    color: {
 *      id: 1,
 *      name: "Red",
 *      code: "#12323"
 *    }
 *    fuel_type: "propane"
 *    vin_number: null
 *    transmission_type: "automatic",
 *    state_number: "AD734638IU"
 *  }
 */
export interface VehicleFindResponse
  extends Omit<
    Vehicle,
    | 'make_id'
    | 'model_id'
    | 'color_id'
    | 'year_of_issue'
    | 'state_number_type'
    | 'tech_passport_series'
    | 'tech_passport_number'
    | 'fuel_type'
    | 'transmission_type'
    | 'vin_number'
    | 'tech_passport_photos'
    | 'phone_number'
  > {
  make: VehicleMake
  model: VehicleModel
  tech_passport: VehicleTechPassport
  tech_passport_photos: [string, string] | []
  year_of_issue: number | null
  color: VehicleColor | null
  fuel_type: FuelType | null
  vin_number: number | null
  transmission_type: TransmissionType | null
}

/**
 * @description That that helps to build vehicles types, abstracts some miss type,
 * in order not to repeat ourselves
 */
type VehiclePayload = Omit<Vehicle, 'id' | 'created_at' | 'updated_at'>

/**
 * @description This is the type of payload to create vehicle. It is used in clients/vehicles
 * and clients/users pages
 * @example {
 *    make_id: '1',
 *    model_id: '2',
 *    fuel_type: 'propane',
 *    transmission_type: 'automatic',
 *    year_of_issue: 2003,
 *    color_id: '1',
 *    phone_number: '+998991234567',
 *    photo: '1',
 *    state_number_type: StateNumberType.INDIVIDUAL,
 *    state_number: 'Ac2378UU',
 *    tech_passport_series: 'UY',
 *    tech_passport_number: '3487563478568',
 *    vin_number: 123434345447573487
 *  }
 */
export type VehicleCreatePayload = VehiclePayload

/**
 * @description This is the type of payload to update vehicle. It is the same payload as create, but fields are
 * optional. It is used in clients/vehicles and clients/users pages
 * @example {
 *    model_id: '2',
 *    fuel_type: 'propane',
 *    transmission_type: 'automatic',
 *    color_id: '1',
 *    phone_number: '+998991234567',
 *    tech_passport_series: 'UY',
 *    tech_passport_number: '3487563478568',
 *    vin_number: 123434345447573487
 *  }
 */
export type VehicleUpdatePayload = Partial<VehiclePayload>

export interface CreateCarOwnerPayload {
  avatar: string
}

export type UpdateCarOwnerPayload = Partial<CreateCarOwnerPayload>
