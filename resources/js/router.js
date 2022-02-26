import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


// Lazy loading syntax is optional, but recommended. https://vueschool.io/lessons/lazy-loading-routes-vue-cli-only


export default new VueRouter({

    routes: [

        { path: '/',
            component: () => import(/* webpackChunkName: "example-component" */ './components/ExampleComponent'),
            props: {
                titleProp: 'Example Component'
            }
        },
    ],

    mode: 'history'

});
