import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ExampleComponent from "./components/ExampleComponent";


export default new VueRouter({

    routes: [

        { path: '/',
            component: ExampleComponent,
            props: {
                titleProp: 'Example Component'
            }
        },
    ],

    mode: 'history'

});
