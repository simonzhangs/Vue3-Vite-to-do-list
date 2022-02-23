<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TodoList from '../components/TodoList.vue'
import TodoListApi from '../components/TodoListApi.vue'
</script>

<template>
    <div>
      <img alt="ToDo logo" src="../assets/todo.jpg" />
      <todo-list-api/>
    </div>
</template>

<style scoped>
img{
  width: 100px;
  margin: 10px auto;
}
</style>