<template>
  <div>
    <h1>Sorry, we could not find the page you requested :( . </h1>
  </div>
</template>

<script>
export default {
  name: "Error"
}
</script>

<style scoped lang="scss">
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
  color: black;
}

h1{
  height: fit-content;
  width: fit-content;
  padding: 10px;
  border: 5px black solid;
}
</style>