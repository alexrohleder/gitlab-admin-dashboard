<template>
  <div id="app">
    <navbar />
    <div class="container-fluid">
      <div class="row">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar';

export default {
  name: 'app',
  components: { Navbar },
};
</script>
