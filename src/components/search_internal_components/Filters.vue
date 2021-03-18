<template>
  <div id="filtersContainer">
    <div class="accordion" id="accord">
      <OptionCheckBox :options="intolerances" name="Intolerances"
                      :bind-selected="this.$store.state.filters.intolerances" randomId="accord"
                      rd="intolerances"></OptionCheckBox>
      <OptionCheckBox :options="cuisines" name="Cuisines" bind-selected="cuisines"
                    randomId="accord" rd="cuisines">
      </OptionCheckBox>
      <OptionCheckBox :options="cuisines" name="Exclude Cuisine(s)"
                      :bind-selected="this.$store.state.filters.excludeCuisine" randomId="accord"
                      rd="excludeCuisine"></OptionCheckBox>
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
      cuisines: ["None", "African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European",
        "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American",
        "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"]
    }
  }
}
</script>

<style scoped lang="scss">
#filtersContainer {
  width: 20%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-y: scroll;
}
</style>