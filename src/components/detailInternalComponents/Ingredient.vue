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
    image(){
      return "https://spoonacular.com/cdn/ingredients_250x250/" + this.detail.image
    },
    name(){
      return this.detail.name[0].toUpperCase() + this.detail.name.substring(1)
    }
  }
}
</script>

<style scoped>
  h3{
    background-color: #ff9800;
    color: white;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
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