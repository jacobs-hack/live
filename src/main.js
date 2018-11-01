// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import VueMoment from 'vue-moment'
import VueLinkify from 'vue-linkify'

Vue.config.productionTip = false
Vue.use(VueFire)
Vue.use(VueMoment)
Vue.directive('linkified', VueLinkify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
