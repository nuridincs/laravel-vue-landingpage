require('./bootstrap');

import Vue from 'vue';
import NavBar from './components/Header';
import Price from './components/Price';

new Vue({
  el: '#app',

  components: {
    NavBar,
    Price
  },

  mounted() {
    console.log("app mounted");
  }
})
