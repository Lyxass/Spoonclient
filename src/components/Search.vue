<template>

  <div>
    <md-autocomplete v-model="input" :md-options="autoComplete" @md-changed="getAutoComplete">
      <label>Enter something here</label>
    </md-autocomplete>
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
        getAutoComplete(searchTerm) {
          this.res = new Promise(resolve => {
            window.setTimeout(() => {
              console.log(searchTerm)
              resolve()
            }, 1000)
          })
        }

      }
}
</script>

<style scoped lang="scss">
  div{
    width: 100%;
  }
</style>