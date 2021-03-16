<template>
  <div>
    <div id="home">
      <p id="title">SpoonClient</p>
      <p id="sub-title">The only site to stop working after about 100 requests!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped lang="scss">
#home {
  width: 100%;
  height: 100%;
  background: linear-gradient(0.25turn, #ff9800, #f44336);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //background-image: url("../../public/traiteur.jpg");
  //background-repeat: round;
}

#title {
  font-size: 140px;
  color:white;
  height: 10%;
}
#sub-title{
  font-size: 30px;
  color:white;
}
</style>