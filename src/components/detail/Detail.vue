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
          <ul class="list-group list-group-flush" v-if="details.winePairing !== {} && details.winePairing !== undefined">
            <Wines :wines="details.winePairing.productMatches" :noWineText="details.winePairing.pairingText"></Wines>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {queryReceipeById} from "@/model/Api";

import DataBar from "@/components/detail/components/DataBar";
import DetailDiet from "@/components/detail/components/DetailDiet";
import Ingredients from "@/components/detail/components/Ingredients";
import Wines from "@/components/detail/components/Wines";

export default {
  name: "Detail",
  components: {Ingredients, DetailDiet, DataBar, Wines},
  props: ["id"],
  data() {
    return {
      details: {},
      isLoading: false
    }
  },
  beforeMount() {
    console.log("id", this.id)
    this.isLoading = true;
    queryReceipeById(this.$store.state.api, this.id).then(res => {
      this.details = res;
      this.isLoading = false
    });
    console.log("Details", this.details)
  }
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