import { get, post } from '../utils/request'

export default {

  page(params) {
    return get('/recruit/page', params)
  },

  getById(params) {
    return get('/recruit/getById', params)
  },

  saveOrUpdate(params) {
    return post('/recruit/saveOrUpdate', params)
  }

}
