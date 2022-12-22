import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store.js'
import Vuex from 'vuex'
import Router from "./router/router";

createApp(App)
    .use(store)
    .use(Vuex)
    .use(Router).mount('#app')