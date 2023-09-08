<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import sidebarItems from './sidebar/sidebarItem'
import NavGroup from './sidebar/NavGroup/NavGroup.vue'
import NavItem from './sidebar/NavItem.vue'

// dropdown imports
import NotificationDD from './header/NotificationDD.vue'
import ProfileDD from './header/ProfileDD.vue'
const sidebarMenu = shallowRef(sidebarItems)
const sDrawer = ref(true)
</script>

<template>
  <!------Sidebar-------->
  <v-navigation-drawer v-model="sDrawer" left elevation="0" class="leftSidebar">
    <!---Logo part -->
    <div class="pa-5">
      <!-- <Logo /> -->
      Logo
    </div>
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <div>
      <!-- <perfect-scrollbar class="scrollnavbar"> -->
        <v-list class="pa-6">
          <!---Menu Loop -->
          <template v-for="(item, i) in sidebarMenu">
            <!---Item Sub Header -->
            <NavGroup v-if="item.header" :key="item.title" :item="item" />

            <!---Single Item-->
            <NavItem v-else :key="i" :item="item" class="leftPadding" />
            <!---End Single Item-->
          </template>
        </v-list>
      <!-- </perfect-scrollbar> -->
    </div>
  </v-navigation-drawer>
  <!------Header-------->
  <v-app-bar elevation="0" height="70">
    <div class="d-flex align-center justify-space-between w-100">
      <div>
        <v-btn
          class="hidden-lg-and-up ms-md-3 ms-sm-5 ms-3 text-muted"
          icon
          variant="flat"
          size="small"
          @click="sDrawer = !sDrawer"
        >
          <v-icon size="large" color="green-darken-2" icon="mdi-menu"></v-icon>
        </v-btn>
        <!-- Notification -->
        <NotificationDD />
      </div>
      <div>
        <!-- Upgrade button -->
        <v-btn
          class="mr-2 bg-primary"
          href="https://adminmart.com/templates/vuejs/?product_sortby=free"
          target="_blank"
          >Download Free</v-btn
        >
        <!-- User Profile -->
        <ProfileDD />
      </div>
    </div>
  </v-app-bar>
</template>
