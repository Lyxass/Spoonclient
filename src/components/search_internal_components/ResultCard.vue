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

}

#receipeTitle{
  color: black;
  background-color: white;
  border: 2px black solid;
  text-align: center;
}

#bt{
  color: black;
  background-color: white;
  border: 2px black solid;
  text-align: center;
  padding: 1% 0;
}


#bt:hover{
  color: #ff9800 !important;
  background-color: white !important;
}


</style>