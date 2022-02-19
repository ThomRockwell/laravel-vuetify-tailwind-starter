import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ExampleComponent from "./components/ExampleComponent";


export default new VueRouter({

    routes: [

        { path: '/test-vue-router',
            component: ExampleComponent
        },
    ],

    mode: 'history'

});
