import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core' // import library
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' // import icon component
import { faGithub } from '@fortawesome/free-brands-svg-icons' // import specific iccon
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' // import specific iccon
import { faInstagram } from '@fortawesome/free-brands-svg-icons' // import specific iccon

library.add(faGithub, faLinkedin, faInstagram) // add to library

const app = createApp(App) // create app instance

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
