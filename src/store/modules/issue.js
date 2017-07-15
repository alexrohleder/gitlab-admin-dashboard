import _ from 'lodash';
import { getParams, fetch } from './utils';

export default {
  state: {
    availables: [],
  },
  getters: {
    availables: state => state.availables,
  },
  actions: {
    load({ commit, rootState }, query = {}) {
      const enabledGroup = rootState.group.enabledGroup;

      if (typeof enabledGroup !== 'object' || !enabledGroup.id) {
        return new Promise((resolve, reject) => {
          reject('Não há grupo selecionado para busca de issues.');
        });
      }

      return fetch(`/api/v4/groups/${enabledGroup.id}/issues`, getParams(query)).then((data) => {
        /* eslint-disable no-param-reassign */
        data.forEach((issue) => {
          const projects = rootState.group.enabledGroupProjects;

          issue.group_id = enabledGroup.id;
          issue.project = _.find(projects, { id: issue.project_id });

          commit('add', issue);
        });
      });
    },
  },
  /* eslint-disable no-param-reassign */
  mutations: {
    add(state, issue) {
      if (!_.find(state.availables, { id: issue.id })) {
        state.availables.push(issue);
      }
    },
  },
};
