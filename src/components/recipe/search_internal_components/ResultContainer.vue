<!--Conteneur des cartes de recette-->

<template>
  <div id="container">
    <div v-if="this.result.results !== undefined && this.result.results.length > 0" id="resultContainer" class="d-flex justify-content-center flex-wrap ">
      <ResultCard v-for="res in this.result.results" :key="res.id" v-bind:detail="res"></ResultCard>
    </div>
    <div  v-else-if="!(this.result instanceof Object)" class="error">
      <p> {{result}}</p>
    </div>
    <div v-else class="error">
      <p> Sorry, we did not find anything matching your criteria</p>
    </div>
    <PagesSelector v-if="currentSearch !== ''" :number-per-page="numberPerPage" :number-result="numberAnswers" @onPageMustChange="reEmit"></PagesSelector>
  </div>
</template>

<script>
import ResultCard from "@/components/recipe/search_internal_components/ResultCard";
import PagesSelector from "@/components/recipe/search_internal_components/PagesSelector";
export default {
  name: "ResultContainer",
  components: {PagesSelector, ResultCard},
  props: ["result", "numberAnswers", "numberPerPage", "currentSearch"],
  methods: {
    reEmit(nb){ // fait suivre l'évènement de changement de page
      this.$emit("onPageMustChange", nb);
    }
  }
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

</style>