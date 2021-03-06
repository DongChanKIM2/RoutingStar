import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

import accounts from './modules/accounts.js'
import home from './modules/home.js'
import profile from './modules/profile.js'
import routes from './modules/routes.js'
import images from './modules/images.js'
import reactions from './modules/reactions.js'
import search from './modules/search.js'
import alarm from './modules/alarm.js'
import comment from './modules/comment.js'


Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  plugins: [
    createPersistedState({
      paths: ['accounts', 'home', 'profile', 'alarm'],
    })
  ],

  modules: {
    accounts,
    home,
    profile,
    routes,
    images,
    reactions,
    search,
    alarm,
    comment,
  }
})
