<template>
  <div>
    <div id="spinnerContainer" v-if="isLoading">
      <md-progress-spinner id="spinner" class="md-accent" md-mode="indeterminate"></md-progress-spinner>
    </div>
    <div v-else>
      <div  id="mainDetailContainer">
        <div id="imageContainer">
          <img :src="details.image" :alt="details.title" id="detailImage">
        </div>
        <div id="shortDetails">
          <h1 id="title">{{ details.title }}</h1>
          <p id="id">#{{ id }}</p>
          <div v-html="details.summary" id="summary"></div>
        </div>
      </div>

      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item orangeNoGradient" role="presentation">
          <a class="nav-link active noDecoration orangeNoGradient" id="diet-tab" data-toggle="tab" href="#diet"
             role="tab"
             aria-controls="diet" aria-selected="true">Diets</a>
        </li>
        <li class="nav-item white" role="presentation">
          <a class="nav-link noDecoration orangeNoGradient" id="others-tab" data-toggle="tab" href="#others" role="tab"
             aria-controls="others" aria-selected="false">Others</a>
        </li>
        <li class="nav-item white" role="presentation">
          <a class="nav-link noDecoration orangeNoGradient" id="ingredients-tab" data-toggle="tab" href="#ingredients"
             role="tab" aria-controls="ingredients" aria-selected="false">Ingredients</a>
        </li>
      </ul>

      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="diet" role="tabpanel" aria-labelledby="home-tab">
          <DetailDiet :details="details"></DetailDiet>
        </div>
        <div class="tab-pane fade" id="others" role="tabpanel" aria-labelledby="others-tab">
          <ul class="list-group list-group-flush">
            <DataBar :percentage="details.healthScore" :invert="false" title="Health Score:" class="orange"></DataBar>
          </ul>
        </div>
        <div class="tab-pane fade" id="ingredients" role="tabpanel" aria-labelledby="ingredients-tab">
          <ul class="list-group list-group-flush">
            <Ingredients :ingredients="details.extendedIngredients"></Ingredients>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {queryReceipeById} from "@/model/Api";

import DataBar from "@/components/detailInternalComponents/DataBar";
import DetailDiet from "@/components/detailInternalComponents/DetailDiet";
import Ingredients from "@/components/detailInternalComponents/Ingredients";

export default {
  name: "Detail",
  components: {Ingredients, DetailDiet, DataBar},
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
#mainDetailContainer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  height: 40%;
}

#detailImage {
  width: auto;
  height: 100%;
}

#shortDetails {
  width: 65%;
  margin-right: 1%;
  margin-top: 10px;
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

#title {
  background-color: #ff9800;
  color: white;
  width: fit-content;
  border-radius: 10px;
  padding: 10px;
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



</style>