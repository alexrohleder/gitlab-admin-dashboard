import _ from 'lodash';
import { getParams, fetch } from './utils';

function getEnabledGroupRelation(path) {
  /* eslint-disable func-names, consistent-return */
  return function (state, getters, rootState) {
    if (typeof getters.enabledGroup === 'object' && getters.enabledGroup.id) {
      return _.find(_.get(rootState, path), { group_id: getters.enabledGroup.id });
    }
  };
}

export default {
  state: {
    availables: [],
    enabledIndex: null,
  },
  getters: {
    availables: state => state.availables,
    enabledGroup: state => state.availables[state.enabledIndex],
    enabledGroupIssues: getEnabledGroupRelation('issue.availables'),
    enabledGroupProjects: getEnabledGroupRelation('project.availables'),
  },
  actions: {
    load({ commit }, query = {}) {
      return fetch('/api/v4/groups', getParams(query)).then((data) => {
        data.forEach(group => commit('add', group));
      });
    },
  },
  /* eslint-disable no-param-reassign */
  mutations: {
    enable(state, filter) {
      const index = _.findIndex(state.availables, filter);

      if (index === -1) {
        if (process.env.NODE_ENV !== 'production') {
          /* eslint-disable no-console */
          console.error('Não existe grupo com o filtro indicado para selecionar.', filter);
        }
      } else {
        state.enabledIndex = index;
      }
    },
    add(state, group) {
      if (!_.find(state.availables, { id: group.id })) {
        state.availables.push(group);
      }
    },
  },
};
