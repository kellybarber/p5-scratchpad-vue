<template>
  <div id="color" />
</template>

<script>
  import {
    helloColor,
    colorSpectrumGrid
  } from '../sketches';

  export default {
    name: 'Home',
    data() {
      return {
        sketches : [ colorSpectrumGrid ]
      }
    },
    mounted() {
      this.sketches.forEach(sketch => {
        this.loadSketch(sketch);
      })
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
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  #color > * {
    margin-bottom: 60px;
  }
</style>
