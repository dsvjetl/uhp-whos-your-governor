<template>
  <form class="co-main-form">

    <div class="form-field">
      <p class="u-5 field-name --bold-500">County</p>
      <label class="form-label">
        <ElAutocomplete
          class="inline-input"
          v-model="selectedCounty"
          :fetch-suggestions="querySearch"
          placeholder="County"
          prefix-icon="el-icon-location-outline"
        />
      </label>
    </div>

    <div class="form-field">
      <p class="u-5 field-name --bold-500">Town or Community</p>
      <label class="form-label">
        <ElAutocomplete
          class="inline-input"
          placeholder="County"
        />
      </label>
      <div class="button-wrapper">
        <AppButton class="submit-button">
          <span class="u-5">Show Details</span>
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

  @Component({
    components: { AppButton },
    computed: mapGetters(['allCountiesAlphabeticallyOrdered']),
  })
  export default class MainForm extends Vue {
    public allCountiesAlphabeticallyOrdered: any;

    public selectedCounty: County | null = null;

    public querySearch(query: string, cb: ([]) => string[]) {
      const counties: County[] = this.allCountiesAlphabeticallyOrdered.map(
        (county: County) => Object.assign(county, { value: county.name }),
      );
      const results = query ?
        counties.filter((county: County) => county.value!.toLowerCase().includes(query.toLowerCase())) :
        counties;

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
    }

    .inline-input {
      width: 200px;

      @include media('>=phone', '<=tablet') {
        width: 100%;
      }
    }
  }
</style>
