<template>
  <div class="tab-pane fade show filterContainer" :id="id" role="tabpanel" aria-labelledby="pills-home-tab">
    <div class="md-layout md-gutter" id="checkBoxContainer">
      <ul class="list-group list-group-horizontal" id="ulItems">
        <CheckBoxEntry v-for="i in options" :key="i" :name="i" @changed="onUpdate"></CheckBoxEntry>
      </ul>
    </div>
  </div>

</template>
<script>

import CheckBoxEntry from "@/components/recipe/filter/filterEntry/CheckBoxEntry";

export default {
  name: "OptionCheckBox",
  props: ["options", "bindSelected", "id"],
  data: function () {
    return {
      bindStore: []
    }
  },
  mounted() { // Permet de lié les boutons
    document.querySelectorAll(".toChange").forEach(element => {
      if (element.dataset.target !== undefined) {
        if (!(element.dataset.target.indexOf("#") >= 0)) {
          element.dataset.target = "#" + element.dataset.target
        }
      }
    })

    document.querySelectorAll(".toChange2").forEach(element => {
      if (element.dataset.target !== undefined) {
        if (!(element.dataset.parent.indexOf("#") >= 0)) {
          element.dataset.parent = "#" + element.dataset.parent
        }
      }
    })

  },
  methods: {
    onUpdate(payload) {
      if (payload.isChecked) {
        this.bindStore.push(payload.name);
      } else {
        this.bindStore = this.bindStore.filter(function (ele) {
          return ele !== payload.name;
        });
      }
      this.$store.commit('updateFilter',{name:this.bindSelected, value: this.bindStore})
      console.log("checked",this.$store.state.filters[this.bindSelected])
      //this.$store.state.filters.intolerances = this.selected;
    }
  },
  components: {CheckBoxEntry},
}
</script>

<style scoped lang="scss">

#ulItems{
  width: 100%;
}

.filterContainer{
  width: 100%;
  height: 20%;
  background-color: white;
}

#checkBoxContainer{
  background-color: white;
  border: 5px black solid;
  width: 99%;
  height: 100%;
  left: 2%;
  position: relative;
}

button {
  text-decoration: none;
}

ul {
  list-style: none;
  flex-wrap: wrap;
}

.noDecoration {
  text-decoration: none !important;
}

button {
  text-decoration: none !important;
  color: white;

}

#bt:hover {
  color: black !important;
  background-color: white;
  border: 2px black solid;
}

#headingOne {
  border: none;
}
</style>