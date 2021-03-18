<template>
  <div class="card mb-1 ml-1" style="width: 18rem;" id="wineContainer">
    <img :src="detail.imageUrl" class="card-img-top" id="img" alt="...">
    <div class="card-body" >
      <h3 class="card-title" @click="redirect">{{detail.title}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wine",
  props: ["detail"],
  methods:{
    redirect(){
      window.location.href = this.detail.link;
    }
  }
}
</script>

<style scoped lang="scss">
h3{
  background-color: #ff9800;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}

h3:hover{
  color: #ff9800;
  background-color: white;
  border: 1px solid #ff9800;
}

#img{
  height: 70%;
  width: auto;
}

#wineContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: scroll;
}

</style>