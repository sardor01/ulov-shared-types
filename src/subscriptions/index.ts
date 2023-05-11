/**
 *
 * @description
 * `SubscriptionPeriod` is Subscription period time.
 *
 *  id: database table id
 *  name: subscription name
 *
 *  @example: {id: 12, name: 'A month'}
 *
 */
export interface SubscriptionPeriod {
  id: string
  name: string
}

/**
 *
 * @description
 * Subscription interface
 *
 *  id: database table id
 *  name: subscription name
 *  price: amount of subscription for period time
 *  adventages: string values that features
 *  created_at: subscription created time
 *  updated_at: subscription changed time
 *
 *  @example:
 * {
 *    id: 23
 *    name: '3 months'
 *    price: 250000
 *    period_id: 23
 *    advantages: ['Создание базы данных транспортных средств', 'Создание базы данных транспортных средств']
 *    created_at: '28.09.2022 09:23'
 *    updated_at: '10.11.2022 18:17'
 * }
 *
 */
export interface Subscription {
  id: string
  name: string
  price: number
  period_id: string
  advantages: string[]
  created_at: string
  updated_at: string
}

/**
 *
 * @description
 * Subscription GET list response from backend
 *
 * @example: {
 *    id: 23
 *    name: '3 months'
 *    price: 250000
 *    period_id: {id: 23, name: 'A month'}
 *    advantages: ['Создание базы данных транспортных средств', 'Создание базы данных транспортных средств']
 *    created_at: '28.09.2022 09:23'
 *    updated_at: '10.11.2022 18:17'
 * }
 *
 */
export interface SubscriptionResponse extends Omit<Subscription, 'period_id'> {
  period: SubscriptionPeriod
}

/**
 *
 * @description
 * Subscription create and update payload template
 *
 * @example
 *
 * {
 *  period_id: 45,
 *  name: 'A month',
 *  price: 250000,
 *  advantages: ['Создание базы данных транспортных средств', 'Создание базы данных транспортных средств']
 * }
 *
 */
export type SubscriptionPayload = Omit<Subscription, 'id' | 'created_at' | 'updated_at'>

/**
 *
 * @description
 * Subscription create request payload
 *
 * @example
 *
 * {
 *  period_id: 45,
 *  name: 'A month',
 *  price: 250000,
 *  advantages: ['Создание базы данных транспортных средств', 'Создание базы данных транспортных средств']
 * }
 *
 */
export type SubscriptionCreatePayload = SubscriptionPayload

/**
 *
 * @description
 * Subscription update request payload
 *
 * This fields is optional over `SubscriptionCreatePayload`.
 *
 */
export type SubscriptionEditPayload = Partial<SubscriptionPayload>
