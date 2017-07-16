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
      <div class="card-footer" v-if="issue.project">
        <button class="label color-label" :style="{ 'background-color': issue.project.color }">
          {{ issue.project.name }}
        </button>
      </div>
    </div>
  </li>
</template>

<script>
import _ from 'lodash';

export default {
  props: {
    issue: Object,
  },
  computed: {
    assignee() {
      return _.first(this.issue.assignees);
    },
  },
};
</script>
