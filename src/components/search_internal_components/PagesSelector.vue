<template>
  <nav aria-label="..." id="navPage">
    <ul class="pagination" id="ulPage">
      <li class="page-item " :class="{'disable' : prevBool}" @click="onPrev">
        <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      <Page v-for="i in this.numberOfPages" :number="i" :key="i" :selected="selected[i-1]" @click="onPageClick"></Page>
      <li class="page-item" @click="onNext" :class="{'disable' : nextBool}">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Page from "@/components/search_internal_components/Page";

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
    updateCurrentPage(nb) {
      this.selected[this.currentPage] = false;
      this.currentPage = nb;
    },
    onPageClick(nb) {
      this.updateCurrentPage(nb);
      console.log("selected : ", this.selected)
      this.$emit("onPageMustChange", nb)
    },
    onNext() {
      if (this.currentPage < this.numberOfPages) {
        this.updateCurrentPage(this.currentPage + 1);
        console.log("currentPage", this.currentPage)
        console.log("selected : ", this.selected)
        this.$emit("onPageMustChange", this.currentPage)
      }
    },
    onPrev() {
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

#navPage {
  display: flex;
  flex-direction: row;
  justify-content: center;
}


</style>