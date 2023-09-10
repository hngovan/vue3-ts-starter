<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainView from './MainLayout.vue'
</script>

<template>
  <v-locale-provider>
    <v-app>
      <MainView />
      <v-main>
        <v-container fluid class="page-wrapper">
          <RouterView />
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
