/**
 * 产品开发文章相关接口
 */
import {get, post} from '../utils/request'

export default {

  findAll() {
    return get('/devNews/findAll')
  },

  list(param) {
    return get('/devNews/list', param)
  },

  find(id) {
    return get('/devNews/find', {id: id})
  },

  add(param) {
    return post('/devNews/add', param)
  },

  update(param) {
    return post('/devNews/update', param)
  }

}
