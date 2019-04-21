import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: ''
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    user(state, newData) {
      state.user = newData;
    }
  },
  actions: {
    async sendRequest(context, options) {
      let response = await axios(options).catch( err => {
        return err.response;
      });
      return response;
    },
    async log(context, dataForLogin) {
      let options = {
        method: 'POST',
        url: `auth/log`,
        data: dataForLogin,
      }
      return context.dispatch('sendRequest', options);
    },
    async reg(context, dataForRegistration) {
      let options = {
        method: 'POST',
        url: `auth/reg`,
        data: dataForRegistration,
      }
      return await context.dispatch('sendRequest', options);
    },
  }
})
