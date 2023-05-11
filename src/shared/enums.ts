export enum WeekDayType {
  MON = 1,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN
}

export enum CompanyType {
  AUTO_SERVICE,
  TOW_TRUCK,
  AUTO_REFUELING,
  CAR_WASH
}

export enum UnitType {
  LITER,
  PIECE
}

export enum TransmissionType {
  AUTOMATIC = 'automatic',
  MANUAL = 'manual'
}
export enum StateNumberType {
  INDIVIDUAL,
  LEGAL
}

export enum FuelType {
  ELECTRICITY = 'electricity',
  PROPANE = 'propane',
  METHANE = 'methane',
  DIESEL = 'diesel',
  GASOLINE = 'gasoline'
}

export enum StatusType {
  ACTIVE,
  INACTIVE,
  DELETED
}

export enum Profit {
  PROFITS,
  COMPANIES,
  VEHICLES,
  BRANCHES,
  SERVICES,
  CALL_SERVICES
}

export enum CompanyProfit {
  PROFIT,
  NEW_VEHICLE,
  SERVICE,
  PAID,
  CANCEL
}

export enum Timely {
  DAILY,
  WEEKLY,
  MONTHLY,
  ANNUAL
}

export enum Subject {
  COMPANY,
  VEHICLE,
  CLIENT,
  SUBSCRIPTION,
  EMPLOYEE,
  STATISTICS_COMPANY,
  STATISTICS_VEHICLE,
  STATISTICS_CLIENT,
  STATISTICS_SUBSCRIPTION,
  USERS,
  ADVERTISEMENT,
  ROLES
}

export enum Action {
  READ,
  CREATE,
  WRITE,
  DELETE
}

export enum GenderType {
  MALE,
  FEMALE,
  OTHER
}

export enum OrderType {
  ASC = 'asc',
  DESC = 'desc'
}

export interface Scope {
  actions: Action[]
  subject: Subject
}

export enum ServiceStatus {
  WAITING,
  IN_PROCESS,
  PAID,
  FINISHED,
  PAUSED,
  CANCELED
}

export enum CompanyUserType {
  MANAGER,
  EMPLOYEE
}

export enum PaymentType {
  CASH,
  CARD,
  OTHER
}

export enum WorkStatus {
  IN_PROCESS,
  PENDING,
  FINISHED
}

export enum PassportType {}
