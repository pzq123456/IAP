import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Weather from './components/Weather.vue'
import Upload1 from './components/utils/UpLoad1.vue'
import Info from './components/Info.vue'
import BaseMapVue from './components/map/BaseMap.vue'
import LoginVue from './components/Login.vue'
import InfoMapVue from './components/map/InfoMap.vue'


const routes = [
    { path: '/', component: HelloWorld },
    { path: '/weather', component: Weather },
    { path: '/upload1', component: Upload1 },
    { path: '/info', component: Info },
    { path: '/basemap', component: BaseMapVue },
    { path: '/login', component: LoginVue },
    { path: '/infomap', component: InfoMapVue },
    ]
  
export const router = createRouter({
  history: createWebHistory(),
  routes,
})