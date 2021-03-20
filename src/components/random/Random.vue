<!-- Ce composant va lancer la recherche d'une recette aléatoire puis redirigera vers la page de détail  -->

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
      this.$router.push("/detail/" + res.recipes[0].id) // on redirige vers la page des détails
    })
  }

}
</script>

<style scoped>

</style>