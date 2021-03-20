<!-- Ce composant est le composant principale  -->

<template>
  <div id="app">
<!--  Affichage du header-->
    <Header></Header>
<!--  Le composant router-view contient le composant à afficher via les routes -->
    <router-view id="rView"/>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {Header},
  data() {
    return {
    }
  },
  computed: {},
  methods:{}

}
</script>


<style scoped lang="scss">

#app {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}

#rView{
  height: 93%;
  width: 100%;
}
</style>