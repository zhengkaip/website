/**
 * 登录相关接口
 */
import {get, post} from '../utils/request'

export default {

  login(account, password) {
    return post('/login', {
      username: account,
      password: password
    })
  },

  getUserInfo() {
    return get('/users/currentUser')
  },

  getUserList(query) {
    return get('/users/list', {
      pageNum: query.pageNum,
      pageSize: query.pageSize
    })
  },

  logout() {
    return get('/logout')
  }

}
