import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(store)
    .mount('#app')