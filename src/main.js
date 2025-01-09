import './assets/main.css'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
