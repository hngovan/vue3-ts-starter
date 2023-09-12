<script setup lang="ts">
import NotificationDD from './NotificationDD.vue'
import ThemeSwitcher from './ThemeSwitcher.vue'
import LanguageDropdown from './settingsDropdown/LanguageDropdown.vue'
import ProfileDropdown from './settingsDropdown/ProfileDropdown.vue'

const emit = defineEmits<{
  toggleDrawer: [sDrawer: boolean]
}>()

const toggleSidebar = (sDrawer: boolean) => {
  emit('toggleDrawer', sDrawer)
}
</script>

<template>
  <v-app-bar elevation="0" height="70">
    <div class="d-flex align-center justify-space-between w-100">
      <div>
        <v-btn
          class="hidden-lg-and-up ms-md-3 ms-sm-5 ms-3 text-muted"
          icon
          size="small"
          @click="toggleSidebar"
        >
          <v-icon size="large" icon="mdi-menu"></v-icon>
        </v-btn>
      </div>
      <div>
        <!-- Theme Switcher -->
        <ThemeSwitcher />
        <!-- Notification -->
        <NotificationDD />
        <!-- Language Picker -->
        <LanguageDropdown />
        <!-- User Profile -->
        <ProfileDropdown />
      </div>
    </div>
  </v-app-bar>
</template>

<style lang="scss" scoped></style>
