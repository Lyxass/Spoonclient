<!--Affiche les données lié au régime compatible avec la recette-->

<template>
  <div class="container">
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
    vegetarian(){ // Les textes à afficher si les images ne fonctionnent pas
      if(this.details.vegetarian){
        return "Vegetarian"
      }
        return "Not Vegetarian"
    },
    vegan(){
      if(this.details.vegan){
        return "Vegan"
      }
        return "Not Vegan"
    },
    glutenFree(){
      if(this.details.glutenFree){
        return "Gluten Free"
      }
        return "Not Gluten Free"
    },
    dairyFree(){
      if(this.details.dairyFree){
        return "Dairy Free"
      }
        return "Not Dairy Free"
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