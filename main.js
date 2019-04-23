import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import axios from "axios";
import qs from 'qs';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import './assets/css/app.css';
import moment from 'moment';
import Icon from 'vue-svg-icon/Icon.vue'; //icon
import has from '../public/btnPermissions.js';

let ip = axios.create({
  baseURL: 'http://127.0.0.1:3020'
})
let getaccountip = axios.create({
  baseURL: 'http://22.188.43.74:66'
})
axios.defaults.baseURL = 'http://127.0.0.1:3020';
Vue.prototype.axios = ip;
Vue.prototype.getaccountip = getaccountip;
Vue.use(ElementUI);
Vue.component('icon', Icon); //icon注册
Vue.prototype.$moment = moment;

router.beforeEach((to, form, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  //sessionStorage.getItem('permission')
  if (to.meta.haspermission) {
     if (window.sessionStorage.getItem('permission').split(',').indexOf(to.meta.haspermission) > -1) {
     // if(this.$store.state.permissionList.split(',').indexOf(to.meta.haspermission) > -1){
      next();
    } else {
      next({
        path: '/404'
      })
    }
  }
  else{
    next();
  }
 
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// 添加请求拦截器

axios.interceptors.request.use(config => {

  
  if (config.method === 'post' && config.headers['Content-Type'] !== 'multipart/form-data') {
    config.data = qs.stringify(config.data);
  }

  // if (config.method === 'post') {

  //   config.data = qs.stringify(config.data);

  // }

  return config;

}, error => {

  return Promise.reject(error);

});