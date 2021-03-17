<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item orange">Vegetarian : {{details.vegetarian}}</li>
    <li class="list-group-item white">Vegan : {{details.vegan}}</li>
    <li class="list-group-item orange">Gluten free : {{details.glutenFree}}</li>
    <li class="list-group-item white">Diary free : {{details.dairyFree}}</li>
  </ul>
</template>

<script>
export default {
  name: "DetailDiet",
  props: ["details"]
}
</script>

<style scoped lang="scss">
.orange{
  color: white;
  //background-color: #ff9800;
  background: linear-gradient(0.25turn,#ff9800, #f44336);
}

.white{
  color: #ff9800;
  //background-color: #ff9800;
}
</style>