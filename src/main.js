// @ts-nocheck
import Vue from 'vue'
import App from './App.vue'
//store
import store from '@/store/index'
//router
import { router } from './router/index'
//date
import dayjs from 'dayjs'
//i18n
import VueI18n from 'vue-i18n'
import enI18n from "@/i18n/en-US.js";
import zhI18n from "@/i18n/zh-CN.js";
import enElement from 'element-ui/lib/locale/lang/en'
import zhElement from 'element-ui/lib/locale/lang/zh-CN'
// 滚动条
import Simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';
//elementui
import ElementUI from 'element-ui';
import '@/styles/element-ui-theme/index.css';
//app style
import '@/styles/app-theme/index.css'
//themes
import '@/styles/app-theme/dark.less'
import '@/styles/app-theme/light.less'

Vue.component('Simplebar', Simplebar)

Vue.use(VueI18n)
const messages = {
  en: {
    ...enI18n,
    ...enElement
  },
  zh: {
    ...zhI18n,
    ...zhElement
  }
}
const i18n = new VueI18n({
  locale: 'zh',
  messages,
})
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false
Vue.prototype.$day = dayjs

new Vue({
  store,
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
