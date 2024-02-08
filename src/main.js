import { createApp } from 'vue'
import './css/style.css'
import './css/storiesCarousel.css'
import App from './App.vue'
import router from './routing/router.js';
import VueSplide from '@splidejs/vue-splide';
import store from './data/store.js';
import axios from 'axios';

const app = createApp(App);
app.use(router); // Usa il router
app.use(store); // Usa lo store Vuex
app.use( VueSplide ); // Usa VueSplide
app.mount('#app');