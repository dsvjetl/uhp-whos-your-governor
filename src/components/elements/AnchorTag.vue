<template>
  <a
    class="co-anchor-tag"
    :href="link"
    target="_blank"
  >
    {{formattedLink}}
  </a>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  export default class AnchorTag extends Vue {
    @Prop({ required: true }) public link!: string;

    public get formattedLink(): string {
      return this.link.split('https://')[1];
    }
  }
</script>

<style lang="scss" scoped>
  .co-anchor-tag {
    color: $purple;
    text-decoration: none;
  }
</style>
