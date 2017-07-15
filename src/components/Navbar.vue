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
            <template v-for="group in groups">
              <router-link :to="{ name: 'group', params: { group: group.id } }" active-class="active" tag="li">
                <a href="#" v-on:click.prevent>
                  {{ group.name }}
                </a>
              </router-link>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      groups: 'group/availables',
    }),
  },
  mounted() {
    this.$store.dispatch('group/load');
  },
};
</script>
