/**
 * 联系我们相关接口
 */
import { get, post } from '../utils/request'

export default {
  get () {
    return get('/contact/get')
  },
  saveContatc (param) {
    return post('/contact/saveOrUpdate', param)
  }
}
