/**
 * 图片管理相关接口
 */
import { get, post } from '../utils/request'

export default {

  find(type) {
    return get('/imgInfo/find', type)
  },

  add(info) {
    return post('/imgInfo/add', info)
  },

  edit(info) {
    return post('/imgInfo/edit', info)
  },

  del(info) {
    return post('/imgInfo/del', info)
  }

}
