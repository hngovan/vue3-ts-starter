<script setup lang="ts">
import type { menu } from './sidebarItem'

export interface Props {
  item: menu
  size?: string
}

const props = withDefaults(defineProps<Props>(), {
  item: () => ({}),
  size: () => 'large'
})
</script>

<template>
  <!---Single Item-->
  <v-list-item
    :to="props.item.to"
    rounded
    class="mb-1"
    active-color="primary"
    :disabled="props.item.disabled"
    :target="props.item.type === 'external' ? '_blank' : ''"
  >
    <!---If icon-->
    <template #prepend>
      <v-icon :size="size" color="purple-darken-2" :icon="props.item.icon"></v-icon>
    </template>
    <v-list-item-title>{{ props.item.title }}</v-list-item-title>
    <!---If Caption-->
    <v-list-item-subtitle v-if="props.item.subCaption" class="text-caption mt-n1 hide-menu">
      {{ props.item.subCaption }}
    </v-list-item-subtitle>
    <!---If any chip or label-->
    <template v-if="props.item.chip" #append>
      <v-chip
        :color="props.item.chipColor"
        class="sidebarchip hide-menu"
        :size="'small'"
        :variant="props.item.chipVariant"
        :prepend-icon="props.item.chipIcon"
      >
        {{ props.item.chip }}
      </v-chip>
    </template>
  </v-list-item>
</template>
