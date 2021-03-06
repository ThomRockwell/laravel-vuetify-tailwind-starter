import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        count: 0
    },

    mutations: {
        increment(state){
            state.count++;
            console.log(state.count);
        }
    },

    actions: {
        increment({commit}){
            this.commit('increment');
        },


    }

});
