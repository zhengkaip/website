/**
 * 评论相关接口
 */
import {get, post} from '../utils/request'

export default {

  getCommentsByArticle(id) {
    return get(`/comments/article/${id}`)
  },

  publishComment(comment) {
    return post('/comments/create/change', comment)
  }

}
