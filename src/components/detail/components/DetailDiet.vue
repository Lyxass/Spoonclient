<template>
  <div class="container">
    <!--    <li class="list-group-item ">Vegetarian : <img src=""></li>-->
    <!--    <li class="list-group-item ">Vegan : {{details.vegan}}</li>-->
    <!--    <li class="list-group-item ">Gluten free : {{details.glutenFree}}</li>-->
    <!--    <li class="list-group-item ">Diary free : {{details.dairyFree}}</li>-->
    <img :class="{no: !details.vegetarian}"
         src="@/assets/végé.png"
         :alt="vegetarian">
    <img :class="{no: !details.vegan}"
         src="@/assets/vegan.png"
         :alt="vegan">
    <img :class="{no: !details.glutenFree}"
         src="@/assets/gluten.png"
         :alt="glutenFree">
    <img :class="{no: !details.dairyFree}"
         src="@/assets/dairy.jpg"
         :alt="dairyFree">
  </div>


</template>

<script>
export default {
  name: "DetailDiet",
  props: ["details"],
  computed:{
    vegetarian(){
      if(this.details.vegetarian){
        return "Vegetarian"
      }
      else{
        return "Not Vegetarian"
      }
    },
    vegan(){
      if(this.details.vegan){
        return "Vegan"
      }
      else{
        return "Not Vegan"
      }
    },
    glutenFree(){
      if(this.details.glutenFree){
        return "Gluten Free"
      }
      else{
        return "Not Gluten Free"
      }
    },
    dairyFree(){
      if(this.details.dairyFree){
        return "Dairy Free"
      }
      else{
        return "Not Dairy Free"
      }
    }

  }
}
</script>

<style scoped lang="scss">

.no{
  filter: grayscale(100%)
}

.container {
  display: flex;
  justify-content: center;
  width: 80%;
}

img {
  width: 10%;
  height: auto;
  margin: 6%;
  color: green;
}


</style>