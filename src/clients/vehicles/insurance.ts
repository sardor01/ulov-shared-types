/**
 * @description Available insurance types, used when creating
 * an insurance
 */
enum InsuranceType {
  OSAGO = 'osago',
  DSAGO = 'dsago',
  KASKO = 'kasko'
}

/**
 * @description Base insurance type to derive other related types
 */
interface Insurance {
  id: string
  company_id: string
  type: InsuranceType
  technical_passport: {
    series: string
    number: number
  }
  validity_from: string
  validity_to: string
  number_of_drivers: number
}

/**
 * @description This is the type of vehicle insurance.
 * Clients -> Vehicles -> Vehicles table -> Vehicle Show -> Notes -> Insurances
 * @example {
 *    name: "Gridable",
 *    validity_period: ["01-01-2022", "01-09-2022"],
 *    type: "osago",
 *    number_of_drivers: 3,
 *    policy_price: 40000000,
 *    insurance_amount: 40000000,
 *    physical_harm_coverage: 65,
 *    property_harm_coverage: 35
 *  }
 */
export interface InsuranceFindResponse extends Omit<Insurance, 'validity_to' | 'validity_from'> {
  name: string
  validity_period: [string, string]
  number_of_drivers: number
  policy_price: number
  insurance_amount: number
  physical_harm_coverage: number
  property_harm_coverage: number
}

/**
 * @description This is the type of single insurance in vehicle insurances list.
 * Clients -> Vehicles -> Vehicles table -> Vehicle Show -> Notes -> Insurances
 * @example {
 *    name: "Jurisable",
 *    validity_period: ["01-02-2022", "01-10-2022"],
 *    type: "kasko",
 *    number_of_drivers: 2,
 *    policy_price: 20000000,
 *    insurance_amount: 20000000,
 *    physical_harm_coverage: 60,
 *    property_harm_coverage: 40
 *  }
 */
export interface InsuranceResponse extends Omit<Insurance, 'validity_to' | 'validity_from'> {
  name: string
  validity_period: [string, string]
  number_of_drivers: number
  policy_price: number
  insurance_amount: number
  physical_harm_coverage: number
  property_harm_coverage: number
}

/**
 * @description This is type of insurance payload to attach to vehicle.
 * Clients -> Vehicles -> Vehicles table -> Vehicle Show -> Notes -> Insurances -> Add insurance
 * @example {
 *     company_id: 1,
 *     type: 'osago',
 *     technical_passport: {
 *       series: 'FU',
 *       number: 1623653
 *     },
 *     validity_from: '02-01-2022'
 *     validity_to: '02-12-2022'
 *     number_of_drivers: 2
 *   }
 */
export type InsuranceCreatePayload = Omit<Insurance, 'id'>

/**
 * @description This is type of insurance update payload
 * Clients -> Vehicles -> Vehicles table -> Vehicle Show -> Notes -> Insurances -> Update insurance
 * @example {
 *     company_id: 1,
 *     technical_passport: {
 *       series: 'FU',
 *       number: 1623653
 *     },
 *     validity_to: '02-12-2022'
 *     number_of_drivers: 2
 *   }
 */
export type InsuranceUpdatePayload = Partial<InsuranceCreatePayload>
