<template>
  <div>
    <form @submit="addTodo">
      <input v-model="title" type="text" name="title" placeholder="Add Todo.." />
      <!-- <input type="submit" value="Submit" class="btn" /> -->
      <button type="submit" value="Submit" class="btn" aria-placeholder="submit todo task">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title,
        completed: false
      };
      //Send addTodo() up to parent
      this.$emit("add-todo", newTodo);
      this.title = "";
    }
  }
};
</script>

<style scoped>
form {
  margin: 0 1rem;
  display: flex;
  justify-content: center;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}
</style>
