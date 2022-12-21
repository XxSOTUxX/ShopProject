import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store.js'
import Vuex from 'vuex'

createApp(App).use(store).use(Vuex).mount('#app')
app.config.globalProperties.$image = useImage;