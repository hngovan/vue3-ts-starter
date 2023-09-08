<template>
  <v-menu :close-on-content-click="false">
    <template #activator="{ props }">
      <v-btn class="profileBtn custom-hover-primary" variant="text" v-bind="props" icon>
        <v-avatar size="35">
          <img src="@/assets/images/users/avatar-1.jpg" height="35" alt="user" />
        </v-avatar>
      </v-btn>
    </template>
    <v-sheet rounded="md" width="200" elevation="10" class="mt-2">
      <v-list class="py-0" lines="one" density="compact">
        <v-list-item value="item1" active-color="primary">
          <template #prepend>
            <v-icon size="large" color="green-darken-2" icon="mdi-account"></v-icon>
          </template>
          <v-list-item-title class="pl-4 text-body-1">My Profile</v-list-item-title>
        </v-list-item>
        <v-list-item value="item2" active-color="primary">
          <template #prepend>
            <v-icon size="large" color="blue-darken-2" icon="mdi-email"></v-icon>
          </template>
          <v-list-item-title class="pl-4 text-body-1">My Account</v-list-item-title>
        </v-list-item>
        <v-list-item value="item3" active-color="primary">
          <template #prepend>
            <v-icon size="large" color="purple-darken-2" icon="mdi-format-list-checkbox"></v-icon>
          </template>
          <v-list-item-title class="pl-4 text-body-1">My Task</v-list-item-title>
        </v-list-item>
      </v-list>
      <div class="pt-4 pb-4 px-5 text-center">
        <v-btn to="/auth/login" color="primary" variant="outlined" block>Logout</v-btn>
      </div>
    </v-sheet>
  </v-menu>
</template>
