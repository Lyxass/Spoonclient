<template>

  <div>
    <md-autocomplete v-model="input" :md-options="autoComplete" @md-changed="getAutoComplete" @md-selected="onSelect">
      <label>Enter something here</label>
    </md-autocomplete>
    <md-button class="md-primary" @click="onSelect"> Search</md-button>
  </div>

</template>

<script>
export default {
  name: "Search",
  data: function () {
    return {
      input: "",
      autoComplete: ["chips", "mayo"]
    }
  },
  methods:
      {
        getAutoComplete() {
          this.res = new Promise(resolve => {
            window.setTimeout(() => {
              resolve()
            }, 1000)
          })
        },
        onSelect(){
          this.$emit("submit",this.input)
        }
      }
}
</script>

<style scoped lang="scss">
  div{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>