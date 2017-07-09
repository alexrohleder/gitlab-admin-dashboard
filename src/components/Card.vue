<template>
  <li class="card">
    <div>
      <div class="card-header">
        <h4 class="card-title">
          <a :href="issue.web_url" target="_blank">{{ issue.title }}</a>
          <span class="card-number">#{{ issue.iid }}</span>
        </h4>
        <div class="card-assignee" v-if="assignee">
          <a :href="assignee.web_url" :title="assignee.name" target="_blank">
            <img :src="assignee.avatar_url" width="20" height="20" class="avatar avatar-inline s20">
          </a>
        </div>
      </div>
      <div class="card-footer" v-if="project">
        <button class="label color-label" :style="{ 'background-color': project.color }">
          {{ project.name }}
        </button>
      </div>
    </div>
  </li>
</template>

<script>
import _ from 'lodash';
import { mapGetters } from 'vuex';

export default {
  props: {
    issue: Object,
  },
  computed: {
    ...mapGetters({
      projects: 'project/availables',
    }),
    assignee() {
      return _.first(this.issue.assignees);
    },
    project() {
      return _.find(this.projects, { id: this.issue.project_id });
    },
  },
  mounted() {
    if (this.projects.length === 0) {
      this.$store.dispatch('project/load');
    }
  },
};
</script>
