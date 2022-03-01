require('./bootstrap');

import Vue from 'vue';

import vuetify from './vuetify';

import router from './router';

import App from './components/App';

import store from './store';

import titleMixin from './mixins/titleMixin';

Vue.mixin(titleMixin);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('breakpoints-displayer', require('./components/global/BreakpointsDisplayer.vue').default);
Vue.component('page-title-heaader', require('./components/global/PageTitleHeader.vue').default);

const app = new Vue({

    el: '#app',

    components: {
        App
    },

    vuetify,
    router,
    store

});
