import type { Product } from '@/models/product.model'
import { generateFakeData } from '@/models/product.model'
import { defineStore } from 'pinia'

export type RootState = {
  product: Product[]
}

export const useProductStore = defineStore({
  id: 'productStore',
  state: (): RootState => ({
    product: []
  }),
  actions: {
    createNewItem(item: Product) {
      if (!item) return

      this.product.push(item)
    },
    updateItem(id: string, payload: Product) {
      if (!id || !payload) return

      const index = this.findIndexById(id)

      if (index !== -1) {
        this.product[index] = generateFakeData()
      }
    },
    deleteItem(id: string) {
      const index = this.findIndexById(id)

      if (index === -1) return

      this.product.splice(index, 1)
    },
    findIndexById(id: string) {
      return this.product.findIndex(item => item.id === id)
    },
  }
})
