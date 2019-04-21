import authApi from '@/api/auth'

const user = {
  state: {
    list: []
  },
  mutations: {
    USERLIST(state, data) {
      state.list = data.list
      state.total = data.total
    }
  },
  actions: {
    getUserList({commit}, params) {
      return new Promise((resolve, reject) => {
        authApi.getUserList().then(res => {
          commit('USERLIST', res.data.result)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
