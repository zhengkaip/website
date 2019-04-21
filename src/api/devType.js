/**
 * 文章标签相关接口
 */
import {get, post} from '../utils/request'

export default {

  findAll() {
    return get('/devType/findAll')
  },

  find(key) {
    return get('/devType/find', {key: key})
  },

  addOrUpdate(params) {
    return post('/devType/addOrUpdate', params)
  }

}
