<template>
  <header class="co-app-header">
    <div class="left">
      <LogoIcon class="logo-icon"/>
    </div>
    <div class="right">
      <AppButton class="lang-button">
        <span class="u-5">EN</span>
      </AppButton>
      <AppButton class="lang-button">
        <span class="u-5">HR</span>
      </AppButton>
    </div>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import AppButton from '@/components/elements/AppButton.vue';
  import IllustrationSpeakerIcon from '@/components/icons/IllustrationSpeakerIcon.vue';
  import LogoIcon from '@/components/icons/LogoIcon.vue';

  @Component({
    components: { LogoIcon, AppButton },
  })
  export default class AppHeader extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-app-header {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    padding: 5px 0;
    z-index: 10;

    .left, .right {
      flex: 1;
    }

    .left {
      padding-left: percentage(5 / 24);

      @include media('>=phone', '<=tablet') {
        padding-left: percentage(1 / 24);
      }
    }

    .right {
      text-align: right;
      padding-right: percentage(2 / 24);

      @include media('>=phone', '<=tablet') {
        padding-left: percentage(1 / 24);
      }
    }

    .lang-button {
      &:first-of-type {
        margin-right: 10px;
      }

      @include media('>=phone', '<=tablet') {
        padding: 5px 10px;
      }
    }

    .logo-icon {
      height: 25px;
    }
  }
</style>
