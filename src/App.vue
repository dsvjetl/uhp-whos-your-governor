<template>
  <div id="app">
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
