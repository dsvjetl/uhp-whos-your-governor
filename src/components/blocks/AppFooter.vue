<template>
  <footer class="co-app-footer">

    <div class="info-block">
      <p class="u-5 --bold-400 top"><AnchorTag :link="'https://www.probnizadatak.com'"/></p>
      <p class="u-5 bottom"><EmailTag :email="'mail@probni.zadatak.com'"/></p>
    </div>
    <div class="info-block">
      <p class="u-5 --bold-400 --center top">UHP DIGITAL</p>
      <p class="u-5 bottom">DARMSTADT / OSIJEK / ZAGREB</p>
    </div>
    <div class="info-block">
      <p class="u-5 --bold-400 --right top">governor</p>
      <p class="u-5 bottom">who's your governor?</p>
    </div>

  </footer>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import AnchorTag from '@/components/elements/AnchorTag.vue';
  import EmailTag from '@/components/elements/EmailTag.vue';
  @Component({
    components: { EmailTag, AnchorTag },
  })
  export default class AppFooter extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-app-footer {
    display: flex;
    justify-content: space-between;
    padding: 20px percentage(3 / 24);
    background-color: $purple-dark;
    height: 75px;

    .top {
      color: $purple;
    }

    .bottom {
      color: $white;
    }
  }
</style>
