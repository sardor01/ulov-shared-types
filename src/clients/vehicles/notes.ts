import type { GasFindResponse } from './gas'
import type { TintingFindResponse } from './tinting'
import type { InsuranceFindResponse } from './insurance'
import type { PowerOfAttorneyFindResponse } from './power_of_attorney'
import type { TechnicalInspectionFindResponse } from './technical_inspections'

/**
 * @description Overview of Vehicle notes
 * Among all vehicle notes, the latest notes of each types is going to be delivered
 * Clients -> Vehicles List -> Vehicles show -> Vehicles Notes
 */
export interface LatestVehicleNoteResponse {
  gas: GasFindResponse
  tinting: TintingFindResponse
  insurance: InsuranceFindResponse
  power_of_attorney: PowerOfAttorneyFindResponse
  technical_inspection: TechnicalInspectionFindResponse
}
