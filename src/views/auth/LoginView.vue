<script setup lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue'
</script>
<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <v-row class="vh-100 d-flex justify-center align-center">
      <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
        <v-card rounded="lg" elevation="10" class="px-sm-1 px-0 withbg mx-auto" max-width="500">
          <v-card-item class="pa-sm-8">
            <div class="d-flex justify-center py-4">Logo</div>
            <h5 class="text-h5 text-center mb-5">Welcome to Admin!</h5>
            <LoginForm />
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
