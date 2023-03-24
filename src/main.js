import { createApp } from 'vue';

import { createPinia } from 'pinia';
import axios from 'axios'
import VueAxios from 'vue-axios'

import AOS from 'aos';
import 'aos/dist/aos.css';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import 'bootstrap'
import './assets/all.scss';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(VueAxios, axios);
app.use(router);
app.use(AOS);
AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true
});
app.component('VueLoading', Loading);
app.mount('#app');
