import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入axios
import axios from 'axios'

Vue.config.productionTip = false

//设置全局组件header
import Header from './components/Header'
import Footer from './components/Footer'

Vue.component('my-header',Header);
Vue.component('my-footer',Footer);

//配置axios对象的基础路径
axios.defaults.baseURL="http://localhost:3000";
//将axios对象方法添加到vue的prototype中
Vue.prototype.axios=axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
