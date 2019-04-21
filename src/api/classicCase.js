/**
 * 经典案例相关接口
 */
import { get, post } from '../utils/request'

export default {

  page(params) {
    return get('/classicCase/page', params)
  },

  getById(params) {
    return get('/classicCase/getById', params)
  },

  saveOrUpdate(params) {
    return post('/classicCase/saveOrUpdate', params)
  }

}
