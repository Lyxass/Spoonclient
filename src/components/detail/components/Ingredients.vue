<template>
  <div id="container">

    <div v-if="this.ingredients !== undefined && this.ingredients.length > 0" id="resultContainer" class="d-flex justify-content-center flex-wrap ">
      <Ingredient v-for="ingredient in this.ingredients" :key="ingredient.id" v-bind:detail="ingredient"></Ingredient>
    </div>
    <div v-else class="error">
      <p> No ingredients (only air)</p>
    </div>
  </div>
</template>

<script>
import Ingredient from "@/components/detail/components/Ingredient";
export default {
  name: "Ingredients",
  components: {Ingredient},
  props: ["ingredients"],
}
</script>

<style scoped lang="scss">
#container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.error{
  display: flex;
  justify-content: center;
  font-size: 200%;
}

#resultContainer{
  height: 100%;
}
</style>