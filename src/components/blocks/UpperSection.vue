<template>
  <section class="co-upper-section">
    <div class="left">
      <h1 class="u-1">
        Who's Your <span class="--bold-600 governor">Governor ?</span>
      </h1>
      <MainForm/>
    </div>
    <div class="right">
      <TriangleIcon/>
      <IllustrationSpeakerIcon class="speaker-icon"/>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import TriangleIcon from '@/components/icons/TriangleIcon.vue';
  import IllustrationSpeakerIcon from '@/components/icons/IllustrationSpeakerIcon.vue';
  import MainForm from '@/components/blocks/MainForm.vue';

  @Component({
    components: { MainForm, IllustrationSpeakerIcon, TriangleIcon },
  })
  export default class UpperSection extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-upper-section {
    display: flex;

    .left {
      width: percentage(12 / 24);
      padding: 100px 0 0 percentage(5 / 24);
    }

    .right {
      position: relative;
      width: percentage(12 / 24);
      text-align: right;
      z-index: 0;
    }

    .speaker-icon {
      position: absolute;
      right: calc(50% - 130px);
      top: calc(50% - 150px);
      width: 200px;
    }

    .governor {
      color: $main;
    }
  }
</style>
