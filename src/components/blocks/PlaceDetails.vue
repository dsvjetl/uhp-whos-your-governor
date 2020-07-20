<template>
  <div
    class="co-place-details"
    :class="{'is-transparent': !isTownAndCommunityDetailsFilled}"
  >

    <div class="place-name-wrapper">
      <p class="u-4 place-name">{{ $t('detailsFor') }} {{townAndCommunityDetails.name}}</p>
    </div>

    <section class="place-details">
      <div class="place-detail">
        <p class="u-5 key-name">{{ $t('governor') }}</p>
        <p class="u-5 key-value">{{townAndCommunityDetails.governor}}</p>
      </div>
      <div class="place-detail">
        <p class="u-5 key-name">{{ $t('web') }}</p>
        <p class="u-5 key-value">{{townAndCommunityDetails.web}}</p>
      </div>
      <div class="place-detail">
        <p class="u-5 key-name">{{ $t('viceGovernor') }}</p>
        <p class="u-5 key-value">{{townAndCommunityDetails.viceGovernor}}</p>
      </div>
      <div class="place-detail">
        <p class="u-5 key-name">{{ $t('email') }}</p>
        <p class="u-5 key-value">{{townAndCommunityDetails.email}}</p>
      </div>
      <div class="place-detail">
        <p class="u-5 key-name">{{ $t('address') }}</p>
        <p class="u-5 key-value">{{townAndCommunityDetails.address}}</p>
      </div>
      <div class="place-detail">
        <p class="u-5 key-name">{{ $t('phone') }}</p>
        <p class="u-5 key-value">
          <a class="phone-anchor" :href="`tel:${townAndCommunityDetails.phone}`">{{townAndCommunityDetails.phone}}</a>
        </p>
      </div>
      <div class="place-detail">
        <p class="u-5 key-name">{{ $t('zipCode') }}</p>
        <p class="u-5 key-value">{{townAndCommunityDetails.zipCode}}</p>
      </div>
      <div class="place-detail">
        <p class="u-5 key-name">{{ $t('fax') }}</p>
        <p class="u-5 key-value">{{townAndCommunityDetails.fax}}</p>
      </div>
      <div class="place-detail">
        <p class="u-5 key-name">{{ $t('country') }}</p>
        <p class="u-5 key-value">Croatia</p>
      </div>
    </section>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import { mapGetters } from 'vuex';
  import { TownAndCommunityDetails } from '@/types/TownAndCommunityDetails';

  @Component({
    computed: mapGetters(['townAndCommunityDetails']),
  })
  export default class PlaceDetails extends Vue {
    public townAndCommunityDetails!: TownAndCommunityDetails;

    public get isTownAndCommunityDetailsFilled(): boolean {
      return Object.keys(this.townAndCommunityDetails).length > 0;
    }
  }
</script>

<style lang="scss" scoped>
  .co-place-details {
    width: 100%;
    position: relative;
    top: -40px;
    padding-bottom: 120px;
    @include transition-all;

    &.is-transparent {
      opacity: 0;
    }

    @include media('>=phone', '<=tablet') {
      top: 0;
      padding-bottom: 20px;
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

    .phone-anchor {
      text-decoration: none;
      color: $main;
    }

    .place-name {
      color: $white;
      font-weight: 300;
    }

    .place-details {
      display: flex;
      flex-wrap: wrap;
      padding: 30px percentage(3 / 24) 20px percentage(3 / 24);
      position: relative;
      justify-content: space-between;

      @include media('>tablet', '<=desktop') {
        padding: 10px percentage(1 / 24) 20px;
      }

      @include media('>=phone', '<=tablet') {
        display: block;
        padding: 10px percentage(1 / 24);
      }
    }

    .place-detail {
      flex-basis: 48%;
      display: flex;
      justify-content: left;

      @include media('>=phone', '<=tablet') {
        justify-content: left;
        padding-left: percentage(1 / 24);
      }
    }

    .key-name {
      width: 125px;
      color: $main;
      font-weight: 600;
      padding-right: 10px;
    }

    .key-value {
      border-bottom: 1px solid $main;
      color: $main;
    }
  }
</style>
