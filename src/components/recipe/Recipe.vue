<template>
  <div>
    <div id="spinnerContainer" v-if="isLoading">
      <md-progress-spinner id="spinner" md-mode="indeterminate"></md-progress-spinner>
    </div>
    <Search @submit="searchFromApi"></Search>
    <Filters></Filters>
    <div id="content">
        <ResultContainer v-bind:result="res" :number-answers="numberAnswers" :number-per-page="resultPerPage"
                         :current-search="currentSearch" @onPageMustChange="loadPage"></ResultContainer>
    </div>
  </div>
</template>

<script>
import Search from "@/components/search_internal_components/Search";
import Filters from "@/components/search_internal_components/Filters";
import ResultContainer from "@/components/search_internal_components/ResultContainer";
import {receipeQuery, loadReceipePage} from "@/model/Api"

export default {
  components: {ResultContainer, Search, Filters},
  data() {
    return {
      isLoading: false,
      res: {},
      numberAnswers: 0,
      resultPerPage: 20,
      currentSearch: "",

    }
  },
  computed: {},
  methods:
      {
        searchFromApi(input) {
          this.isLoading = true;
          receipeQuery(this.$store.state.api, input, this.$store.state.filters).then((res) => {
            console.log("res", res);
            this.res = res;
            this.isLoading = false
            this.currentSearch = res.currentSearch;
            this.numberAnswers = res.totalResults;
          })
              .catch((res) => {
                this.res = res
                this.isLoading = false
                this.currentSearch = "";

              })
        },
        loadPage(nb) {
          if (this.currentSearch !== "") {
            loadReceipePage(this.currentSearch, (nb - 1) * this.resultPerPage).then(res => {
              this.res = res;
              this.isLoading = false
              this.currentSearch = res.currentSearch;
              this.numberAnswers = res.totalResults;
            })
                .catch((res) => {
                  this.res = res
                  this.isLoading = false
                  this.currentSearch = "";

                })
          }
        }
      },

}
</script>

<style lang="scss">

#spinnerContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}


#spinner {
  height: 5%;
  width: 5%;
  top: 47%;
  left: 47%;
  margin: 24px;
}


#content {
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-y: scroll;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px ;
}

#result {
  width: 88%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 0 1%;
}


</style>
