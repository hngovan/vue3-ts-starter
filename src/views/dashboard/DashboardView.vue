<script setup lang="ts">
import type { Ref, WritableComputedRef } from 'vue'
import { computed, ref } from 'vue'

interface State {
  count: Ref<number>
  double: WritableComputedRef<number>
}

const state: State = {
  count: ref(0),
  double: computed({
    get: () => state.count.value * 2,
    set: val => {
      state.count.value = val
    }
  })
}

const increment = () => {
  state.count.value++
}
</script>

<template>
  <v-row>
    <v-col cols="12" md="12">
      <v-card elevation="10">
        <v-card-item class="pa-4">
          <div>This is Dashboard</div>
          <p>{{ $t('about.donate', { donate: $n(10000, 'currency') }) }}</p>
          <div>Count is: {{ state.count }}</div>
          <div>double is: {{ state.double }}</div>
          <v-btn variant="flat" color="primary" class="mb-4" @click="increment">Increment</v-btn>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
