import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import BootstrapVue3 from 'bootstrap-vue-3'
import dayjs from 'dayjs'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.config.globalProperties.axios = axios
app.use(store).use(router).mount('#app')
app.use(BootstrapVue3)
app.use(dayjs)
