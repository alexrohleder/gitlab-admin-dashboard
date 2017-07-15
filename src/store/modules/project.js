import _ from 'lodash';
import RandomColor from 'randomcolor';
import { getParams, fetch } from './utils';

export default {
  state: {
    availables: [],
  },
  getters: {
    availables: state => state.availables,
  },
  actions: {
    load({ commit }, query = {}) {
      return fetch('/api/v4/groups', getParams(query))
        .then(data => data.forEach(project => commit('add', project)));
    },
  },
  /* eslint-disable no-param-reassign */
  mutations: {
    add(state, project) {
      if (!_.find(state.availables, { id: project.id })) {
        project.color = RandomColor({ hue: 'blue' });
        state.availables.push(project);
      }
    },
  },
};
