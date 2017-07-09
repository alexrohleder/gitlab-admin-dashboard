import _ from 'lodash';
import Axios from 'axios';

export default {
  state: {
    availables: [],
    enabledIndex: null,
  },
  getters: {
    availables: state => state.availables,
    enabled: state => state.availables[state.enabledIndex],
    enabledIssues: state => Object(state.availables[state.enabledIndex]).issues,
    hasEnabled: state => !!Object(state.availables[state.enabledIndex]).id,
  },
  actions: {
    /**
     * Busca todos os grupos disponíveis no gitlab.
     *
     * @param  {Object}  query Parâmetros de busca de grupo no GitLab.
     * @return {Promise}
     */
    loadGroups({ commit }, query = {}) {
      return Axios.get('/api/v4/groups', { params: query }).then(({ data }) => {
        if (!_.isArray(data)) {
          throw Error;
        }

        data.forEach(group => commit('addGroup', group));
      }).catch(() => {
        if (process.env.NODE_ENV !== 'production') {
          /* eslint-disable no-console */
          console.error('[store.store] falha ao buscar grupos.');
        }
      });
    },

    /**
     * Método de busca de issues do grupo ativo no momento.
     *
     * @param  {Object}  query Parâmetros de busca de issue em grupo do Gitlab.
     * @return {Promise}
     */
    loadGroupIssues({ commit, getters }, query = {}) {
      if (process.env.NODE_ENV !== 'production' && !getters.hasEnabled) {
        /* eslint-disable no-console */
        return console.error('[store.group] não há grupo selecionado para a busca de issues.');
      }

      const id = getters.enabled.id;
      const params = Object.assign({ per_page: 100 }, query);

      return Axios.get(`/api/v4/groups/${id}/issues`, { params }).then(({ data }) => {
        if (!_.isArray(data)) {
          throw Error;
        }

        data.forEach(issue => commit('addGroupIssue', issue));
      }).catch(() => {
        if (process.env.NODE_ENV !== 'production') {
          /* eslint-disable no-console */
          console.error('[store.store] falha ao buscar issues.');
        }
      });
    },
  },
  /* eslint-disable no-param-reassign */
  mutations: {
    setEnabledGroup(state, filter) {
      const index = _.findIndex(state.availables, filter);

      if (index === -1) {
        if (process.env.NODE_ENV !== 'production') {
          /* eslint-disable no-console */
          console.error('[store.group] Não existe grupo com o filtro indicado para selecionar.', filter);
        }
      } else {
        state.enabledIndex = index;
      }
    },
    addGroup(state, group) {
      group.issues = [];

      if (!_.find(state.availables, { id: group.id })) {
        state.availables.push(group);
      }
    },
    addGroupIssue(state, issue) {
      if (!_.find(state.availables[state.enabledIndex], { id: issue.id })) {
        state.availables[state.enabledIndex].issues.push(issue);
      }
    },
  },
};
