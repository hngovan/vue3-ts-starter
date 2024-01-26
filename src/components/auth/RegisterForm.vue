<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirm_password: '',
  agree: false
})
</script>

<template>
  <v-form @submit.prevent="$router.push('/')">
    <v-row class="d-flex mb-3">
      <!-- first name -->
      <v-col cols="6">
        <v-text-field
          v-model="form.first_name"
          autofocus
          :label="$t('pages.auth.register.form.label_first_name')"
          type="email"
          placeholder=""
        />
      </v-col>

      <!-- last name -->
      <v-col cols="6">
        <v-text-field
          v-model="form.last_name"
          autofocus
          :label="$t('pages.auth.register.form.label_last_name')"
          type="email"
          placeholder="example@email.com"
        />
      </v-col>

      <!-- email -->
      <v-col cols="12">
        <v-text-field
          v-model="form.email"
          autofocus
          :label="$t('pages.auth.register.form.label_email')"
          type="email"
          placeholder="example@email.com"
          autocomplete="username"
        />
      </v-col>

      <!-- password -->
      <v-col cols="12">
        <v-text-field
          v-model="form.password"
          :label="$t('pages.auth.register.form.label_password')"
          placeholder=""
          autocomplete="current-password"
          type="text"
        />
      </v-col>

      <!-- confirm password -->
      <v-col cols="12">
        <v-text-field
          v-model="form.confirm_password"
          :label="$t('pages.auth.register.form.label_confirm_password')"
          placeholder=""
          autocomplete="current-password"
          type="text"
        />
        <!-- remember me checkbox -->
        <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
          <v-checkbox v-model="form.agree" :label="$t('pages.auth.register.form.i_agree')" />

          <RouterLink to="/" class="text-primary text-decoration-none font-weight-medium ms-2 mb-1">
            {{ $t('pages.auth.register.form.link_terms') }}
          </RouterLink>
        </div>
      </v-col>

      <v-col cols="12" class="">
        <v-btn size="large" type="submit" block>{{
          $t('pages.auth.register.form.button_register')
        }}</v-btn>
      </v-col>
      <v-col cols="12" class="text-left text-base">
        {{ $t('pages.auth.register.form.link_already_have_an_account') }}
        <RouterLink
          to="/auth/login"
          class="text-primary text-decoration-none font-weight-medium ms-2"
        >
          {{ $t('pages.auth.register.form.link_log_in') }}
        </RouterLink>
      </v-col>
    </v-row>
  </v-form>
</template>
