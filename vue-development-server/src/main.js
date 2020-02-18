import Vue from 'vue';
import App from './App.vue'

import Header from './components/header_footer/Header.vue'

Vue.component('app-header', Header);

export const bus = new Vue();

new Vue({
    el: '#app',
    render: h => h(App),
    data: {

    }
})