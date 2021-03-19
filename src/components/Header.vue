<template>
  <div id="nav">
    <h1 id="title"> SpoonClient </h1>
    <div id="routeurContainer">
      <router-link to="/">Home</router-link>
      <router-link to="/recipe">Recipe</router-link>
      <router-link to="/random">Random</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}

</script>

<style scoped lang="scss">

  #nav {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: white;
  }

  #title{
    color: black;
    margin: 0 0 0 1%;
    border: 2px black solid;
    font-size: 100%;
    padding: 10px;

  }

  #routeurContainer{
    margin-left: 2%;
    width: 6%;
    a{
      text-decoration: none;
      color: black;
      padding: 10%;
      border-radius: 2px;

    }
    a:hover{
      background-color: black;
      color: white;
      border: 2px white;
    }
  }

</style>