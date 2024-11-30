import './assets/styles/main.css'
import './assets/styles/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faSearch, faCircle } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

library.add(faPlus, faSearch, faUser, faCircle)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
