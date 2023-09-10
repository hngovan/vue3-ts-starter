<script setup lang="ts">
const items = [
  { text: 'Profile', icon: 'mdi-account', to: '' },
  { text: 'Account', icon: 'mdi-email', to: '' },
  { text: 'Logout', icon: 'mdi-logout', to: '/auth/login' }
]
</script>
<template>
  <v-menu
    :close-on-content-click="false"
    width="230"
    location="bottom end"
    offset="14px"
  >
    <template #activator="{ props }">
      <v-btn class="profileBtn custom-hover-primary" variant="text" v-bind="props" icon>
        <v-avatar size="35" color="surface-variant">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" height="35" alt="user" />
        </v-avatar>
      </v-btn>
    </template>
    <v-list lines="one" density="compact">
      <v-list-item
        prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
        title="John Doe"
        subtitle="Admin"
      />

      <v-divider class="my-2" />

      <v-list-item v-for="(item, i) in items.slice(0, 2)" :key="i" :value="item" link :to="item.to">
        <template #prepend>
          <v-icon size="large" :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>

      <v-divider class="my-2" />

      <v-list-item v-for="(item, i) in items.slice(2, 3)" :key="i" :value="item" link :to="item.to">
        <template #prepend>
          <v-icon size="large" :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
