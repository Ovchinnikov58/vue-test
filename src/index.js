//import './js/common'
import './scss/main.scss'
window.Vue = require('vue/dist/vue.js')
import store from './store/index.js'
import VueRouter from 'vue-router'
import router from './routes'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.component('App', require('./components/App.vue').default)

const app = new Vue({
    store,
    el: '#app',
    router
})