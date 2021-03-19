<template>
  <div id="filtersContainer">
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item filter first centerA" role="presentation">
        <a class="nav-link active navA"  id="intolerences" data-toggle="pill" href="#intolerencesFilter" role="tab" aria-controls="intolerencesFilter" aria-selected="true">Intolerences</a>
      </li>
      <li class="nav-item filter centerA navA" role="presentation">
        <a class="nav-link" id="cuisines" data-toggle="pill" href="#cuisinesFilter" role="tab" aria-controls="cuisinesFilter" aria-selected="false">Cuisines</a>
      </li>
      <li class="nav-item filter centerA navA" role="presentation">
        <a class="nav-link" id="excludeCuisines" data-toggle="pill" href="#excludeCuisinesFilter" role="tab" aria-controls="excludeCuisinesFilter" aria-selected="false">Excludes Cuisines</a>
      </li>
      <li class="nav-item filter last centerA navA" role="presentation">
        <a class="nav-link" id="diets" data-toggle="pill" href="#dietsFilter" role="tab" aria-controls="dietsFilter" aria-selected="false">Diets</a>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <OptionCheckBox :options="intolerances" :bind-selected="this.$store.state.filters.intolerances" id="intolerencesFilter"></OptionCheckBox>
      <OptionCheckBox :options="cuisines" :bind-selected="this.$store.state.filters.cuisines" id="cuisinesFilter"></OptionCheckBox>
      <OptionCheckBox :options="cuisines" :bind-selected="this.$store.state.filters.excludeCuisine" id="excludeCuisinesFilter"></OptionCheckBox>
      <OptionCheckBox :options="diets" :bind-selected="this.$store.state.filters.diet" id="dietsFilter"></OptionCheckBox>

    </div>
  </div>

</template>

<script>
import OptionCheckBox from "@/components/filter/OptionCheckBox";

export default {
  name: "Filters",
  components: {OptionCheckBox},
  data() {
    return {
      intolerances: ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite",
        "Tree Nut", "Wheat"],
      cuisines: ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European",
        "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American",
        "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"],
      diets: ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian",
        "Paleo", "Primal", "Whole30"]
    }
  }
}
</script>

<style scoped lang="scss">
#filtersContainer {
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-y: scroll;
  margin-left: 5%;
  margin-right: 5%;

}

#accord{
  display: flex !important;
  flex-direction: row !important;
}

#pills-tabContent > *{
  width: 25%;
}

.filter{
  width: 25%;
}

.nav-link{
  padding: 5%;
  width: 100%;
  text-align: center;
  text-decoration: none !important;
  color: black !important;
}

.active{
  background-color: black !important;
  color: white !important;
}

.last{
  border-right: 0;
}

.nav-item{
  border-right: 1px black solid;
  border-radius: 0 !important;
  height: 5%;
}

.centerA{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

}

</style>