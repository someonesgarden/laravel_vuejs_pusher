import Vue from 'vue';
import VueRouter from 'vue-router';
import axious from 'axios';
import IndexPage from './components/pages/Index.vue';

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes:[
        {path:'/', component: IndexPage, name:'index'},

    ],
    scrollBehavior(to, from, savedPosition){
        return {x:0, y:0}
    }
});

export default router;
