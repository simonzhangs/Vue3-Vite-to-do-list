<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TopMenu from './components/TopMenu.vue'
import router from './router/index'
</script>

<template>
    <header>
      <top-menu></top-menu>
    </header>
    <router-view></router-view>
    <el-backtop></el-backtop>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header{
  margin-top: -50px;
}
</style>
