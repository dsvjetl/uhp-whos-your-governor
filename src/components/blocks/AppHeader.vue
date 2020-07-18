<template>
  <header class="co-app-header">
    <div class="left">

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

  @Component({
    components: { AppButton },
  })
  export default class AppHeader extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-app-header {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $main;
    padding: 5px 0;

    .left, .right {
      flex: 1;
    }

    .right {
      text-align: right;
      padding-right: percentage(2 / 24);
    }

    .left {
      padding-left: percentage(5 / 24);
    }

    .lang-button {
      &:first-of-type {
        margin-right: 10px;
      }
    }
  }
</style>
