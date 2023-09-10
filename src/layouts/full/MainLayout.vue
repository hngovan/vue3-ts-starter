<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import sidebarItems from './components/sidebar/sidebarItem'
import NavGroup from './components/sidebar/NavGroup.vue'
import NavItem from './components/sidebar/NavItem.vue'
import HeaderLayout from './components/header/HeaderLayout.vue'
import logo from '@/assets/images/logo/logo.svg'
// import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const sidebarMenu = shallowRef(sidebarItems)
const sDrawer = ref<boolean>(true)

const toggleDrawer = () => {
  sDrawer.value = !sDrawer.value
}

// const isVerticalNavScrolled = ref(false)

// const handleNavScroll = (evt: { target: { scrollTop: number } }) => {
//   isVerticalNavScrolled.value = evt.target.scrollTop > 0
// }
</script>

<template>
  <!------Sidebar-------->
  <v-navigation-drawer v-model="sDrawer" location="left" elevation="0" >
    <div class="pa-5">
      <!-- <Logo /> -->
      <RouterLink to="/"> <v-img width="100%" max-height="26" :src="logo" /></RouterLink>
    </div>
    <!---Navigation -->
    <div>
      <!-- <perfect-scrollbar
        class="scrollnavbar"
        :options="{ wheelPropagation: false }"
        @ps-scroll-y="handleNavScroll"
      > -->
        <v-list class="pa-3">
          <!---Menu Loop -->
          <template v-for="(item, i) in sidebarMenu">
            <!---Item Sub Header -->
            <NavGroup v-if="item.header" :key="item.title" :item="item" />

            <!---Single Item-->
            <NavItem v-else :key="i" :item="item" />
            <!---End Single Item-->
          </template>
        </v-list>
      <!-- </perfect-scrollbar> -->
    </div>
  </v-navigation-drawer>
  <!------Header-------->
  <HeaderLayout @toggle-drawer="toggleDrawer" />
</template>
