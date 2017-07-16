/* @flow */
/* eslint-disable no-param-reassign */
import _ from 'lodash';
import type Group from './types';
import { ENABLE_GROUP, ADD_GROUPS, ADD_GROUP_ISSUES } from './constants';

export default {
  [ENABLE_GROUP](state) {
    state.enabledIndex = 3;
  },
  [ADD_GROUPS](state, groups: Group[]) {
    groups.forEach((group: Group) => {
      if (!_.find(state.availables, { id: group.id })) {
        state.availables.push(Object.assign({ issues: [] }, group));
      }
    });
  },
  [ADD_GROUP_ISSUES](state, { query, issues }) {
    const index = _.findIndex(state.availables, query);
    state.availables[index].issues = issues;
  },
};
