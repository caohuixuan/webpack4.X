import Vue from 'vue';
import firstTitle from './app.js';
import App from './vue/app.vue';
import './css/main.css';
//Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

