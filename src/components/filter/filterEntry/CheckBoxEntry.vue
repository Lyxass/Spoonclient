<template>
  <li>
    <div id="item" @click="update">
      <input type="checkbox" >
      <p id="label">{{ name }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "CheckBoxEntry",
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

#item > p#label:hover{
  color: #E8710C !important;
}

#item{
  display: flex;
  flex-direction: row;
  align-items: center;
}
p{
  margin: 0 0 0 1%;
}
</style>