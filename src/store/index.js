import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'

Vue.use(Vuex)

import users from './users'
import article from './article'
import comments from './comments'

export default new Vuex.Store({
    modules: {
        users,
        article,
        comments
    }
})