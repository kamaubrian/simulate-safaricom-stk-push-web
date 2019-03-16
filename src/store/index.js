import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex);
export const store = new Vuex.Store({
    strict: true,
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

    },
    getters: {

    }
});
