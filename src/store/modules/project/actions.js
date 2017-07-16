/* @flow */
import { getParams, fetch } from '../utils';
import { LOAD_PROJECTS, ADD_PROJECTS } from './constants';
import type { Project, ProjectQuery } from './types';

export default {
  [LOAD_PROJECTS]({ commit }, query: ProjectQuery = {}) {
    return fetch('/api/v4/projects', getParams(query))
      .then((projects: Project[]) => {
        commit(ADD_PROJECTS, projects);
      });
  },
};
