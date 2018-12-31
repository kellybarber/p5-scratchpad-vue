<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {}
    }
  }
</script>

<style>
  @import './styles/main.css';

  #app {
    height: 100vh;
    width: 100vw;
  }
</style>
