<template>
  <v-tooltip :text="$t('tooltip.notification')">
    <template #activator="{ props }">
      <v-btn icon variant="text" class="custom-hover-primary" v-bind="props">
        <v-badge dot color="primary" offset-x="-5" offset-y="-3">
          <v-icon size="large" color="" icon="mdi-bell-ring-outline"></v-icon>
        </v-badge>
      </v-btn>
    </template>
  </v-tooltip>
</template>
