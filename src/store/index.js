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
    }
});
