<script setup lang="ts">
function changeLanguage() {
  // store.SetLanguage(store.GetCurrentLanguage == LanguageType.DK ? LanguageType.EN : LanguageType.DK)
}
</script>
<template>
  <div>This is Dashboard</div>
  <p>{{ $t('about.donate', { donate: $n(10000, 'currency') }) }}</p>
</template>
