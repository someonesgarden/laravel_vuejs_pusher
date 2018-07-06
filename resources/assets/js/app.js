import Vue from 'vue';
import VueResource from 'vue-resource';
// window.Vue = require('vue');
import router from './router';


//Semantic-UI
import SuiVue from 'semantic-ui-vue';
Vue.use(SuiVue);
import 'semantic-ui-css/semantic.min.css';
//Bootstrap
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


//Vue.component('example', require('./components/Example.vue'));

import App from './components/App.vue';

const app = new Vue({
    el: '#app',
    render: function(createElement){
        return createElement(App);
    },
    router
});
