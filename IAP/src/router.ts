import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Weather from './components/Weather.vue'

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/weather', component: Weather },
    ]
  
export const router = createRouter({
  history: createWebHistory(),
  routes,
})