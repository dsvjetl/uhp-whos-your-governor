<template>
  <div id="app" class="app">
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import AppFooter from '@/components/blocks/AppFooter.vue';
  @Component({
    components: { AppFooter },
  })
  export default class  extends Vue {

  }
</script>

<style lang="scss">
  .app {
    position: relative;
    min-height: 100vh;
    padding-bottom: -115px;
  }
</style>
