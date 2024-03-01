import { v4 as uuidv4 } from 'uuid'
import { faker } from '@faker-js/faker'

export interface Product {
  id: string
  name: string
  description?: string
  quantity: number
  createdAt: Date
  deletedAt?: Date
}

export function generateFakeData(): Product {
  return {
    id: uuidv4(),
    quantity: faker.number.int(),
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    createdAt: new Date()
  }
}
