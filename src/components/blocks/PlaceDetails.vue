<template>
  <div class="co-place-details">

    <div class="place-name-wrapper">
      <p class="u-4 place-name">Details for *NAME*</p>
    </div>

    <section class="place-details">
      <div class="place-detail">
        <p class="u-5 key-name">Governor</p>
        <p class="u-5 key-value">Mark Johnson</p>
      </div>
      <div class="place-detail">
        <p class="u-5 key-name">Governor</p>
        <p class="u-5 key-value">Mark Johnson</p>
      </div>
      <div class="place-detail">
        <p class="u-5 key-name">Governor</p>
        <p class="u-5 key-value">Mark Johnson</p>
      </div>
      <div class="place-detail">
        <p class="u-5 key-name">Governor</p>
        <p class="u-5 key-value">Mark Johnson</p>
      </div>
      <div class="place-detail">
        <p class="u-5 key-name">Governor</p>
        <p class="u-5 key-value">Mark Johnson</p>
      </div>
      <div class="place-detail">
        <p class="u-5 key-name">Governor</p>
        <p class="u-5 key-value">Mark Johnson</p>
      </div>
      <div class="place-detail">
        <p class="u-5 key-name">Governor</p>
        <p class="u-5 key-value">Mark Johnson</p>
      </div>
      <div class="place-detail">
        <p class="u-5 key-name">Governor</p>
        <p class="u-5 key-value">Mark Johnson</p>
      </div>
      <div class="place-detail">
        <p class="u-5 key-name">Governor</p>
        <p class="u-5 key-value">Mark Johnson</p>
      </div>
    </section>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  export default class PlaceDetails extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-place-details {
    width: 100%;
    position: relative;
    top: -40px;
    padding-bottom: 120px;

    @include media('>=phone', '<=tablet') {
      top: 0;
    }

    .place-name-wrapper {
      width: percentage(7 / 24);
      padding: 15px 0 15px percentage(5 / 24);
      background-color: $main;

      @include media('>=phone', '<=tablet') {
        width: percentage(15 / 24);
        padding: 10px 20px 10px percentage(1 / 24);
        text-align: center;
      }
    }

    .place-name {
      color: $white;
      font-weight: 300;
    }

    .place-details {
      display: flex;
      flex-wrap: wrap;
      padding: 30px percentage(7 / 24) 20px percentage(5 / 24);
      position: relative;
      justify-content: space-between;

      @include media('>=phone', '<=tablet') {
        display: block;
        padding: 10px percentage(1 / 24);
      }
    }

    .place-detail {
      flex-basis: 37%;
      display: flex;
      justify-content: space-between;

      @include media('>=phone', '<=tablet') {
        justify-content: left;
        padding-left: percentage(1 / 24);
      }
    }

    .key-name {
      color: $main;
      font-weight: 600;
      padding-right: 20px;
    }

    .key-value {
      width: 110px;
      border-bottom: 1px solid $main;
      color: $main;
    }
  }
</style>
