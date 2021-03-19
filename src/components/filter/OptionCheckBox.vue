<template>
  <div class="tab-pane fade show active" id="" role="tabpanel" aria-labelledby="pills-home-tab">
    <ul v-for="i in options" :key="i">
      <CheckBoxEntry :name="i" @changed="onUpdate"></CheckBoxEntry>
    </ul>
  </div>

</template>

<script>

import CheckBoxEntry from "@/components/filter/filterEntry/CheckBoxEntry";

export default {
  name: "OptionCheckBox",
  props: ["options", "bindSelected", "id"],
  data: function () {
    return {
      bindStore: this.bindSelected
    }
  },
  mounted() {
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
      //this.$store.state.filters.intolerances = this.selected;
    }
  },
  components: {CheckBoxEntry},
}
</script>

<style scoped lang="scss">

button {
  text-decoration: none;
}

ul {
  list-style: none;
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

.noDecoration {
  text-decoration: none !important;
}

button {
  text-decoration: none !important;
  color: white;

}

#bt:hover {
  color: #ff9800 !important;
  background-color: white;
}

#headingOne {
  border: none;
}
</style>