import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { aes, sign } from './crypto'
import store from '@/store'
import { getToken } from './auth'
import Code from './code'

const ajax = axios.create({
  baseURL: process.env.BASE_API,
  timeout: process.env.TIMEOUT,
  withCredentials: true
})

ajax.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers['Oauth-Token'] = getToken()
  }
  return config
}, err => {
  Promise.reject(err)
})

ajax.interceptors.response.use(
  res => {
    if (res.data.code === Code.SUCC) {
      return res
    } else {
      if (res.data.code === Code.UNAUTHEN || res.data.code === Code.SESSION_TIMOUT) {
        // 处理登录相关的错误
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出',
          { confirmButtonText: '重新登录', cancelButtonText: '取消', type: 'warning' }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()
          })
        })
      } else {
        Message({ message: res.data.message, type: 'error', duration: 5000 })
      }
      return Promise.reject(new Error(res.data.message))
    }
  },
  err => {
    console.error('request err: %o', err)
    Message({ message: err.message, type: 'error', duration: 5000 })
    return Promise.reject(err)
  }
)

// 参数转换
const param2String = data => {
  console.log('data(转换前)', data)
  if (typeof data === 'string') {
    return data
  }
  let ret = ''
  for (let it in data) {
    let val = data[it]
    if (typeof val === 'object' && (!(val instanceof Array) || (val.length > 0 && (typeof val[0] === 'object')))) {
      val = JSON.stringify(val)
    }
    ret += it + '=' + encodeURIComponent(val) + '&'
  }
  if (ret.length > 0) {
    ret = ret.substring(0, ret.length - 1)
  }
  console.log('data(转换后)', ret)
  return ret
}

const getConfig = (url, method, isjson, params, isfile, level = 0) => {
  let config = {
    url,
    method,
    headers: {
      level
    }
  }
  if (level === 1) {
    params = { encrypt: aes.en(JSON.stringify(params)) }
  } else if (level === 2) {
    let timestamp = new Date().getTime()
    let token = store.state.token
    console.log(store.state.token)
    if (!token) {
      token = getToken()
      store.state.token = token
    }
    let signstr = sign(token, timestamp, isjson ? JSON.stringify(params) : params, isjson)
    console.log('token', token)
    console.log('signstr', signstr)
    config.headers = { level, timestamp, signstr }
    if (store.getters.token) {
      config.headers['biu-token'] = getToken()
    }
  }
  if (isfile) {
    config.headers['Content-Type'] = 'multipart/form-data'
    config.responseType = 'text'
    config.transformRequest = [function (data) {
      return param2String(data)
    }]
  } else if (!isjson) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.responseType = 'text'
    config.transformRequest = [function (data) {
      return param2String(data)
    }]
  }
  if (method in { 'get': true, 'delete': true }) {
    config.params = params
  } else if (method in { 'post': true, 'put': true }) {
    config.data = params
  }
  return config
}

const errback = error => {
  console.log('request err: ' + error.message)
  Message({ message: error.message, type: 'error', duration: 5000 })
  return Promise.reject(error)
}

const successback = res => {
  if (res.data.code === Code.SUCC) {
    return res
  } else {
    if (res.data.code === Code.UNAUTHEN || res.data.code === Code.SESSION_TIMOUT) {
      MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出',
        { confirmButtonText: '重新登录', cancelButtonText: '取消', type: 'warning' }).then(() => {
        store.dispatch('FedLogOut').then(() => {
          location.reload()
        })
      })
    } else {
      Message({ message: res.data.message, type: 'error', duration: 5000 })
    }
    return Promise.reject(new Error(res.data.message))
  }
}

const get = (url, params, level) => ajax(getConfig(url, 'get', true, params, false, level)).then(res => successback(res)).catch(error => errback(error))

const postJson = (url, params, level) => ajax(getConfig(url, 'post', true, params, false, level)).then(res => successback(res)).catch(error => errback(error))

const post = (url, params, level) => ajax(getConfig(url, 'post', false, params, false, level)).then(res => successback(res)).catch(error => errback(error))

const del = (url, params, level) => ajax(getConfig(url, 'delete', true, params, false, level)).then(res => successback(res)).catch(error => errback(error))

const putJson = (url, params, level) => ajax(getConfig(url, 'put', true, params, false, level)).then(res => successback(res)).catch(error => errback(error))

const put = (url, params, level) => ajax(getConfig(url, 'put', false, params, false, level)).then(res => successback(res)).catch(error => errback(error))

const patch = (url, params, level) => ajax(getConfig(url, 'patch', false, params, false, level)).then(res => successback(res)).catch(error => errback(error))

const upload = (url, params, level) => ajax(getConfig(url, 'post', false, params, true, level)).then(res => successback(res)).catch(error => errback(error))

export {
  ajax,
  get,
  postJson,
  post,
  del,
  putJson,
  put,
  patch,
  upload
}
