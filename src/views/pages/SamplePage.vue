<script setup lang="ts">
import type { Product } from '@/models/product.model'
import { onMounted, ref } from 'vue'
import { generateFakeData } from '@/models/product.model'
import { useProductStore } from '@/stores/ProductStore'

const products = ref<Product[]>([])
const productStore = useProductStore()

onMounted(() => {
  products.value = productStore.product
})

const createItem = () => {
  productStore.createNewItem(generateFakeData())
}

const deleteItem = (id: string) => {
  productStore.deleteItem(id)
}

const updateItem = (id: string) => {
  productStore.updateItem(id, generateFakeData())
}
</script>
<template>
  <v-row>
    <v-col cols="12" md="12">
      <v-card elevation="10">
        <v-card-item class="pa-5">
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">{{ $t('pages.sample_page.title') }}</v-card-title>
          <v-btn variant="outlined" class="mt-4" @click="createItem"> New Item </v-btn>
          <v-table height="600px" fixed-header expanded>
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Name</th>
                <th class="text-left">Quantity</th>
                <th class="text-left">Description</th>
                <th class="text-left">CreatedAt</th>
                <th class="text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in products" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.createdAt }}</td>
                <td>
                  <div class="d-inline-flex align-center gap-3">
                    <v-btn variant="elevated" class="mt-4" @click="updateItem(item.id)"> Update </v-btn>
                    <v-btn variant="elevated" class="mt-4 bg-red" @click="deleteItem(item.id)"> Delete </v-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
