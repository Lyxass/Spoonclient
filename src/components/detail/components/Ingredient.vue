<!-- Carte d'un ingredient -->

<template>
  <div class="card mb-1 ml-1" style="width: 18rem;" id="ingredientContainer">
    <img :src="image" class="card-img-top" id="img" alt="...">
    <div class="card-body">
      <h3 class="card-title">{{name}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ingredient",
  props: ["detail"],
  computed:{
    image(){ // On met en en forme l'URL via la base URL fournit dans la doc
      return "https://spoonacular.com/cdn/ingredients_250x250/" + this.detail.image
    },
    name(){ // Met en majuscule la première lettre du nom
      return this.detail.name[0].toUpperCase() + this.detail.name.substring(1)
    }
  }
}
</script>

<style scoped>
  h3{
    background-color: white;
    color: black;
    text-align: center;
    padding: 10px;
    border: 5px black solid;
  }

  #img{
    height: 70%;
    width: auto;
  }

  #ingredientContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow-y: scroll;
  }



</style>