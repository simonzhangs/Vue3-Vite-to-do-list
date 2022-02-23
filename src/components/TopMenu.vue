<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#42b983"
    @select="handleSelect"
  >
    <el-menu-item index="1">
        <router-link to="/">首页 Home</router-link>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3">
        <router-link to="/refer">
            参考 Refer
        </router-link>
    </el-menu-item>
    <el-menu-item index="4">
        <router-link to="/info">
            历程 Info
        </router-link>
    </el-menu-item>
    <el-menu-item index="5">    
        <router-link to="about">
            关于 About
        </router-link>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

import {defineComponent} from 'vue'

export default defineComponent({
    name:'TheHeader'
})
</script>

<style scoped>
    a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
</style>
