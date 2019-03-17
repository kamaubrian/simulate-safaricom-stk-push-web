/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);
export const store = new Vuex.Store({
    strict: true,
    plugins:[
      createPersistedState()
    ],
    state: {
        payments: [{
            _id: '',
            emailAddress: '',
            phoneNumber: '',
            transactionId: '',
            transactionTime: ''
        }],
        loading: null,
        error: ''
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        unSetLoading(state) {
            state.loading = false;
        },
        setError(state, payload) {
            state.error = payload;
        },
        unSetError(state) {
            state.error = false;
        },
        setPayment(state, payload) {
            state.payments = payload
        },
        unSetPayment(state) {
            state.payments = [];
        }
    },
    actions: {
        async fetchRecords({commit}) {
            try{
                let paymentCollection = []
                commit('unSetError')
                commit('setLoading',true)
                let paymentsCollections = await firebase.firestore();
                let querySnapshot = await paymentsCollections.collection('Payments').get();
                querySnapshot.forEach((document=>{
                    console.log(document.data())
                    paymentCollection.push(document.data())
                }));
                commit('setLoading',false)
                commit('setPayment',paymentCollection)

            }catch (e) {
                commit('setLoading',false)
                console.error('Error Fetching Records',e.message);
                commit('setError',e.message);
            }
        },
        async onProcessSTKPush({commit}){
            try{
                commit('setLoading',true)
                await sleep(1500);
                commit('setLoading',false)

            }catch (e) {
                commit('setLoading',false);
                console.error('Error Processing STK Push',e.message);
                commit('setError',e.message)
            }
        }
    },
    getters: {
        payments(state){
            return state.payments
        },
        loading(state){
            return state.loading
        },
        error(state){
            return state.error
        }
    }
});
function  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));

}