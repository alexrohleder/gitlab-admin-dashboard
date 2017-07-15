import Vue from 'vue';
import Router from 'vue-router';
import Config from '@/components/Config';
import BoardList from '@/components/BoardList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/config',
      name: 'config',
      component: Config,
    },
    {
      path: '/group/:group',
      name: 'group',
      component: BoardList,
    },
  ],
});
