import { createApp } from 'vue'
import App from './App.vue'
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
import { plugin, defaultConfig } from '@formkit/vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Maska from 'maska'


createApp(App)
// Use the plugin with optional defaults
.use(VCalendar, {})
.use(Maska)
.use(plugin, defaultConfig)
// Mount the app
.mount('#app');
