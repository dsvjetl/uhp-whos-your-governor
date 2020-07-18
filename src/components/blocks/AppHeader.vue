<template>
  <header class="co-app-header">
    <AppButton>
      <span class="u-4">HR</span>
    </AppButton>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import AppButton from '@/components/elements/AppButton.vue';
  @Component({
    components: { AppButton }
  })
  export default class AppHeader extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-app-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $main;
    padding: 5px;
  }
</style>
