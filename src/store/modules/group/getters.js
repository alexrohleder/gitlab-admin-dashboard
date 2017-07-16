/* @flow */
import _ from 'lodash';
import type Label from '../issue/types';
import type { Group, GroupState, GroupGetters } from './types';

const getters: GroupGetters = {
  groups(groupState: GroupState): Group[] {
    return groupState.availables;
  },
  enabledGroup(groupState: GroupState): Group {
    return groupState.enabledIndex > -1 ? groupState.availables[groupState.enabledIndex] : null;
  },
  enabledGroupLabels(groupState: GroupState, groupGetters: GroupGetters): Label[] {
    if (groupGetters.enabledGroup) {
      return _.uniq(_.flatten(_.map(groupGetters.enabledGroup.issues, 'labels')));
    }

    return [];
  },
};

export default getters;
