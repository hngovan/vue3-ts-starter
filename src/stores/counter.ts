import { defineStore } from 'pinia'

type CountState = {
  count: number
  isLoading: boolean
}

export const useCounterStore = defineStore('counter', {
  state: (): CountState => ({
    count: 0,
    isLoading: false
  }),
  getters: {
    doubleCount: (state): number => {
      return state.count * 2
    }
  },
  actions: {
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    }
  }
})
