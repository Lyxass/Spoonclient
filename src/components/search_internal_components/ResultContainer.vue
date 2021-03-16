<template>
  <div id="container">
    <div v-if="this.result.results !== undefined && this.result.results.length > 0" id="resultContainer" class="d-flex justify-content-center flex-wrap ">
      <ResultCard v-for="res in this.result.results" :key="res.id" v-bind:detail="res"></ResultCard>
    </div>
    <div  v-else-if="!(this.result instanceof Object)" class="error">
      <p> {{result}}</p>gghghgh
    </div>
    <div v-else class="error">
      <p> Sorry, we did not find anything matching your criteria</p>
    </div>
  </div>
</template>

<script>
import ResultCard from "@/components/search_internal_components/ResultCard";

export default {
  name: "ResultContainer",
  components: {ResultCard},
  props: ["result"],
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