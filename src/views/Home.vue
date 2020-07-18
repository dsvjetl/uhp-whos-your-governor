<template>
  <div class="co-home">
    <AppHeader/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import AppHeader from '@/components/blocks/AppHeader.vue';
  @Component({
    components: { AppHeader },
  })
  export default class Home extends Vue {
  }
</script>

<style lang="scss" scoped>
  .co-home {
  }
</style>
