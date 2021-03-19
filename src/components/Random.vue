<template>
  <div id="spinnerContainer">
    <md-progress-spinner id="spinner" md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>

<script>
import {getRandomReceipe} from "@/model/Api";

export default {
  name: "Random",
  beforeMount() {
    getRandomReceipe(this.$store.state.api).then(res =>{
      this.$router.push("/detail/" + res.recipes[0].id)
    })
  }

}
</script>

<style scoped>

</style>