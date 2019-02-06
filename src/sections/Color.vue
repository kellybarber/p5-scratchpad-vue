<template>
  <div id="color" />
</template>

<script>
  import {
    helloColor,
    colorSpectrumGrid,
    starField
  } from '../sketches';

  export default {
    name: 'Home',
    data() {
      return {}
    },
    mounted() {
      this.loadSketch(starField);
    },
    methods : {
      loadSketch(sketch) {
        this.p5 = new window.p5(sketch);
      }
    }
  }
</script>

<style>

  #color {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #222;
  }

</style>
