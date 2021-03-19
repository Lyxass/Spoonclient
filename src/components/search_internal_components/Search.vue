<template>

  <div id="searchContainer">
    <md-autocomplete id="searchBar" v-model="input" :md-options="autoComplete" @md-changed="getAutoComplete" @md-selected="onSelect">
      <label>Enter something here</label>
    </md-autocomplete>
    <md-button class="md-primary" id="search" @click="onSelect"> Search</md-button>
  </div>

</template>

<script>
import {recipeAutoComplete} from "@/model/Api";

export default {
  name: "Search",
  data: function () {
    return {
      input: "",
      autoComplete: []
    }
  },
  methods:
      {
        getAutoComplete() {
          console.log("new input",this.input)
          recipeAutoComplete(this.input,this.$store.state.api).then(res=>{
              if(res !== [] && res.length > 0){
                this.autoComplete = res.map(el =>{
                  return el.title;
                })
              }
              else{
                this.autoComplete = []
              }
          }) }
        ,
        onSelect(){
          this.$emit("submit",this.input)
        }
      }
}
</script>

<style scoped lang="scss">

  #searchContainer{
    padding-right: 5%;
    padding-left: 5%;
  }

  div{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
  }

  #search{
    color: black;
    border: 0;
    border-radius: 10%;
  }

  #search:hover{
    color: white;
    background-color: black;
  }

  #searchBar{
    color: white;
  }

  #searchContainer{

  }
</style>