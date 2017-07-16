/* @flow */
import type Issue from '../issue/types';
import { getParams, fetch } from '../utils';
import type { Group, GroupQuery, GroupIssueQuery } from './types';
import { LOAD_GROUPS, LOAD_GROUP_ISSUES, ADD_GROUPS, ADD_GROUP_ISSUES } from './constants';

export default {
  [LOAD_GROUPS]({ commit }, query: GroupQuery = {}): Promise {
    return fetch('/api/v4/groups', getParams(query))
      .then((groups: Group[]) => {
        commit(ADD_GROUPS, groups);
      });
  },
  [LOAD_GROUP_ISSUES]({ commit }, groupId: number, query: GroupIssueQuery = {}): Promise {
    return fetch(`/api/v4/groups/${groupId}/issues`, getParams(query))
      .then((issues: Issue[]) => {
        commit(ADD_GROUP_ISSUES, { query: { id: Number(groupId) }, issues });
      });
  },
};
