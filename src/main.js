import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routing/router.js';
import store from './data/store.js';
import axios from 'axios';

const app = createApp(App);
app.use(router);
app.use(store); // Usa lo store Vuex
app.mount('#app');