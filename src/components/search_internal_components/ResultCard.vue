<template>
  <div class="card mb-1 ml-1" style="width: 18rem;" id="cardContainer" >
    <img :src="detail.image" class="card-img-top" alt="No Image">
    <div class="card-body">
      <h5 class="card-title" id="receipeTitle">{{detail.title}}</h5>
      <a href="#" class="btn btn-primary" @click="onClick" id="bt">See more detail</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultCard",
  props: ["detail"],
  methods: {
    onClick(){
      this.$router.push("/detail/" + this.detail.id);
    }
  }
}
</script>

<style scoped lang="scss">

#cardContainer{
  background: linear-gradient(0.25turn, #ff9800, #f44336);
}

#receipeTitle{
  color: white;
}

#bt{
  color: white !important;
  background-color: rgba(0,0,0,0);
  border: 0;
}


#bt:hover{
  color: #ff9800 !important;
  background-color: white !important;
}


</style>