<template>
  <div id="app">
    <div id="nav">
      <!-- Landingpage /, should be a homepage -->
      <router-link to="/">Homepage</router-link>
      <router-link to="/todolist">TodoList</router-link>
      <router-link to="/calculator">Calculator</router-link>
    </div>
    <router-view />
  </div>
</template>

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
#nav {
  margin: 1rem;
}
#nav a {
  margin: 1em;
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
