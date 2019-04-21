import { get, post } from '../utils/request'

export default {

  page (params) {
    return get('/essay/page', params)
  },

  getById (params) {
    return get('/essay/getById', params)
  },

  saveOrUpdate (params) {
    return post('/essay/saveOrUpdate', params)
  }

}
