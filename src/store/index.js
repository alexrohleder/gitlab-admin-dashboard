import Vue from 'vue';
import Vuex from 'vuex';
import group from './modules/group';
import project from './modules/project';
import issue from './modules/issue';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    group: Object.assign({ namespaced: true }, group),
    project: Object.assign({ namespaced: true }, project),
    issue: Object.assign({ namespaced: true }, issue),
  },
});
