<template>
  <div id="app">
    <Header></Header>
    <router-view id="rView"/>
  </div>
</template>

<script>
import Header from "@/components/search_internal_components/Header";

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
}

#rView{
  height: 93%;
  width: 100%;
}
</style>