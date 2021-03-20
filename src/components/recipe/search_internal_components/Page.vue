<template>
  <li class="page-item text-dark" :class="{'active' : selected}" @click="onCLick">
    <a class="page-link"  href="#">
      {{number}}
    </a>
  </li>

</template>

<script>
export default {
  name: "Page",
  props: ["number", "selected"],
  methods: {
    onCLick(){
      this.$emit("click",this.number)
    }
  }
}
</script>

<style scoped lang="scss">

li{
  color: black !important;
  background-color: white !important;
  border: none;
}

a{
  color: black !important;
  background-color: white !important;
  border: none;
}

.active{
  color: white !important;
  background-color: black !important;

  a{
    color: white !important;
    background-color: black !important;
  }
}

</style>