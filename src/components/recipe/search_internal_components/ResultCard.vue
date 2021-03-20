<!-- Carte d'une recette -->

<template>
  <div class="card mb-1 ml-1" style="width: 18rem;" id="cardContainer">
    <img :src="detail.image" class="card-img-top" alt="No Image">
    <div class="card-body">
      <h5 class="card-title" id="receipeTitle">{{ detail.title }}</h5>
      <a href="#" class="btn btn-primary" @click="onClick" id="bt">See more detail</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultCard",
  props: ["detail"],
  methods: {
    onClick() { // Renvoie vers la page de détail d'une recette
      this.$router.push("/detail/" + this.detail.id);
    }
  }
}
</script>

<style scoped lang="scss">

#cardContainer {
  border: 2px black solid;
}

#receipeTitle {
  color: black;
  background-color: white;
  border: 2px black solid;
  text-align: center;
  padding: 10px;
}

#bt {
  color: black;
  background-color: white;
  border: 2px black solid;
  text-align: center;
  //padding: 1% 0;
  text-decoration: none;
  padding: 5px;
}


#bt:hover {
  color: white!important;
  background-color: black !important;
}


</style>