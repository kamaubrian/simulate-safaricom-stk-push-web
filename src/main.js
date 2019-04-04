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
            apiKey: "<Enter-Your-Api-Key-Here>",
            authDomain: "<Enter-Auth-Domain>",
            databaseURL: "<Enter Database URL>",
            projectId: "<Ente Project ID>",
            storageBucket: "<Enter-Storage-Bucket>",
            messagingSenderId: "<Enter Messaging-id>"
        })
        this.$router.push('/')

    },
}).$mount('#app')
