import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta';

import * as VueGoogleMaps from 'vue2-google-maps'

import Tabs from 'vue-tabs-component';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTimes, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPlus, faTimes, faAngleDown);

Vue.component('font-awesome-icon', FontAwesomeIcon);

// tab
Vue.use(Tabs);

Vue.use(Meta);

import VueFullPage from 'vue-fullpage.js'
import './assets/css/style.css';

import Routes from './routes'

Vue.config.productionTip = false

// google map
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLEMAPSKEY, // UPDATE API KEY IN .ENV FILE (SEE .ENV.EXAMPLE)
  },
});

// FullPage Scroll
Vue.use(VueFullPage);

// Router
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
