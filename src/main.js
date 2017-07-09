import Vue from 'vue';
import Axios from 'axios';
import App from './components/App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Axios.defaults.headers.common['PRIVATE-TOKEN'] = process.env.GITLAB_PRIVATE_TOKEN;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
