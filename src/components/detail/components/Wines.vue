<template>
  <div v-if="this.wines !== undefined && this.wines.length > 0" id="resultContainer" class="d-flex justify-content-center flex-wrap ">
    <Wine v-for="wine in this.wines" :key="wine.id" v-bind:detail="wine"></Wine>
  </div>
  <div v-else class="error">
    <p v-if="noWineText !== undefined && noWineText.length > 0" v-html="noWineText" class="error2"></p>
    <p v-else class="error2"> There's no wine with this recipe </p>
  </div>
</template>

<script>
import Wine from "@/components/detail/components/Wine";

export default {
  components: {Wine},
  name: "Wines",
  props: ["wines", "noWineText"],
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
  font-size: 100%;
  margin-top: 10px;
  margin-left: 10px;
  color: black;
}

.error > .error2{
  color: black !important;
}

#resultContainer{
  height: 100%;
}

</style>