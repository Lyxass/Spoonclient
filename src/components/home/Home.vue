<!-- Page principale du site. Inutile mais jolie ;) -->

<template>
  <div>
    <div id="home">
      <div id="titleContainer">
        <p id="title">SpoonClient</p>
        <p id="sub-title">The only website which will stop working after about 100 requests!</p>
      </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("../../assets/background.jpg");
  background-repeat: round;
}

#title {
  color:white;
  font-size: 100px;
  height: 0;
  width: 100%;
  text-align: center;
}
#sub-title{
  margin-top: 70px;
  color:white;
  width: 100%;
  text-align: center;
  height: 0;
  font-size: 30px;
}

#titleContainer{
  border: 10px white solid;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1000px;
  height: 250px;
}

</style>