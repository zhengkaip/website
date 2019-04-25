import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import {getToken, setToken, removeToken} from '@/utils/auth'
import authApi from '@/api/auth'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    id: '',
    account: '',
    name: '',
    avatar: '',
    token: getToken()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ACCOUNT: (state, account) => {
      state.account = account
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ID: (state, id) => {
      state.id = id
    }
  },
  actions: {
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        authApi.login(user.account, user.password).then(res => {
          commit('SET_TOKEN', res.data.result['Oauth-Token'])
          setToken(res.data.result['Oauth-Token'])
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    getUserInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        authApi.getUserInfo().then(res => {
          if (res.data.result) {
            commit('SET_ACCOUNT', res.data.result.loginNmame)
            commit('SET_NAME', res.data.result.nickname)
            commit('SET_AVATAR', res.data.result.avatar)
            commit('SET_ID', res.data.result.id)
          } else {
            commit('SET_ACCOUNT', '')
            commit('SET_NAME', '')
            commit('SET_AVATAR', '')
            commit('SET_ID', '')
            removeToken()
          }
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 退出
    logout({commit, state}) {
      return new Promise((resolve, reject) => {
        authApi.logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ACCOUNT', '')
          commit('SET_NAME', '')
          commit('SET_AVATAR', '')
          commit('SET_ID', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  modules: {
    app
  },
  getters
})

export default store
