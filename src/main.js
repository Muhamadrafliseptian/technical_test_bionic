import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './stores'
import './components/style/style.js'
import './components/style/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(store)
app.use(router)

app.mount('#app')
