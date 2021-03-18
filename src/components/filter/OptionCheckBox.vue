<template>
    <div class="card ">
      <div class="card-header orangeNoGradient noDecoration" id="headingOne">
        <h2 class="mb-0">
          <button class="btn btn-link btn-block text-left toChange" type="button" data-toggle="collapse"
                  :data-target="rd" aria-expanded="true" :aria-controls="rd" id="bt">
            {{name}}
          </button>
        </h2>
      </div>

      <div :id="rd" class="collapse sho toChange2" aria-labelledby="headingOne" :data-parent="accordionId">
        <div class="card-body">
          <ul v-for="i in options" :key="i">
            <CheckBoxEntry :name="i" @changed="onUpdate"></CheckBoxEntry>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>

import CheckBoxEntry from "@/components/filter/filterEntry/CheckBoxEntry";

export default {
  name: "OptionCheckBox",
  props:["options", "bindSelected","name","accordionId","rd"],
  data: function () {
    return {
      bindStore: this.bindSelected
    }
  },
  mounted() {document.querySelectorAll(".toChange").forEach(element => {
    if(element.dataset.target !== undefined){
      if(!(element.dataset.target.indexOf("#") >= 0)){
        element.dataset.target = "#"+element.dataset.target
      }
    }
  })

    document.querySelectorAll(".toChange2").forEach(element => {
      if(element.dataset.target !== undefined){
      if(!(element.dataset.parent.indexOf("#") >= 0)){
        element.dataset.parent = "#"+element.dataset.parent
      }}
    })

  },
  methods:{
    onUpdate(payload){
      if(payload.isChecked){
        this.bindStore.push(payload.name);
      } else {
        this.bindStore = this.bindStore.filter(function(ele){
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

ul{
  list-style:none;
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

button{
  text-decoration: none !important;
  color: white;

}

#bt:hover{
  color: #ff9800 !important;
  background-color: white;
}

#headingOne{
  border: none;
}
</style>