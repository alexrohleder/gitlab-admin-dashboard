/* @flow */
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import type GroupState from './types';

const state: GroupState = {
  availables: [],
  enabledIndex: -1,
};

export default {
  actions,
  mutations,
  state,
  getters,
};
