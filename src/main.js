import Vue from 'vue'
import router from './appRouter'
import App from './pages/App.vue'
import './static/styles/main.less'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
