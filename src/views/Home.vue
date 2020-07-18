<template>
  <div class="co-home">
    <h1>Home</h1>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  export default class Home extends Vue {
  }
</script>

<style lang="scss" scoped>
  .co-home {
    background-color: $black;
  }
</style>
