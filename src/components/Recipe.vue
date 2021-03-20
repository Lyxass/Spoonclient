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
      //res: {},
      res: {"results":[{"id":638557,"title":"Chili Gobi","image":"https://spoonacular.com/recipeImages/638557-312x231.jpg","imageType":"jpg"},{"id":638550,"title":"Chili Chicken Salad","image":"https://spoonacular.com/recipeImages/638550-312x231.jpg","imageType":"jpg"},{"id":638586,"title":"Chili-Garlic Stir Fry","image":"https://spoonacular.com/recipeImages/638586-312x231.jpg","imageType":"jpg"},{"id":638566,"title":"Chili Lime Chicken Burgers","image":"https://spoonacular.com/recipeImages/638566-312x231.jpg","imageType":"jpg"},{"id":638552,"title":"Chili chops with cauliflower salad","image":"https://spoonacular.com/recipeImages/638552-312x231.jpg","imageType":"jpg"},{"id":1096221,"title":"Chili Verde Tomatillo Soup With Bone Broth","image":"https://spoonacular.com/recipeImages/1096221-312x231.jpg","imageType":"jpg"},{"id":638549,"title":"Chili and Garlic Spiced Beef and Broccoli Stir Fry","image":"https://spoonacular.com/recipeImages/638549-312x231.jpg","imageType":"jpg"},{"id":638568,"title":"Chili Pie with Green Chile and Cheddar Cornbread Crust","image":"https://spoonacular.com/recipeImages/638568-312x231.jpg","imageType":"jpg"},{"id":645443,"title":"Green Chili Sloppy Joes","image":"https://spoonacular.com/recipeImages/645443-312x231.jpg","imageType":"jpg"},{"id":715602,"title":"Green Chili Cheddar Dip (Guest Post)","image":"https://spoonacular.com/recipeImages/715602-312x231.png","imageType":"png"},{"id":661055,"title":"Spicy Chili w Boneless Beef Short Ribs","image":"https://spoonacular.com/recipeImages/661055-312x231.jpg","imageType":"jpg"},{"id":646567,"title":"Hearty Chili With Beans","image":"https://spoonacular.com/recipeImages/646567-312x231.jpg","imageType":"jpg"},{"id":637265,"title":"Cashew-Chili Portabello","image":"https://spoonacular.com/recipeImages/637265-312x231.jpg","imageType":"jpg"},{"id":660216,"title":"Skillet Chili Mac","image":"https://spoonacular.com/recipeImages/660216-312x231.jpg","imageType":"jpg"},{"id":638026,"title":"Chicken Chili With Black Eyed Peas","image":"https://spoonacular.com/recipeImages/638026-312x231.jpg","imageType":"jpg"},{"id":715424,"title":"The Best Chili","image":"https://spoonacular.com/recipeImages/715424-312x231.jpg","imageType":"jpg"},{"id":662376,"title":"Superbowl Chili","image":"https://spoonacular.com/recipeImages/662376-312x231.jpg","imageType":"jpg"},{"id":640859,"title":"Crock Pot Chili with Beans","image":"https://spoonacular.com/recipeImages/640859-312x231.jpg","imageType":"jpg"},{"id":1416203,"title":"Tater Tot Chili Cheese Casserole","image":"https://spoonacular.com/recipeImages/1416203-312x231.jpg","imageType":"jpg"},{"id":661223,"title":"Spicy Vegan Chili","image":"https://spoonacular.com/recipeImages/661223-312x231.jpg","imageType":"jpg"}],"offset":0,"number":20,"totalResults":83},
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
