/**
 * 文章相关接口
 */
import {get, postJson} from '../utils/request'

export default {

  getArticles(query, page) {
    return get('/articles/new', {
      pageNum: page.pageNum,
      pageSize: page.pageSize,
      name: page.name,
      sort: page.sort,
      year: query.year,
      month: query.month,
      tagId: query.tagId,
      categoryId: query.categoryId
    })
  },
  getnpArticles(query, page) {
    return get('/articles/newpower', {
      pageNum: page.pageNum,
      pageSize: page.pageSize,
      name: page.name,
      sort: page.sort,
      year: query.year,
      month: query.month,
      tagId: query.tagId,
      categoryId: query.categoryId
    })
  },

  getHotArtices() {
    return get('/articles/hot')
  },

  getNewArtices() {
    return get('/articles/new')
  },
  getNewNewPowerArtices() {
    return get('/articles/newpower')
  },
  viewArticle(id) {
    return get(`/articles/view/${id}`)
  },

  getArticlesByCategory(id) {
    return get(`/articles/category/${id}`)
  },

  getArticlesByTag(id) {
    return get(`/articles/tag/${id}`)
  },

  publishArticle(article) {
    return postJson('/articles/publish', article)
  },

  listArchives() {
    return get('/articles/listArchives')
  },

  getArticleById(id, type = null) {
    return get(`/articles/${id}`, {type: type})
  }

}
