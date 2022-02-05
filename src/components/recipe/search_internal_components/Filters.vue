<!-- Composant qui gère les filtres de recherche-->

<template>
  <div id="filtersContainer">
    <!--   Collapse qui permet d'afficher les filtres-->
    <div>
      <ul class="nav" id="pills-tab" role="tablist">
        <li class="nav-item filter first centerA" role="presentation">
          <a class="nav-link navA" id="intolerences" data-toggle="pill" href="#intolerencesFilter" role="tab"
            aria-controls="intolerencesFilter" aria-selected="true">Intolerences</a>
        </li>
        <li class="nav-item filter centerA navA" role="presentation">
          <a class="nav-link" id="cuisines" data-toggle="pill" href="#cuisinesFilter" role="tab"
            aria-controls="cuisinesFilter" aria-selected="false">Cuisines</a>
        </li>
        <li class="nav-item filter centerA navA" role="presentation">
          <a class="nav-link" id="excludeCuisines" data-toggle="pill" href="#excludeCuisinesFilter" role="tab"
            aria-controls="excludeCuisinesFilter" aria-selected="false">Excludes Cuisines</a>
        </li>
        <li class="nav-item filter last centerA navA" role="presentation">
          <a class="nav-link" id="diets" data-toggle="pill" href="#dietsFilter" role="tab" aria-controls="dietsFilter"
            aria-selected="false">Diets</a>
        </li>
      </ul>
    </div>
    <!--    Contenu des collapses-->
    <div class="tab-content" id="pills-tabContent">
      <OptionCheckBox :options="intolerances" bind-selected="intolerances"
                      id="intolerencesFilter"></OptionCheckBox>
      <OptionCheckBox :options="cuisines" bind-selected="cuisines"
                      id="cuisinesFilter"></OptionCheckBox>
      <OptionCheckBox :options="cuisines" bind-selected="excludeCuisine"
                      id="excludeCuisinesFilter"></OptionCheckBox>
      <OptionCheckBox :options="diets" bind-selected="diet"
                      id="dietsFilter"></OptionCheckBox>
    </div>
  </div>

</template>

<script>
import OptionCheckBox from "@/components/recipe/filter/OptionCheckBox";

export default {
  name: "Filters",
  components: {OptionCheckBox},
  data() {
    return { // Labels des filtres
      intolerances: ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite",
        "Tree Nut", "Wheat"],
      cuisines: ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European",
        "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American",
        "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"],
      diets: ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian",
        "Paleo", "Primal", "Whole30"]
    }
  },
}
</script>

<style scoped lang="scss">
#filtersContainer {
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 5%;
  margin-right: 5%;
}

#accord {
  display: flex !important;
  flex-direction: row !important;
}


#pills-tabContent > * {
  width: 100%;

}

.filter {
  width: 25%;
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
  width: 100%;
  text-align: center;
  text-decoration: none !important;
  color: black !important;
}

</style>