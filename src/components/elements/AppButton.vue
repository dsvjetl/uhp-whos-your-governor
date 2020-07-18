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
    border-radius: 3px;
    padding: 5px 20px;
    background-color: $main;
    color: $white;
    @include transition-transform;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }

    &.is-active {
      border: 1px solid $white;
    }
  }
</style>
