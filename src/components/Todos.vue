<!-- HTML -->
<template>
  <div class="todo">
    <div v-bind:key="todo.id" v-for="todo in todos">
      <!-- <h3>{{todo.title}}</h3> -->
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
    </div>
  </div>
</template>

<!-- Javascript -->
<script>
import TodoItem from "./TodoItem";
export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"]
};
</script>

<!-- Style -->
<style scoped>
</style>
