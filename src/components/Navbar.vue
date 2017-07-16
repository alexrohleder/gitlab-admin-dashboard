<template>
  <div>
    <header class="navbar navbar-gitlab with-horizontal-nav">
      <div class="container-fluid">
        <div class="header-content">
          <div class="header-logo">
            <router-link to="/" class="home" title="dashboard">
              <img src="../assets/logo.png" alt="Logo Meta">
            </router-link>
          </div>
          <div class="title-container">
            <div class="title">
              Dashboard de Projetos
            </div>
          </div>
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li>
                <router-link to="config">
                  <i class="fa fa-wrench"></i>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div class="layout-nav">
      <div class="container-fluid">
        <div class="nav-control">
          <ul class="nav-links">
            <router-link v-for="group in groups" :key="group.id" :to="getGroupRoute(group)" active-class="active" tag="li">
              <a href="#" v-on:click.prevent>
                {{ group.name }}
              </a>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { LOAD_GROUPS } from '@/store/modules/group/constants';

export default {
  computed: {
    ...mapGetters({
      groups: 'groups',
    }),
  },
  mounted() {
    this.$store.dispatch(LOAD_GROUPS);
  },
  methods: {
    getGroupRoute(group) {
      return { name: 'group', params: { group: group.id } };
    },
  },
};
</script>
