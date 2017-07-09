import Axios from 'axios';
import RandomColor from 'randomcolor';

export default {
  state: {
    availables: [],
  },
  getters: {
    availables: state => state.availables,
  },
  actions: {
    load({ commit }, params) {
      Axios.get('/api/v4/projects', { params: Object.assign({ per_page: 100 }, params) }).then(({ data }) => {
        commit('add', data);
      });
    },
  },
  /* eslint-disable no-param-reassign */
  mutations: {
    add(state, projects) {
      projects.forEach((project) => {
        project.color = RandomColor({ hue: 'blue' });
        state.availables.push(project);
      });
    },
  },
};
