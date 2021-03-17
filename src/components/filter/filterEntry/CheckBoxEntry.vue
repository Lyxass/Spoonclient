<template>
  <li>
    <div id="item" @click="update">
      <div @click="update">
        <input type="checkbox" @change="update" v-model="isChecked" >
      </div>
      <p id="label" @click="update">{{ name }}</p>
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
      console.log("clicked",this.isChecked)
      this.isChecked = !this.isChecked;
      this.$emit("changed", {name: this.name, isChecked: this.isChecked})
    }
  }
}
</script>

<style scoped lang="scss">

p#label{
  color: #ff9800 ;
  margin: 0 0 0 10px;
  padding: 0;
}

#item{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1%;
  border-radius: 10px;
}

#item:hover{
  p{
    color: white !important;
  }
  background-color: #ff9800;
}

</style>