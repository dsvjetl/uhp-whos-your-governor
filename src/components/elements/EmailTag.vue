<template>
  <a
    class="co-email-tag"
    :href="`mailto:${email}`"
  >
    {{email}}
  </a>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  export default class EmailTag extends Vue {
    @Prop({ required: true }) public email!: string;
  }
</script>

<style lang="scss" scoped>
  .co-email-tag {
    color: $white;
    text-decoration: none;
  }
</style>
