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
          :label="$t('pages.auth.login.form.label_email')"
          type="email"
          placeholder="example@email.com"
          autocomplete="username"
        />
      </v-col>

      <!-- password -->
      <v-col cols="12">
        <v-text-field
          v-model="form.password"
          :label="$t('pages.auth.login.form.label_password')"
          placeholder=""
          autocomplete="current-password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />
        <!-- remember me checkbox -->
        <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
          <v-checkbox v-model="form.remember" :label="$t('pages.auth.login.form.label_remember')" />

          <RouterLink to="/" class="text-primary text-decoration-none font-weight-medium ms-2 mb-1">
            {{ $t('pages.auth.login.form.link_forgot_password') }}
          </RouterLink>
        </div>
      </v-col>

      <v-col cols="12" class="pt-0">
        <v-btn size="large" type="submit" block>{{
          $t('pages.auth.login.form.button_login')
        }}</v-btn>
      </v-col>
      <v-col cols="12" class="text-center text-base">
        {{ $t('pages.auth.login.form.label_create_account') }}
        <RouterLink
          to="/auth/register"
          class="text-primary text-decoration-none font-weight-medium ms-2"
        >
          {{ $t('pages.auth.login.form.link_create_account') }}
        </RouterLink>
      </v-col>
    </v-row>
  </v-form>
</template>
