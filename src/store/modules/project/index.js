/* @flow */
import actions from './actions';
import mutations from './mutations';
import type { ProjectState, ProjectGetters } from './types';

const state: ProjectState = {
  availables: [],
};

const getters: ProjectGetters = {
  projects: (projectState: ProjectState) => projectState.availables,
};

export default {
  actions,
  mutations,
  state,
  getters,
};
