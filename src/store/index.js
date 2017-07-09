import Vue from 'vue';
import Vuex from 'vuex';
import group from './modules/group';
import project from './modules/project';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    group: Object.assign({ namespaced: true }, group),
    project: Object.assign({ namespaced: true }, project),
  },
});
