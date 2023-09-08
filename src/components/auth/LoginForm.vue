<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  email: '',
  password: '',
  remember: false
})

const isPasswordVisible = ref(false)
</script>

<template>
  <v-form @submit.prevent="$router.push('/')">
    <v-row class="d-flex mb-3">
      <!-- email -->
      <v-col cols="12">
        <v-text-field
          v-model="form.email"
          autofocus
          label="Email"
          type="email"
          placeholder="example@email.com"
          autocomplete="username"
        />
      </v-col>

      <!-- password -->
      <v-col cols="12">
        <v-text-field
          v-model="form.password"
          label="Password"
          placeholder=""
          autocomplete="current-password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />
        <!-- remember me checkbox -->
        <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
          <v-checkbox v-model="form.remember" label="Remember me" />

          <RouterLink to="/" class="text-primary text-decoration-none font-weight-medium ms-2 mb-1">
            Forgot Password ?
          </RouterLink>
        </div>
      </v-col>

      <v-col cols="12" class="pt-0">
        <v-btn size="large" type="submit" block>Login</v-btn>
      </v-col>
      <v-col cols="12" class="text-center text-base">
        Do not have an account ?
        <RouterLink
          to="/auth/register"
          class="text-primary text-decoration-none font-weight-medium ms-2"
        >
          Create an account
        </RouterLink>
      </v-col>
    </v-row>
  </v-form>
</template>
