import Vue from 'vue';
import App from './App.vue'

import Header from './components/header_footer/Header.vue'

Vue.component('app-header', Header);

Vue.directive('awesome', { 
    bind(el, binding, vnode) {

        el.innerHTML = binding.value;

        // if (binding.arg == 'red') {
        //     el.style.color = 'red';
        // } else {
        //     el.style.color = 'blue';
        // }

        el.style.color = binding.modifiers.red ? 'red' : 'blue';
        el.style.fontSize = binding.modifiers.big ? '30px' : '12px';
        // happens before the element has been inserted in the dom
        console.log(el.parentNode);
    },
    inserted(el, binding, vnode) {
        // runs after the element has been inserted in the dom
        console.log(el.parentNode);
    },
    update(el, binding, vnode, oldVnode) {
        console.log('update');
    },
    componentUpdated() {
        console.log('update too');
    },
    unbind(el, binding, vnode) {
        console.log('unbind');
    }
});


export const bus = new Vue();

new Vue({
    el: '#app',
    render: h => h(App),
    data: {

    }
})