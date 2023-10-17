<script setup lang="ts">
import { mergeProps } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const handleSetLanguages = (lang: 'en-US' | 'ja-JP') => {
  locale.value = lang
}
</script>

<template>
  <v-menu>
    <template #activator="{ props: menu }">
      <v-tooltip :text="$t('tooltip.translate')">
        <template #activator="{ props: tooltip }">
          <v-btn icon="mdi-translate" v-bind="mergeProps(menu, tooltip)"></v-btn>
        </template>
      </v-tooltip>
    </template>

    <v-list>
      <v-list-item @click="handleSetLanguages('en-US')">
        <v-list-item-title>English</v-list-item-title>
      </v-list-item>
      <v-list-item @click="handleSetLanguages('ja-JP')">
        <v-list-item-title>Japan</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style lang="scss" scoped></style>
