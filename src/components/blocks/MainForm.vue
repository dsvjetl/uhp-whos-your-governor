<template>
  <div class="co-main-form">
    <div class="left">

    </div>
    <div class="right">
      <TriangleIcon/>
      <IllustrationSpeakerIcon class="speaker-icon"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import TriangleIcon from '@/components/icons/TriangleIcon.vue';
  import IllustrationSpeakerIcon from '@/components/icons/IllustrationSpeakerIcon.vue';

  @Component({
    components: { IllustrationSpeakerIcon, TriangleIcon },
  })
  export default class MainForm extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-main-form {
    display: flex;

    .left {
      width: percentage(14 / 24);
    }

    .right {
      position: relative;
      width: percentage(10 / 24);
      text-align: right;
      z-index: 0;
    }

    .speaker-icon {
      position: absolute;
      right: percentage(3 / 10);
      top: percentage(3 / 10);
      width: 170px;
    }
  }
</style>
