import { createI18n } from "vue-i18n";
import { defineNuxtPlugin, useRuntimeConfig } from "#app";

import en from "../locales/en.json";
import fr from "../locales/fr.json";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const defaultLocale: string =
    (config.public.DEFAULT_LOCALE as string) || "fr-FR";

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: defaultLocale,
    fallbackLocale: "en-US",
    messages: {
      "en-US": en,
      "fr-FR": fr,
    },
  });

  nuxtApp.vueApp.use(i18n);
});
