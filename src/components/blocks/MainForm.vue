<template>
  <form class="co-main-form" @submit.prevent>

    <div class="form-field">
      <p class="u-5 field-name --bold-500">{{ $t('county') }}</p>
      <label class="form-label">
        <ElAutocomplete
          class="inline-input"
          :placeholder="$t('county')"
          prefix-icon="el-icon-location-outline"
          v-model="selectedCountyName"
          :fetch-suggestions="countryQuerySearch"
          @select="onCountySelect"
          @change="onCountyChange"
        />
      </label>
    </div>

    <div class="form-field">
      <p class="u-5 field-name --bold-500">{{ $t('townOrCommunity') }}</p>
      <label class="form-label">
        <ElAutocomplete
          class="inline-input"
          :placeholder="$t('townOrCommunity')"
          v-model="selectedTownOrCommunityName"
          :fetch-suggestions="townOrCommunityQuerySearch"
          @select="onTownOrCommunitySelect"
        />
      </label>
      <div class="button-wrapper">
        <AppButton
          class="submit-button"
          :class="{'is-disabled': !isEverythingFilled}"
          @click.native="onSubmit"
        >
          <span class="u-5">{{ $t('showDetails') }}</span>
        </AppButton>
      </div>
    </div>

  </form>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import AppButton from '@/components/elements/AppButton.vue';
  import { mapGetters } from 'vuex';
  import { County } from '@/types/County';
  import { TownOrCommunity } from '@/types/TownOrCommunity';

  @Component({
    components: { AppButton },
    computed: mapGetters(['allCountiesAlphabeticallyOrdered', 'allTownsAndCommunitiesAlphabeticallyOrdered']),
  })
  export default class MainForm extends Vue {
    public allCountiesAlphabeticallyOrdered!: County[];
    public allTownsAndCommunitiesAlphabeticallyOrdered!: TownOrCommunity[];

    public selectedCounty: County | null = null;
    public selectedCountyName: string = '';
    public selectedTownOrCommunity: TownOrCommunity | null = null;
    public selectedTownOrCommunityName: string = '';

    public get isEverythingFilled(): boolean {
      return this.selectedCounty !== null &&
        this.selectedTownOrCommunity !== null &&
        this.selectedTownOrCommunityName.length > 0;
    }

    public onSubmit(): void {
      if (!this.isEverythingFilled) {
        return;
      }

      this.$store.dispatch('getTownAndCommunityDetails', this.selectedTownOrCommunity);
    }

    public countryQuerySearch(query: string, cb: ([]) => County[]): void {
      this.querySearch<County>(query, cb, this.allCountiesAlphabeticallyOrdered);
    }

    public townOrCommunityQuerySearch(query: string, cb: ([]) => TownOrCommunity[]): void {
      const allTownsAndCommunities = this.selectedCounty ?
        this.allTownsAndCommunitiesAlphabeticallyOrdered.filter(
          (townOrCommunity: TownOrCommunity) => townOrCommunity.countyID === this.selectedCounty!.ID,
        ) : this.allTownsAndCommunitiesAlphabeticallyOrdered;

      this.querySearch<TownOrCommunity>(query, cb, allTownsAndCommunities);
    }

    public onCountySelect(county: County): void {
      this.selectedCounty = county;
      this.selectedTownOrCommunity = null;
      this.selectedTownOrCommunityName = '';
    }

    public onCountyChange(): void {
      if (this.selectedCountyName.length <= 0) {
        this.selectedCounty = null;
      }
    }

    public onTownOrCommunitySelect(townOrCommunity: TownOrCommunity): void {
      this.selectedTownOrCommunity = townOrCommunity;
      const filteredCounty: County = this.allCountiesAlphabeticallyOrdered.filter(
        (county: County) => county.ID === townOrCommunity.countyID,
      )[0];

      this.selectedCounty = filteredCounty;
      this.selectedCountyName = filteredCounty.name;
    }

    private querySearch<T>(query: string, cb: ([]) => any[], resources: T[]): void {
      const mappedResources: T[] = resources.map(
        (resource: any) => Object.assign(resource, { value: resource.name }),
      );
      const results = query ?
        mappedResources.filter((resource: any) => resource.value!.toLowerCase().includes(query.toLowerCase())) :
        mappedResources;

      cb(results);
    }
  }
</script>

<style lang="scss" scoped>
  .co-main-form {
    padding-top: 20px;
    position: relative;

    .form-field {
      margin-bottom: 20px;
    }

    .field-name {
      margin-bottom: 3px;
    }

    .button-wrapper {
      display: inline-block;
      margin-left: 20px;

      @include media('>=phone', '<=tablet') {
        display: block;
        margin: 15px 0 0;
        text-align: right;
      }
    }

    .submit-button {
      height: 40px;

      &.is-disabled {
        pointer-events: none;
        opacity: .5;
      }
    }

    .inline-input {
      width: 200px;

      @include media('>=phone', '<=tablet') {
        width: 100%;
      }
    }
  }
</style>
