import Vue from 'vue';
import App from './App.vue';
import VueREsource from "vue-resource";

Vue.use(VueResource);

new Vue({
    el: '#app',
    render: h => h(App)
});
