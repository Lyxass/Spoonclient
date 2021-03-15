<template>
  <div id="app">
    <Header></Header>
    <div id="content">
      <Filters></Filters>
      <div id="searchNResult">
        <Search></Search>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
export default {
  components: {Search, Header, Filters}
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  width: 100%;
}

#content{
  width: 100%;
  display: flex;
  flex-direction: row;

}

#searchNResult{
  width: 80%;
}


</style>
