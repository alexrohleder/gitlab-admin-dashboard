<template>
  <div>
    <div class="boards-app">
      <div class="loading" v-if="loading">
        <i class="fa fa-spinner fa-spin"></i>
      </div>
      <div class="boards-list" v-else>
        <template v-for="label in labels">
          <board :title="label.name" :issues="label.issues" />
        </template>
      </div>
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
import Store from '@/store';
import Board from './Board';

export default {
  components: {
    Board,
  },
  data() {
    return {
      labels: [],
      loading: true,
    };
  },
  computed: {
    ...mapGetters({
      issues: 'group/enabledIssues',
    }),
  },
  watch: {
    issues(issues) {
      issues.forEach((issue, i) => {
        issue.labels.forEach((label) => {
          if (label.indexOf('FSW') === -1 && label.indexOf('NS') === -1) {
            return;
          }


          if (!_.find(this.labels, { name: label })) {
            this.labels.push({ name: label, issues: [] });
          }

          const index = _.findIndex(this.labels, { name: label });
          this.labels[index].issues.push(issue);
        });

        if (i === issues.length - 1) {
          this.loading = false;
        }
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    const interval = setInterval(() => {
      if (Store.getters['group/availables'].length) {
        Store.commit('group/setEnabledGroup', { id: Number(to.params.group) });
        Store.dispatch('group/loadGroupIssues', to.params.group);

        clearInterval(interval);
      }
    });

    next();
  },
};
</script>
