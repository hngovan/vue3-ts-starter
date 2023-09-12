<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
const theme = useTheme()

const switchSunMoon = computed(() =>
  theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-weather-sunny'
)

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

</script>

<template>
  <v-btn icon variant="text" @click="toggleTheme">
    <v-icon size="large" :icon="switchSunMoon"></v-icon>
  </v-btn>
</template>
