import Vue from 'vue';
import App from './App.vue'
import VueResource from 'vue-resource'

import Header from './components/header_footer/Header.vue'
import Footer from './components/header_footer/Footer.vue'

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);

Vue.use(VueResource);

new Vue({
    el: '#app',
    render: h => h(App),
    data: {

    }
})