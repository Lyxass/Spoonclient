<!-- Composant représentant une entrée (checkbox+label) dans OptionCheckBox -->

<template>
  <li class="list-group-item" id="itemLi" @click="update">
    <div id="item" >
      <div>
        <input type="checkbox" v-model="isChecked" >
      </div>
      <p id="label" >{{ name }}</p>
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
    update() { // Met à jour la variable isCheck et émet un évènement au parent pour mettre à jour la selection dans le store
      this.isChecked = !this.isChecked;
      this.$emit("changed", {name: this.name, isChecked: this.isChecked})
    }
  },
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

#itemLi:hover{
  p{
    color: black !important;
  }
  background-color: white;
  border: 2px black solid;
  border-radius: 0;
  box-sizing: border-box;
}

#itemLi{
  width: 10%;
  border: none;
  margin: 10px;
  overflow: visible;
  cursor: pointer;
}

input{
  cursor: pointer;
}

</style>