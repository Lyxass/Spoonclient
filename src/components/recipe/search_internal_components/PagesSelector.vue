<!--Composant contenant les pages disponibles (bouton pour y accéder)
    La changement effectif de la page ce fait dans Recipe
-->

<template>
  <nav aria-label="..." id="navPage">
    <ul class="pagination" id="ulPage">
      <li class="page-item pageItemCustom" :class="{'disable' : prevBool}" @click="onPrev">
        <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      <Page v-for="i in this.numberOfPages" :number="i" :key="i" :selected="selected[i-1]" @click="onPageClick"></Page>
      <li class="page-item " @click="onNext" :class="{'disable' : nextBool}">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Page from "@/components/recipe/search_internal_components/Page";

export default {
  name: "PagesSelector",
  components: {Page},
  props: ["numberResult", "numberPerPage"],
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    prevBool() {
      return this.currentPage === 1;
    },
    nextBool() {
      return this.currentPage === this.numberOfPages;
    },

    numberOfPages() {
      return Math.ceil(this.numberResult / this.numberPerPage)
    },
    selected() {
      let selected = []
      for (let i = 0; i < this.numberOfPages; i++) {
        selected.push(i === this.currentPage - 1)
      }
      console.log("selected", selected)
      return selected;
    }
  },
  methods: {
    updateCurrentPage(nb) { //Met à jour la page courrante
      this.selected[this.currentPage] = false;
      this.currentPage = nb;
    },
    onPageClick(nb) { // Émets un évènement géré par le parent pour change la page
      this.updateCurrentPage(nb);
      this.$emit("onPageMustChange", nb)
    },
    onNext() { // Passe à la page suivante
      if (this.currentPage < this.numberOfPages) {
        this.updateCurrentPage(this.currentPage + 1);
        console.log("currentPage", this.currentPage)
        console.log("selected : ", this.selected)
        this.$emit("onPageMustChange", this.currentPage)
      }
    },
    onPrev() { // Passe à la page précedante
      if (this.currentPage > 1) {
        this.updateCurrentPage(this.currentPage - 1);
        console.log("currentPage", this.currentPage)
        console.log("selected : ", this.selected)
        this.$emit("onPageMustChange", this.currentPage)
      }
    }
  },

}
</script>

<style scoped lang="scss">

li{
  color: black !important;
  background-color: white !important;
  border: none;
}

a{
  color: black !important;
  background-color: white !important;
  border: none;
}

.li:hover{
  color: white !important;
  background-color: black !important;

  a{
    color: white !important;
    background-color: black !important;
  }
}


#navPage {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.pageItemCustom{
  color: black !important;
  text-decoration: none !important;

}


</style>