import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Article from './pages/Article.vue'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/article',
            component: Article
        }
    ],
    //mode: 'history'
})
