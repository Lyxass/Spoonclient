<template>
  <div>
    <div id="spinnerContainer" v-if="isLoading">
      <md-progress-spinner id="spinner" class="md-accent" md-mode="indeterminate"></md-progress-spinner>
    </div>

    <div v-else id="container">
      <!--      <div  id="mainDetailContainer" v-bind:style="{ 'background-image': 'url(' + details.image + ')' }">-->
      <!--        <img :src="details.image" :alt="details.title" id="detailImage">&ndash;&gt;-->
      <!--      <div id="shortDetails" v-bind:style="{ 'background-image': 'url(' + details.image + ')' }">-->
      <!--        <h1 id="title">{{ details.title }}</h1>-->
      <!--        <p id="id">#{{ id }}</p>-->
      <!--        <div v-html="details.summary" id="summary"></div>-->
      <!--      </div>-->


      <md-card id="shortDetails">
        <md-card-media-cover md-text-scrim>
          <md-card-media md-ratio="16:9">
            <!--            <img src="https://miro.medium.com/max/11006/0*-8Xy9dTrLV26-Ugu" alt="Skyscraper">-->
            <img :src="details.image" :alt="details.title">

          </md-card-media>

          <md-card-area id="imageFooter">
            <div class="titleContainer">
            <h1 class="title">{{ details.title }}</h1>
            </div>
            <md-card-header>
              <span class="md-subhead subtitle" v-html="details.summary">I bet you can't read this</span>
            </md-card-header>
          </md-card-area>
        </md-card-media-cover>
      </md-card>

      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item filter first centerA" role="presentation">
          <a class="nav-link active navA" id="diet-tab" data-toggle="pill" href="#diet" role="tab"
             aria-controls="diet" aria-selected="true">Diets</a>
        </li>
        <li class="nav-item filter centerA navA" role="presentation">
          <a class="nav-link" id="others-tab" data-toggle="tab" href="#others" role="tab"
             aria-controls="others" aria-selected="false">Others</a>
        </li>
        <li class="nav-item filter centerA navA" role="presentation">
          <a class="nav-link" id="ingredients-tab" data-toggle="tab" href="#ingredients"
             role="tab" aria-controls="ingredients" aria-selected="false">Ingredients</a>
        </li>
        <li class="nav-item filter last centerA navA" role="presentation">
          <a class="nav-link" id="wine-tab" data-toggle="tab" href="#wine"
             role="tab" aria-controls="wine" aria-selected="false">Wine</a>
        </li>
      </ul>

      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="diet" role="tabpanel" aria-labelledby="home-tab">
          <DetailDiet :details="details"></DetailDiet>
        </div>
        <div class="tab-pane fade" id="others" role="tabpanel" aria-labelledby="others-tab">
          <ul class="list-group list-group-flush">
            <DataBar :percentage="details.healthScore" :invert="false" title="Health Score:" ></DataBar>
          </ul>
        </div>
        <div class="tab-pane fade" id="ingredients" role="tabpanel" aria-labelledby="ingredients-tab">
          <ul class="list-group list-group-flush">
            <Ingredients :ingredients="details.extendedIngredients"></Ingredients>
          </ul>
        </div>
        <div class="tab-pane fade" id="wine" role="tabpanel" aria-labelledby="wine-tab">
          <ul class="list-group list-group-flush">
            <Wines :wines="details.winePairing.productMatches" :noWineText="details.winePairing.pairingText"></Wines>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
//import {queryReceipeById} from "@/model/Api";

import DataBar from "@/components/detailInternalComponents/DataBar";
import DetailDiet from "@/components/detailInternalComponents/DetailDiet";
import Ingredients from "@/components/detailInternalComponents/Ingredients";
import Wines from "@/components/detailInternalComponents/Wines";

