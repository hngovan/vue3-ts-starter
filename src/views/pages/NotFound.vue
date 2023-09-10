<template>
  <v-app>
    <div class="d-flex flex-column justify-center align-center text-center vh-100">
      <img src="@/assets/images/background/errorimg.svg" width="500" alt="404" />
      <h1 class="text-h1 pt-3">{{ $t('pages.not_found.title') }}</h1>
      <h4 class="text-h4 my-8">{{ $t('pages.not_found.message') }}</h4>
      <v-btn variant="flat" color="primary" class="mb-4" to="/">
        {{ $t('pages.not_found.button') }}
      </v-btn>
    </div>
  </v-app>
</template>
