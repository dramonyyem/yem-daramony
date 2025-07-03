<<<<<<< HEAD

import { createApp } from 'vue'
=======
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

>>>>>>> 26395d2 (update new)
import App from './App.vue'
import router from './router'

const app = createApp(App)

<<<<<<< HEAD
=======
app.use(createPinia())
>>>>>>> 26395d2 (update new)
app.use(router)

app.mount('#app')
