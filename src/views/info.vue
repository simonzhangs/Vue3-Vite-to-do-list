<template>
  <div id="container">
      <el-timeline>
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :hollow="activity.hollow"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>
  </div>
</template>

<script lang="ts" setup>
import { MoreFilled } from '@element-plus/icons-vue'

const activities = [
  {
    content: '完成项目框架搭建，菜单栏设计以及菜单栏页面路由',
    timestamp: '2022-02-12',
    size: 'normal',
    type: 'success',
  },
  {
    content: 'ToDo List 基础功能实现',
    timestamp: '2022-02-14',
    color: '#0bbd87',
  },
  {
    content: 'Custom size',
    timestamp: '2018-04-03 20:46',
    size: 'large',
  },
  {
    content: 'Custom hollow',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: 'Default node',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    icon: MoreFilled,
  },
]
</script>

<style scoped>
    #container{
        width: 500px;
        margin: 20px auto;
    }
</style>
