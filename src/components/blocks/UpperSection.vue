<template>
  <section class="co-upper-section">
    <div class="left">
      <div class="temp-border"></div>
      <h1 class="u-1 main-title">
        {{ $t('mainTitlePart1') }}<span class="--bold-600 governor">{{ $t('mainTitlePart2') }}</span>
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
    min-height: 455px;

    .temp-border {
      width: 60px;
      height: 0;
      border: 3px solid $main;

      @include media('>=phone', '<=tablet') {
        width: 100%;
      }
    }

    .main-title {
      margin: 10px 0 0;
      max-width: 450px;

      @include media('>=phone', '<=tablet') {
        text-align: center;
      }
    }

    .left {
      width: percentage(12 / 24);
      padding: 100px 0 0 percentage(5 / 24);

      @include media('<=custom915') {
        width: percentage(24 / 24);
        padding: 100px percentage(2 / 24) 0;
      }
    }

    .right {
      position: relative;
      width: percentage(12 / 24);
      text-align: right;
      z-index: 0;

      @include media('<=custom915') {
        display: none;
      }
    }

    .speaker-icon {
      position: absolute;
      right: calc(50% - 140px);
      top: calc(50% - 150px);
      width: 200px;
    }

    .governor {
      color: $main;
    }
  }
</style>
