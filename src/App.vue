<template>
  <div id="app">
    <Header />
    <AddTodo />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export default {
  name: "app",
  components: {
    Header,
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "First task",
          completed: false
        },
        {
          id: 2,
          title: "Second task",
          completed: false
        },
        {
          id: 3,
          title: "Third task",
          completed: false
        },
        {
          id: 4,
          title: "Fourth task",
          completed: false
        }
      ]
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  line-height: 1.4;
  color: #3d5e80;
}
.btn {
  padding: 7px 20px;
  display: inline-block;
  border: none;
  border-radius: 1px;
  background: #555;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
