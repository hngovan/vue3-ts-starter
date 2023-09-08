<template>
  <v-locale-provider :locale="currentLocale">
    <v-sheet width="300" class="mx-auto">
      <v-select
        v-model="currentLocale"
        :items="locales"
        :rules="[v => !!v || 'Item is required']"
        :label="t('labels.language')"
        required
      ></v-select>
    </v-sheet>
  </v-locale-provider>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocale } from 'vuetify'

const { t, availableLocales, locale } = useI18n()
const { current } = useLocale()

const currentLocale = ref(locale.value)

const locales = ref(['en-US', 'ja-JP'])

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

watch(currentLocale, newLocale => {
  current.value = newLocale
})
</script>

<style lang="scss" scoped></style>
