<template>
  <div>
    <div id="spinnerContainer" v-if="isLoading">
      <md-progress-spinner id="spinner" md-mode="indeterminate"></md-progress-spinner>
    </div>
    <div id="content">
      <Filters></Filters>
      <div id="searchNResult">
        <Search @submit="searchFromApi"></Search>
        <ResultContainer v-bind:result="res"></ResultContainer>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/search_internal_components/Search";
import Filters from "@/components/search_internal_components/Filters";
import ResultContainer from "@/components/search_internal_components/ResultContainer";
import {receipeQuery} from "@/model/Api"

export default {
  components: {ResultContainer, Search, Filters},
  data() {
    return {
      isLoading: false,
      res: {"results":[{"id":654959,"title":"Pasta With Tuna","image":"https://spoonacular.com/recipeImages/654959-312x231.jpg","imageType":"jpg"},{"id":511728,"title":"Pasta Margherita","image":"https://spoonacular.com/recipeImages/511728-312x231.jpg","imageType":"jpg"},{"id":654812,"title":"Pasta and Seafood","image":"https://spoonacular.com/recipeImages/654812-312x231.jpg","imageType":"jpg"},{"id":654857,"title":"Pasta On The Border","image":"https://spoonacular.com/recipeImages/654857-312x231.jpg","imageType":"jpg"},{"id":654883,"title":"Pasta Vegetable Soup","image":"https://spoonacular.com/recipeImages/654883-312x231.jpg","imageType":"jpg"},{"id":654928,"title":"Pasta With Italian Sausage","image":"https://spoonacular.com/recipeImages/654928-312x231.jpg","imageType":"jpg"},{"id":654926,"title":"Pasta With Gorgonzola Sauce","image":"https://spoonacular.com/recipeImages/654926-312x231.jpg","imageType":"jpg"},{"id":654944,"title":"Pasta With Salmon Cream Sauce","image":"https://spoonacular.com/recipeImages/654944-312x231.jpg","imageType":"jpg"},{"id":654905,"title":"Pasta With Chickpeas and Kale","image":"https://spoonacular.com/recipeImages/654905-312x231.jpg","imageType":"jpg"},{"id":654901,"title":"Pasta With Chicken and Broccoli","image":"https://spoonacular.com/recipeImages/654901-312x231.jpg","imageType":"jpg"}],"offset":0,"number":10,"totalResults":210},
      //res: {}
      numberAnswers: 0,
      currentPage: 1,
      currentSearch: "",

    }
  },
  computed: {},
  methods:
      {
        searchFromApi(input) {
          this.isLoading = true;
          /*let query = "query=" + input + "&number=10";
          if (this.$store.state.filters.intolerances.length > 0) {
            query += "&intolerances=" + this.$store.state.filters.intolerances.toString();

             v-if="!res instanceof Object"
          }*/


          receipeQuery(this.$store.state.api, input, this.$store.state.filters).then((res) => {
            console.log("res", res);
            this.res = res;
            this.isLoading = false
          })
              .catch((res) => {
                this.res = res
                this.currentSearch = res.currentSearch;
                this.numberAnswers = res.number;
                console.log(!(this.res instanceof Object), res)
                this.isLoading = false
              })
        },
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
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;

}

#searchNResult {
  width: 75%;
  height: 100%;
}


</style>
