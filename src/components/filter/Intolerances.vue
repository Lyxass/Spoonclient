<template>
  <div class="accordion" id="filterCollapse">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h2 class="mb-0">
          <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                  data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Intolerances
          </button>
        </h2>
      </div>

      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#filterCollapse">
        <div class="card-body">
          <ul v-for="i in intolerences" :key="i">
            <FilterEntry :name="i" @changed="onUpdate"></FilterEntry>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterEntry from "@/components/filter/filterEntry/FilterEntry";

export default {
  name: "Intolerances",
  data: function () {
    return {
      intolerences: ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"],
      selected: []
    }
  },
  computed:{

  },
  methods:{
    onUpdate(payload){
      if(payload.isChecked){
        this.selected.push(payload.name);
      } else {
        this.selected = this.selected.filter(function(ele){
          return ele != payload.name;
        });
      }
      this.$store.state.filters.intolerances = this.selected;
      console.log("Selected",this.$store.state.filters.intolerances);
    }
  },
  components: {FilterEntry}
}
</script>

<style scoped lang="scss">

button {
  text-decoration: none;
}

ul{
  list-style:none;
}
</style>