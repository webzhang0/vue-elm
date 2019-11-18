// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import Routers from './router'
import store from './store/index'
import App from './App'
import './config/rem'
// import FastClick from 'fastclick'
Vue.config.productionTip = false

// if ('addEventListener' in document) {
// 	document.addEventListener('DOMContentLoaded', function () {
// 		FastClick.attach(document.body)
// 	}, false)
// }
Vue.use(Router)

const RouterConfig = {
	routes: Routers
}
const router = new Router(RouterConfig)

/* eslint-disable no-new */
new Vue({
  	el: '#app',
  	router,
  	store,
  // components: { App },
  // template: '<App/>'
  	render: h => h(App)
})
