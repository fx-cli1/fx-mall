import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import Vant from 'vant';
import { Toast,Dialog,NavBar,Button  } from 'vant'
import 'vant/lib/index.css';
import "./assets/iconfont/iconfont.css"

import "./mock/index.js"
Vue.use(Vant);
Vue.use(Toast,Dialog,NavBar,Button  );
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
