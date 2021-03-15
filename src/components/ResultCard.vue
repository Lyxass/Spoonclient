<template>
  <div class="card mb-1 ml-1" style="width: 18rem;" >
    <img :src="detail.image" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{detail.title}}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultCard",
  props: ["detail"],
}
</script>

<style scoped lang="scss">

</style>