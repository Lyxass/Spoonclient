<template>
  <li class="list-group-item" id="itemLi" @click="update">
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
  color: black ;
  margin: 0 0 0 10px;
  padding: 0;
  background-color: white;
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
    color: black !important;
  }
  background-color: white;
  border: 2px black solid;
  border-radius: 0;
}

#itemLi{
  width: 10%;
}

</style>