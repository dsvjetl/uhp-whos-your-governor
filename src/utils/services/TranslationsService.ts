import { IVueI18n } from 'vue-i18n';

export class TranslationsService {
  private i18n: IVueI18n;
  private localeName: string = 'locale';

  constructor(i18n: IVueI18n) {
    this.i18n = i18n;

    this.checkLocalStorageLocale();
  }

  public setLocalStorageName(lang: string) {
    this.i18n.locale = lang;
    localStorage.setItem(this.localeName, lang);
  }

  public getLocalStorageName(): string {
    return localStorage.getItem(this.localeName) != null ?
      localStorage.getItem(this.localeName)! :
      this.i18n.locale;
  }

  private checkLocalStorageLocale(): void {
    if (localStorage.getItem(this.localeName) === null) {
      const localeLang = process.env.VUE_APP_I18N_LOCALE!;
      this.setLocalStorageName(localeLang);
    } else {
      this.setLocalStorageName(this.getLocalStorageName());
    }
  }
}
