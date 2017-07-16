/* @flow */
/* eslint-disable no-param-reassign */
import _ from 'lodash';
import type Project from './types';
import { ADD_PROJECTS } from './constants';

export default {
  [ADD_PROJECTS](state, projects: Project[]) {
    projects.forEach((project: Project) => {
      if (!_.find(state.availables, { id: project.id })) {
        state.availables.push(project);
      }
    });
  },
};
