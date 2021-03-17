<template>
  <div class="card ">
    <div class="card-header orangeNoGradient noDecoration" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left toChange" id="bt" type="button" data-toggle="collapse"
                :data-target="rd" aria-expanded="true" :aria-controls="rd" >
          {{ name }}
        </button>
      </h2>
    </div>

    <div :id="rd" class="collapse show toChange2 " aria-labelledby="headingOne" :data-parent="accordionId">
      <div class="card-body">
        <label for="exampleFormControlSelect1" class="white">Select the cuisine you want</label>
        <select class="form-control orangeNoGradient" id="exampleFormControlSelect1"  @change="onChange">
          <option v-for="i in options" :key="i" class="orangeNoGradient">{{ i }}</option>
        </select>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  name: "OptionSelect",
  props: ["options", "bindSelected", "name", "accordionId", "rd"],
  data: function () {
    return {}
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
    onChange(event){
      this.$store.state.filters[this.bindSelected] = event.target.value
      console.log(this.$store.state.filters[this.bindSelected])
    }
  },
  components: {},
}
</script>

<style scoped lang="scss">

button {
  text-decoration: none;
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

ul {
  list-style: none;
}

button{
  text-decoration: none !important;
  color: white;
}

#bt:hover{
  color: #ff9800 !important;
  background-color: white;
}

</style>