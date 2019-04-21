/**
 * 文章标签相关接口
 */
import {get, post} from '../utils/request'

export default {

  getAllTags() {
    return get('/tags')
  },

  getAllTagsDetail() {
    return get('/tags/detail')
  },

  getHotTags() {
    return get('/tags/hot')
  },

  getTag(id) {
    return get(`/tags/${id}`)
  },

  getTagDetail(id) {
    return get(`/tags/detail/${id}`)
  },

  deleteTag(id) {
    return get(`/tags/delete/${id}`)
  },

  updateTag(param) {
    return post('/tags/update', param)
  },

  saveTag(param) {
    return post('/tags/create', param)
  }

}
