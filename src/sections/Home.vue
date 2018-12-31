<template>
  <div id="home" />
</template>

<script>
  import sketchSelector from '../utils/sketchSelector';

  export default {
    name: 'Home',
    data() {
      return {}
    },
    mounted() {
      const currentSketch = sketchSelector('example');
      this.loadSketch(currentSketch);
    },
    methods : {
      loadSketch(sketch) {
        this.p5 = new window.p5(sketch);
      }
    }
  }
</script>

<style>
  #home {
    height: 100%;
    width: 100%;
  }
</style>
