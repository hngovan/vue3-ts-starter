<script setup lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue'
import logo from '@/assets/images/logo/logo.svg'
</script>
<template>
  <div class="d-flex align-center justify-center">
    <v-row class="vh-100 d-flex justify-center align-center">
      <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
        <v-card rounded="lg" elevation="10" class="px-sm-1 px-0 mx-auto" max-width="500">
          <v-card-item class="pa-sm-8">
            <div class="d-flex justify-center align-center py-4 mx-auto" style="width: 50px">
              <v-img cover :src="logo" />
            </div>
            <h5 class="text-h5 text-center mb-5">{{ $t('pages.auth.title') }}</h5>
            <LoginForm />
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
