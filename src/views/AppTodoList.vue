<template>
  <div id="appTodo">
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Header from "./../components/layout/Header";
import Todos from "./../components/Todos";
import AddTodo from "./../components/AddTodo";

export default {
  name: "AppTodoList",
  components: {
    Header,
    AddTodo,
    Todos
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE"
      })
        .then(response => {
          // console.log(response);
          return response.json();
        })
        .then(() => (this.todos = this.todos.filter(todo => todo.id != id)))
        .catch(error => console.log(error));
    },
    //spread current todos in first parameters and add new todo in second parameters
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        title,
        completed
      })
        .then(response => response.json())
        .then(data => (this.todos = [...this.todos, data]))
        .catch(error => {
          console.log(`error: ${error} `);
          return error;
        });
    }
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=4", {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => (this.todos = data));
  }
};
</script>

<style scoped>
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
  padding: 1rem;
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
