import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import * as firebase from 'firebase'
import {store} from './store'
import {sync} from 'vuex-router-sync'
Vue.config.productionTip = false

sync(store,router)
new Vue({
    render: h => h(App),
    router,
    store,
    created() {
        firebase.initializeApp({
            apiKey: "AIzaSyDM0kdfwMyuAM6tMu7uFHEXWQrUG-Ot-OM",
            authDomain: "node-contigency-planning-demo.firebaseapp.com",
            databaseURL: "https://node-contigency-planning-demo.firebaseio.com",
            projectId: "node-contigency-planning-demo",
            storageBucket: "node-contigency-planning-demo.appspot.com",
            messagingSenderId: "148070500708"
        })
        this.$router.push('/')

    },
}).$mount('#app')
