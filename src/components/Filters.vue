<template>
  <div id="filtersContainer">
    <Intolerances></Intolerances>
  </div>

</template>

<script>
import Intolerances from "@/components/filter/Intolerances";
export default {
  name: "Filters",
  components: {Intolerances}
}
</script>

<style scoped lang="scss">
#filtersContainer{
  width: 20%;
}
</style>