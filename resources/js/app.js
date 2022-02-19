require('./bootstrap');

import Vue from 'vue';

import vuetify from './vuetify';

import router from './router';

import App from './components/App';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({

    el: '#app',

    components: {
        App
    },

    vuetify,
    router

});