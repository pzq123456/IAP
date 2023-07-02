import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Weather from './components/Weather.vue'
import Upload1 from './components/utils/UpLoad1.vue'
const routes = [
    { path: '/', component: HelloWorld },
    { path: '/weather', component: Weather },
    { path: '/upload1', component: Upload1 },
    ]
  
export const router = createRouter({
  history: createWebHistory(),
  routes,
})