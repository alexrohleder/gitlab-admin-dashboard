<template>
  <div class="board">
    <div class="board-inner">
      <header class="board-header has-border" style="border-top-color: blue">
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
          <template v-for="issue in issues">
            <card :issue="issue" />
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card';

export default {
  props: {
    title: String,
    issues: Array,
  },
  components: {
    Card,
  },
};
</script>
