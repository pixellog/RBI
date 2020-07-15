import Vue from 'vue'
import App from './App.vue'
import './assets/styles/main.scss';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

Vue.use(BootstrapVue, {
    BModal: {
        cancelTitle: '취소',
        okTitle: '확인',
    }
});
Vue.use(IconsPlugin)

Vue.config.productionTip = false;

const routes = [
    {path: "/", component: () => import('./components/Login.vue')},
    {path: "/main", component: () => import('./components/Main.vue')},
    {path: "**", component: () => import('./components/404.vue')},
];

const router = new VueRouter({
    routes
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
