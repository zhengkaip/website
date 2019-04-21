/**
 * 企业文化相关接口
 */
import { get, post } from '../utils/request'

export default {

  find() {
    return get('/newPowerProduct/find')
  },

  saveOrUpdate(params) {
    return post('/newPowerProduct/saveOrUpdate', params)
  }

}
