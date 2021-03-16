<template>
  <li>
    <div id="item" @click="update">
      <input type="checkbox" >
      <p>{{ name }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "FilterEntry",
  props: ["name"],
  data() {
    return {
      isChecked: false
    }
  },
  methods: {
    update() {
      this.isChecked = !this.isChecked;
      this.$emit("changed", {name: this.name, isChecked: this.isChecked})
    }
  }
}
</script>

<style scoped lang="scss">


#item{
  display: flex;
  flex-direction: row;
  align-items: center;
}
p{
  margin: 0 0 0 1%;
}
</style>