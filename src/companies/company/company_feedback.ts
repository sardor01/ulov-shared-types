export interface VehiclePayload {
  make: string
  model: string
}

/**
 * @description This interface is a base schema for userpayload
 *
 * @example
 * const userPayload: UserPayload = {
 *  id:'1',
 *  avatart_path:'https://test.com/test213123.png',
 *  firstname:'Toshmat',
 *  lastname:'Toshmatov',
 *  vehicle:{
 *    make: Chevrolet
 *    model: string
 *   }
 * }
 *
 */
type UserPayload = {
  id: string
  avatar_path: string
  first_name: string
  last_name: string
  vehicle: VehiclePayload
}
export interface CountInterface {
  excellent: number
  good: number
  normal: number
  bad: number
  worst: number
}

/**
 * @description This interface is used for show rating
 *
 * @example
 * const ratingFindResponse:RatingFindResponse = {
 *   total:7,
 *   rating:4,
 *   count:{
 *     excellent:8,
 *     good:9,
 *     normal:4,
 *     bad:5,
 *     worst:4,
 *    },
 * ,}
 */
export interface RatingFindResponse {
  total: number
  rating: number
  count: CountInterface
}

/**
 * @description This interface is used for all feedbacks of company
 *
 * @example
 * const  companyFeedbackResponse:CompanyFeedbackResponse ={
 *   id: '1',
 *   user :{
 *   id:'1',
 *   avatart_path:'https://test.com/test213123.png',
 *   firstname:'Toshmat',
 *   lastname:'Toshmatov',
 *   vehicle:{
 *      make: Chevrolet,
 *      model: string,
 *    },
 *   rating: 4 ,
 *   comment : 'Very good',
 *   created_at : '02-09-2022' ,
 * }
 */
export interface CompanyFeedbackResponse {
  id: string
  user: UserPayload
  rating: number
  comment: string
  created_at: string
}
