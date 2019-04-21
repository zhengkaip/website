/**
 * 经典案例相关接口
 */
import { get, post } from '../utils/request'

export default {

  page(params) {
    return get('/mediaReport/page', params)
  },

  getById(params) {
    return get('/mediaReport/getById', params)
  },

  saveOrUpdate(params) {
    return post('/mediaReport/saveOrUpdate', params)
  }

}
