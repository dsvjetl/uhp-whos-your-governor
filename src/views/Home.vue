<template>
  <div class="co-home">
    <AppHeader/>
    <UpperSection/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import AppHeader from '@/components/blocks/AppHeader.vue';
  import UpperSection from '@/components/blocks/UpperSection.vue';
  @Component({
    components: { UpperSection, AppHeader },
  })
  export default class Home extends Vue {
  }
</script>

<style lang="scss" scoped>
  .co-home {
  }
</style>
