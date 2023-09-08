<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>

<template>
  <div>Current Count: {{ counter.count }}</div>
  <div>Double Count: {{ counter.doubleCount }}</div>
  <button @click="counter.increment()">Increment</button>
  <button @click="counter.randomizeCounter()">Randomize Counter</button>
  <button @click="counter.$reset()">Reset</button>
</template>

<style scoped></style>
