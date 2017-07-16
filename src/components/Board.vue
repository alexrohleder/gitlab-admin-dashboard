<template>
  <div class="board">
    <div class="board-inner">
      <header class="board-header has-border">
        <h3 class="board-title">
          <span>{{ title }}</span>
          <div class="board-issue-count-holder pull-right clearfix">
            <span class="board-issue-count pull-left">
              {{ issues.length }}
            </span>
          </div>
        </h3>
      </header>
      <div class="board-list-component">
        <ul class="board-list">
          <card v-for="issue in issues" :key="issue.id" :issue="issue" />
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.board-header.has-border {
  border-top-color: blue;
}
</style>

<script>
import Card from './Card';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    issues: {
      type: Array,
      required: true,
    },
  },
  components: {
    Card,
  },
};
</script>
