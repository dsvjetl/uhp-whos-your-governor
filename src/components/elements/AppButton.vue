<template>
  <button class="co-app-button">
    <slot/>
  </button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  export default class AppButton extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-app-button {
    border: 1px solid transparent;
    padding: 5px 30px;
    background-color: $main;
    color: $white;
    @include transition-all;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      background-color: $purple-light-1;
      color: $purple-dark;
    }

    &.is-active {
      border: 1px solid $white;
    }
  }
</style>
