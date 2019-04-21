/**
 * 文件上传相关接口
 */
import {upload, post} from '../utils/request'

export default {

  file(formdata) {
    return upload('/upload/file', formdata)
  },

  base64(formdata) {
    return post('/upload/base64', formdata)
  }

}
