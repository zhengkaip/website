/**
 * 文章类别相关接口
 */
import {get, post} from '../utils/request'

export default {

  getAllCategorys() {
    return get('/categorys')
  },

  getAllCategorysDetail() {
    return get('/categorys/detail')
  },

  getCategory(id) {
    return get(`/categorys/${id}`)
  },

  getCategoryDetail(id) {
    return get(`/categorys/detail/${id}`)
  },

  deleteCategory(id) {
    return get(`/categorys/delete/${id}`)
  },

  updateCategory(param) {
    return post('/categorys/update', param)
  },

  saveCategory(param) {
    return post('/categorys/create', param)
  }

}
