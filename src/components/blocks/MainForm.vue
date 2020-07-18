<template>
  <form class="co-main-form">

      <div class="form-field">
        <p class="u-5 field-name --bold-500">County</p>
        <label class="form-label">
          <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="County"
            prefix-icon="el-icon-location-outline"
          />
        </label>
      </div>

      <div class="form-field">
        <p class="u-5 field-name --bold-500">Town or Community</p>
        <label class="form-label">
          <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="County"
            prefix-icon="el-icon-location-outline"
          />
        </label>
        <el-button>Hello</el-button>
      </div>

  </form>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  export default class MainForm extends Vue {
    public state1: string = '';

    public querySearch(query: string, cb: ([]) => string[]) {
      const links = [
        { value: 'vue', link: 'https://github.com/vuejs/vue' },
        { value: 'element', link: 'https://github.com/ElemeFE/element' },
        { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
        { value: 'mint', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' },
        { value: 'mint', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' },
      ];
      const results = query ? links.filter((link) => link.value.includes(query)) : links;
      cb(results);
    }
  }
</script>

<style lang="scss" scoped>
  .co-main-form {
    padding-top: 100px;
    position: relative;

    .form-field {
      margin-bottom: 10px;
    }

    .field-name {
      margin-bottom: 3px;
    }
  }
</style>
