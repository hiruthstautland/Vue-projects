<template>
  <div class="todo-item" v-bind:class="{'is-completed':todo.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete" />
      {{todo.title}}
      <button @click="$emit('del-todo', todo.id)" class="del">x</button>
      <!-- or we can use: v-on:click="$emit()" -->
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  padding: 10px;
  background: #f4f4f4;
  border-bottom: 1px #cccccc dotted;
}
.is-completed {
  text-decoration: line-through;
}
.del {
  padding: 05px 9px;
  float: right;
  background: #ff0000;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}
</style>