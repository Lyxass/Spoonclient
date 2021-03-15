<template>
  <div id="nav">
    <h1 id="title"> SpoonClient </h1>
    <div id="routeurContainer">
      <router-link to="/">Home</router-link>
      <router-link to="/receipe">Receipe</router-link>
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
    height: 7%;
    background: linear-gradient(0.25turn,#ff9800, #f44336);
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  #title{
    color: white;
    margin-left: 1%;
  }

  #routeurContainer{
    margin-left: 2%;
    width: 6%;
    a{
      text-decoration: none;
      color: white;
      padding: 10%;
      border-radius: 2px;

    }
    a:hover{
      background-color: white;
      color: #ff9800;
    }
  }

</style>