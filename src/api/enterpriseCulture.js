/**
 * 企业文化相关接口
 */
import { get, post } from '../utils/request'

export default {

  find() {
    return get('/enterpriseCulture/find')
  },

  saveOrUpdate(params) {
    return post('/enterpriseCulture/saveOrUpdate', params)
  }

}