export default {
  name: "Detail",
  components: {Ingredients, DetailDiet, DataBar, Wines},
  props: ["id"],
  data() {
    return {
      //details: {},
      details: {"vegetarian":true,"vegan":false,"glutenFree":false,"dairyFree":true,"veryHealthy":false,"cheap":false,"veryPopular":false,"sustainable":false,"weightWatcherSmartPoints":7,"gaps":"no","lowFodmap":false,"aggregateLikes":2,"spoonacularScore":57.0,"healthScore":15.0,"creditsText":"Foodista.com – The Cooking Encyclopedia Everyone Can Edit","license":"CC BY 3.0","sourceName":"Foodista","pricePerServing":126.32,"extendedIngredients":[{"id":11135,"aisle":"Produce","image":"cauliflower.jpg","consistency":"solid","name":"cauliflower","nameClean":"cauliflower","original":"1 medium cauliflower","originalString":"1 medium cauliflower","originalName":"cauliflower","amount":1.0,"unit":"medium","meta":[],"metaInformation":[],"measures":{"us":{"amount":1.0,"unitShort":"medium","unitLong":"medium"},"metric":{"amount":1.0,"unitShort":"medium","unitLong":"medium"}}},{"id":2009,"aisle":"Spices and Seasonings","image":"chili-powder.jpg","consistency":"solid","name":"chili powder","nameClean":"chili powder","original":"1/2 teaspoon chili powder","originalString":"1/2 teaspoon chili powder","originalName":"chili powder","amount":0.5,"unit":"teaspoon","meta":[],"metaInformation":[],"measures":{"us":{"amount":0.5,"unitShort":"tsps","unitLong":"teaspoons"},"metric":{"amount":0.5,"unitShort":"tsps","unitLong":"teaspoons"}}},{"id":6972,"aisle":"Ethnic Foods","image":"tomato-sauce-or-pasta-sauce.jpg","consistency":"solid","name":"chili sauce","nameClean":"chili sauce","original":"1 teaspoon chili sauce","originalString":"1 teaspoon chili sauce","originalName":"chili sauce","amount":1.0,"unit":"teaspoon","meta":[],"metaInformation":[],"measures":{"us":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"},"metric":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"}}},{"id":20027,"aisle":"Baking","image":"white-powder.jpg","consistency":"solid","name":"corn starch","nameClean":"corn starch","original":"1 teaspoon corn starch","originalString":"1 teaspoon corn starch","originalName":"corn starch","amount":1.0,"unit":"teaspoon","meta":[],"metaInformation":[],"measures":{"us":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"},"metric":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"}}},{"id":93604,"aisle":"Ethnic Foods","image":"curry-leaves.jpg","consistency":"solid","name":"curry leaves","nameClean":"curry leaves","original":"curry leaves","originalString":"curry leaves","originalName":"curry","amount":1.0,"unit":"leaves","meta":[],"metaInformation":[],"measures":{"us":{"amount":1.0,"unitShort":"leaf","unitLong":"leave"},"metric":{"amount":1.0,"unitShort":"leaf","unitLong":"leave"}}},{"id":1123,"aisle":"Milk, Eggs, Other Dairy","image":"egg.png","consistency":"solid","name":"egg","nameClean":"egg","original":"1 egg","originalString":"1 egg","originalName":"egg","amount":1.0,"unit":"","meta":[],"metaInformation":[],"measures":{"us":{"amount":1.0,"unitShort":"","unitLong":""},"metric":{"amount":1.0,"unitShort":"","unitLong":""}}},{"id":11216,"aisle":"Produce;Ethnic Foods;Spices and Seasonings","image":"ginger.png","consistency":"solid","name":"ginger","nameClean":"ginger","original":"1 tablespoon ginger, made into a paste","originalString":"1 tablespoon ginger, made into a paste","originalName":"ginger, made into a paste","amount":1.0,"unit":"tablespoon","meta":[],"metaInformation":[],"measures":{"us":{"amount":1.0,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1.0,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":31015,"aisle":"Produce","image":"chili-peppers-green.jpg","consistency":"solid","name":"green chilies","nameClean":"green chili pepper","original":"3 green chilies","originalString":"3 green chilies","originalName":"green chilies","amount":3.0,"unit":"","meta":["green"],"metaInformation":["green"],"measures":{"us":{"amount":3.0,"unitShort":"","unitLong":""},"metric":{"amount":3.0,"unitShort":"","unitLong":""}}},{"id":4582,"aisle":"Oil, Vinegar, Salad Dressing","image":"vegetable-oil.jpg","consistency":"liquid","name":"oil","nameClean":"cooking oil","original":"oil","originalString":"oil","originalName":"oil","amount":4.0,"unit":"servings","meta":[],"metaInformation":[],"measures":{"us":{"amount":4.0,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":4.0,"unitShort":"servings","unitLong":"servings"}}},{"id":11282,"aisle":"Produce","image":"brown-onion.png","consistency":"solid","name":"onions","nameClean":"onion","original":"2 onions, chopped","originalString":"2 onions, chopped","originalName":"onions, chopped","amount":2.0,"unit":"","meta":["chopped"],"metaInformation":["chopped"],"measures":{"us":{"amount":2.0,"unitShort":"","unitLong":""},"metric":{"amount":2.0,"unitShort":"","unitLong":""}}},{"id":20081,"aisle":"Baking","image":"flour.png","consistency":"solid","name":"plain flour","nameClean":"wheat flour","original":"1/2 cup plain flour","originalString":"1/2 cup plain flour","originalName":"plain flour","amount":0.5,"unit":"cup","meta":["plain"],"metaInformation":["plain"],"measures":{"us":{"amount":0.5,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":118.294,"unitShort":"ml","unitLong":"milliliters"}}},{"id":16124,"aisle":"Ethnic Foods;Condiments","image":"soy-sauce.jpg","consistency":"liquid","name":"soy sauce","nameClean":"soy sauce","original":"1 tablespoon soy sauce","originalString":"1 tablespoon soy sauce","originalName":"soy sauce","amount":1.0,"unit":"tablespoon","meta":[],"metaInformation":[],"measures":{"us":{"amount":1.0,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1.0,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":19335,"aisle":"Baking","image":"sugar-in-bowl.png","consistency":"solid","name":"sugar","nameClean":"sugar","original":"1 teaspoon sugar","originalString":"1 teaspoon sugar","originalName":"sugar","amount":1.0,"unit":"teaspoon","meta":[],"metaInformation":[],"measures":{"us":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"},"metric":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"}}},{"id":11549,"aisle":"Pasta and Rice","image":"tomato-sauce-or-pasta-sauce.jpg","consistency":"solid","name":"tomato sauce","nameClean":"tomato sauce","original":"1 tablespoon tomato sauce","originalString":"1 tablespoon tomato sauce","originalName":"tomato sauce","amount":1.0,"unit":"tablespoon","meta":[],"metaInformation":[],"measures":{"us":{"amount":1.0,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1.0,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":98845,"aisle":"Canned and Jarred","image":"stock-cube.jpg","consistency":"solid","name":"vegetable bouillon cube","nameClean":"vegetable bouillon cube","original":"1 vegetable bouillon cube","originalString":"1 vegetable bouillon cube","originalName":"vegetable bouillon cube","amount":1.0,"unit":"","meta":[],"metaInformation":[],"measures":{"us":{"amount":1.0,"unitShort":"","unitLong":""},"metric":{"amount":1.0,"unitShort":"","unitLong":""}}}],"id":638557,"title":"Chili Gobi","readyInMinutes":30,"servings":4,"sourceUrl":"http://www.foodista.com/recipe/X6YYBXTZ/chili-gobi","image":"https://spoonacular.com/recipeImages/638557-556x370.jpg","imageType":"jpg","summary":"The recipe Chili Gobi could satisfy your American craving in roughly <b>30 minutes</b>. For <b>65 cents per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. This recipe makes 4 servings with <b>251 calories</b>, <b>5g of protein</b>, and <b>16g of fat</b> each. This recipe from Foodista has 2 fans. It will be a hit at your <b>The Super Bowl</b> event. Not a lot of people really liked this side dish. It is a good option if you're following a <b>dairy free and vegetarian</b> diet. A mixture of onions, oil, egg, and a handful of other ingredients are all it takes to make this recipe so flavorful. All things considered, we decided this recipe <b>deserves a spoonacular score of 40%</b>. This score is solid. Try <a href=\"https://spoonacular.com/recipes/tandoori-gobi-or-gobi-tikka-how-to-make-tandoori-gobi-gobi-s-487270\">tandoori gobi or gobi tikka, how to make tandoori gobi | gobi s</a>, <a href=\"https://spoonacular.com/recipes/gobi-pakora-how-to-make-gobi-pakoras-or-cauliflower-fritters-488633\">gobi pakora , how to make gobi pakoras or cauliflower fritters</a>, and <a href=\"https://spoonacular.com/recipes/the-secret-ingredient-turmeric-gobi-gobi-111750\">The Secret Ingredient (Turmeric): Gobi Gobi</a> for similar recipes.","cuisines":["American"],"dishTypes":["side dish"],"diets":["dairy free","lacto ovo vegetarian"],"occasions":["super bowl"],"winePairing":{"pairedWines":["cava","grenache","shiraz"],"pairingText":"Chili works really well with Cava, Grenache, and Shiraz. These juicy reds don't have too much tannin (important for spicy foods), but a sparkling wine like cava can tame the heat even better. One wine you could try is Cava Mestres Reserva Brut 1312. It has 4.6 out of 5 stars and a bottle costs about 19 dollars.","productMatches":[{"id":479960,"title":"Cava Mestres Reserva Brut 1312","description":"Pale Straw yellow in color with visible green highlights and fine, elegant bubbles. A clear reflection of the vintage: delicate finesse with intense aromas of white fruit, flowers and fresh cut herbs. On the palate it is fresh, revealing a great balance of sweetness and acidity. Pleasant and easy to drink.","price":"$18.99","imageUrl":"https://spoonacular.com/productImages/479960-312x231.jpg","averageRating":0.9199999999999999,"ratingCount":13.0,"score":0.8949999999999999,"link":"https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fcava-mestres-reserva-brut-1312%2F431138"}]},"instructions":"<ol><li>Make a batter with chili powder, beaten egg, flour, vegetable stock (or water) and salt. </li><li>Dip cauliflower pieces in the batter and fry in oil until light brown.</li><li>Heat oil in a pan and add chopped onions, ginger-garlic paste, green chillies, and curry leaves, and saute well.</li><li>Add vegetable stock, soy sauce, chili sauce, and tomato sauce and stir well.</li><li>Mix corn starch with water and add to pan. Add fried cauliflower pieces and salt and cook until dry. Stir in sugar. </li></ol>","analyzedInstructions":[{"name":"","steps":[{"number":1,"step":"Make a batter with chili powder, beaten egg, flour, vegetable stock (or water) and salt. Dip cauliflower pieces in the batter and fry in oil until light brown.","ingredients":[{"id":6615,"name":"vegetable stock","localizedName":"vegetable stock","image":"chicken-broth.png"},{"id":2009,"name":"chili powder","localizedName":"chili powder","image":"chili-powder.jpg"},{"id":11135,"name":"cauliflower","localizedName":"cauliflower","image":"cauliflower.jpg"},{"id":20081,"name":"all purpose flour","localizedName":"all purpose flour","image":"flour.png"},{"id":14412,"name":"water","localizedName":"water","image":"water.png"},{"id":2047,"name":"salt","localizedName":"salt","image":"salt.jpg"},{"id":0,"name":"dip","localizedName":"dip","image":""},{"id":1123,"name":"egg","localizedName":"egg","image":"egg.png"},{"id":4582,"name":"cooking oil","localizedName":"cooking oil","image":"vegetable-oil.jpg"}],"equipment":[]},{"number":2,"step":"Heat oil in a pan and add chopped onions, ginger-garlic paste, green chillies, and curry leaves, and saute well.","ingredients":[{"id":10093754,"name":"ginger garlic paste","localizedName":"ginger garlic paste","image":"ginger-garlic-paste.png"},{"id":31015,"name":"green chili pepper","localizedName":"green chili pepper","image":"chili-peppers-green.jpg"},{"id":93604,"name":"curry leaves","localizedName":"curry leaves","image":"curry-leaves.jpg"},{"id":11282,"name":"onion","localizedName":"onion","image":"brown-onion.png"},{"id":4582,"name":"cooking oil","localizedName":"cooking oil","image":"vegetable-oil.jpg"}],"equipment":[{"id":404645,"name":"frying pan","localizedName":"frying pan","image":"pan.png"}]},{"number":3,"step":"Add vegetable stock, soy sauce, chili sauce, and tomato sauce and stir well.","ingredients":[{"id":6615,"name":"vegetable stock","localizedName":"vegetable stock","image":"chicken-broth.png"},{"id":11549,"name":"tomato sauce","localizedName":"tomato sauce","image":"tomato-sauce-or-pasta-sauce.jpg"},{"id":6972,"name":"chili sauce","localizedName":"chili sauce","image":"tomato-sauce-or-pasta-sauce.jpg"},{"id":16124,"name":"soy sauce","localizedName":"soy sauce","image":"soy-sauce.jpg"}],"equipment":[]},{"number":4,"step":"Mix corn starch with water and add to pan.","ingredients":[{"id":20027,"name":"corn starch","localizedName":"corn starch","image":"white-powder.jpg"},{"id":14412,"name":"water","localizedName":"water","image":"water.png"}],"equipment":[{"id":404645,"name":"frying pan","localizedName":"frying pan","image":"pan.png"}]},{"number":5,"step":"Add fried cauliflower pieces and salt and cook until dry. Stir in sugar.","ingredients":[{"id":11135,"name":"cauliflower","localizedName":"cauliflower","image":"cauliflower.jpg"},{"id":19335,"name":"sugar","localizedName":"sugar","image":"sugar-in-bowl.png"},{"id":2047,"name":"salt","localizedName":"salt","image":"salt.jpg"}],"equipment":[]}]}],"originalId":null,"spoonacularSourceUrl":"https://spoonacular.com/chili-gobi-638557"},
      isLoading: false
    }
  },
  // beforeMount() {
  //   console.log("id", this.id)
  //   this.isLoading = true;
  //   queryReceipeById(this.$store.state.api, this.id).then(res => {
  //     this.details = res;
  //     this.isLoading = false
  //   });
  //   console.log("Details", this.details)
  // }
}
</script>

<style scoped lang="scss">

.titleContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.title {
  background-color: rgba(0, 0, 0, 0.3);
  border: 10px white solid;
  padding: 20px;
}

.subtitle{
  *{
    text-decoration: none !important;
    color: white !important;
  }
  padding: 20px;
  border: 4px white solid;

}

#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

#imageFooter{
  height: 100%;
  justify-content: space-between;
}

#shortDetails {
  width: 80%;
  height: auto;
}

.orangeNoGradient {
  color: white !important;
  background-color: #ff9800;
}

.orange {
  color: white;
  background: linear-gradient(0.25turn, #ff9800, #f44336);
}

.white {
  color: #ff9800;
}

.active {
  color: #ff9800 !important;
}

.noDecoration {
  text-decoration: none !important;
}


#id {
  color: #ff9800;
}

#summary {
  color: white;
  background-color: #ff9800;
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;

}

#imageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

#myTab {
  margin-top: 1%;
}


#pills-tabContent > * {
  width: 100%;

}

#pills-tab {
  margin-top: 50px;
  width: 90%;
}

.filter {
  width: 25%;
}

.nav-link {
  padding: 5%;
  width: 100%;
  text-align: center;
  text-decoration: none !important;
  color: black !important;
}

a.active {
  background-color: black !important;
  color: white !important;
}

.first {
  border-left: 1px black solid;
}

.last {
  border-right: 0;
}

.nav-item {
  border-right: 1px black solid;
  border-radius: 0 !important;
  height: 5%;

}

.centerA {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

.nav-link {
  padding: 5%;
  width: 100%;
  text-align: center;
  text-decoration: none !important;
  color: black !important;
}

#myTabContent {
  width: 90%;
}
</style>