import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './pages/App.vue'
import MainTabPage from './pages/MainTabPage.vue'
import Home from './pages/Home.vue'
import Mine from './pages/Mine.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: App,
            name: 'App',
            children: [
                {
                    path: '/',
                    name: 'MainTabPage',
                    component: MainTabPage,
                    children: [
                        { path: '/', name: 'Home', component: Home },
                        { path: 'mine', name: 'Mine', component: Mine },
                    ]
                }
            ]
        }
    ],
    mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history'
})
export default router