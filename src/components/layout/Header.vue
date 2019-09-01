<template>
  <header class="header">
    <h1>Todo List</h1>
    <img src="../../images/get-it-done.jpg" alt="Get it Done" align="center" />
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
<style lang="stylus" scoped>
.header {
  padding: 1em;
  background: #fff;
  color: green;
  text-align: center;
}

.header:hover {
  color: darkgreen;
}

img {
  margin: 0 auto;
  width: 6vw;
  height: auto;
  display: inline-block;
}
</style>