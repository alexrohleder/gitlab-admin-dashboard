<template>
  <div>
    <div class="boards-app">
      <template v-if="isLoading">
        <div class="loading">
          <i class="fa fa-spinner fa-spin"></i>
        </div>
      </template>
      <template v-else>
        <div class="boards-list">
          <board v-for="label in labels" :key="label" :title="label" :issues="getLabelIssues(label)" />
        </div>
      </template>
    </div>
  </div>
</template>

<style>
@media (min-width: 768px) {
  .boards-list {
    min-height: 569px;
  }
}
</style>

<script>
import _ from 'lodash';
import { mapGetters } from 'vuex';
import { LOAD_PROJECTS } from '@/store/modules/project/constants';
import { LOAD_GROUP_ISSUES, ENABLE_GROUP } from '@/store/modules/group/constants';
import Board from './Board';

export default {
  components: {
    Board,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters({
      group: 'enabledGroup',
      labels: 'enabledGroupLabels',
    }),
  },
  methods: {
    getLabelIssues(label) {
      return _.filter(this.group.issues, issue => issue.labels.indexOf(label) > -1);
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      Promise.all([
        vm.$store.dispatch(LOAD_GROUP_ISSUES, to.params.group),
        vm.$store.commit(ENABLE_GROUP, { id: Number(to.params.group) }),
        vm.$store.dispatch(LOAD_PROJECTS),
      ]).then(() => {
        /* eslint-disable no-param-reassign */
        vm.isLoading = false;
      });
    });
  },
};
</script>
