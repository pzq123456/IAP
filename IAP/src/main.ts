import { createApp } from "vue";
import App from "./App.vue";
import { router } from './router'
import baiduMap from 'vue3-baidu-map-gl'

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import "uno.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";



const app = createApp(App);
app.use(router);
app.use(baiduMap, {
    ak: 'zsuRD8fmHkCdmWzC84NDbsvwAiWBdCce',
    plugins: ['TrackAnimation']
  })
// app.use(ElementPlus);
app.mount("#app");
