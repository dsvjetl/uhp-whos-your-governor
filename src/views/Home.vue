<template>
  <div class="co-home">
    <AppHeader/>
    <UpperSection/>
    <PlaceDetails/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import AppHeader from '@/components/blocks/AppHeader.vue';
  import UpperSection from '@/components/blocks/UpperSection.vue';
  import PlaceDetails from '@/components/blocks/PlaceDetails.vue';

  @Component({
    components: { PlaceDetails, UpperSection, AppHeader },
  })
  export default class Home extends Vue {
  }
</script>

<style lang="scss" scoped>
  .co-home {
    min-height: 100vh;
    margin-bottom: -115px; // minus footer height
  }
</style>
