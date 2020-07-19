<template>
  <svg class="co-triangle-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0 0, 100 100, 0 100"/>
  </svg>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  export default class TriangleIcon extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-triangle-icon {
    transform: rotateY(180deg) rotateX(180deg);

    polygon {
      fill: $main;
    }
  }
</style>
