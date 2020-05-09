require('./bootstrap');

import Vue from 'vue';
import LandingPage from './components/LandingPage';

new Vue({
  el: '#app',

  components: {
    LandingPage
  },

  mounted() {
    // console.log("app mounted");
  }
})
