<template>
  <li class="page-item" :class="{'active' : selected}" @click="onCLick">
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

<style scoped>

</style>