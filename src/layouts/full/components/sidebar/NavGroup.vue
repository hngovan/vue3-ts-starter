<script setup lang="ts">
import type { menu } from './sidebarItem'

type propsType = {
  item: menu
}

const props = defineProps<propsType>()
</script>

<template>
  <v-list-subheader
    color="darkText"
    class="smallCap text-uppercase text-subtitle-2 mt-5 font-weight-bold"
  >
    {{ props.item.header }}
  </v-list-subheader>
</template>
