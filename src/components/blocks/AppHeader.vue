<template>
  <header
    class="co-app-header"
    :class="{'has-background': hasBackground}"
  >
    <div class="left">
      <LogoIcon class="logo-icon"/>
    </div>
    <div class="right">
      <AppButton
        class="lang-button"
        :class="{'is-active': currentLocale === 'en'}"
        @click.native="changeLocale('en')"
      >
        <span class="u-5">EN</span>
      </AppButton>
      <AppButton
        class="lang-button"
        :class="{'is-active': currentLocale === 'hr'}"
        @click.native="changeLocale('hr')"
      >
        <span class="u-5">HR</span>
      </AppButton>
    </div>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import AppButton from '@/components/elements/AppButton.vue';
  import LogoIcon from '@/components/icons/LogoIcon.vue';
  import { TranslationsService } from '@/utils/services/TranslationsService';

  @Component({
    components: { LogoIcon, AppButton },
  })
  export default class AppHeader extends Vue {
    public hasBackground: boolean = false;
    public translationsService = new TranslationsService(this.$root.$i18n);
    public currentLocale: string = this.translationsService.getLocalStorageName();

    public changeLocale(lang: string) {
      this.translationsService.setLocalStorageName(lang);
      this.currentLocale = this.translationsService.getLocalStorageName();
    }

    private mounted(): void {
      this.eventListeners();
    }

    private eventListeners(): void {
      window.addEventListener('scroll', () => {
        this.hasBackground = window.pageYOffset > 40;
      });
    }
  }
</script>

<style lang="scss" scoped>
  .co-app-header {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    padding: 5px 0;
    z-index: 10;
    @include transition-all;

    &.has-background {
      background-color: $purple-light-1;
      box-shadow: 0 7px 19px -1px $purple-light-1;
    }

    .left, .right {
      flex: 1;
    }

    .left {
      padding-left: percentage(5 / 24);

      @include media('>=phone', '<=tablet') {
        padding-left: percentage(1 / 24);
      }
    }

    .right {
      text-align: right;
      padding-right: percentage(2 / 24);

      @include media('>=phone', '<=tablet') {
        padding-left: percentage(1 / 24);
      }
    }

    .lang-button {
      &.is-active {
        border: 1px solid $white;
      }

      &:first-of-type {
        margin-right: 10px;
      }

      @include media('>=phone', '<=tablet') {
        padding: 5px 10px;
      }
    }

    .logo-icon {
      height: 25px;
    }
  }
</style>
