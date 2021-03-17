<template>
  <li id="healthContainer" class="list-group-item">
    <p id="title">{{title}}</p>
    <div class="progressContainer" v-if="!invert">
      <div class="progress">
        <div class="progress-bar" role="progressbar" :class="{
        'bg-danger': this.percentage <= 25,
        'bg-warning': this.percentage <= 50 && this.percentage > 25,
        'bg-info': this.percentage <= 75 && this.percentage > 50,
        'bg-success': this.percentage <= 100 && this.percentage > 75
      }" :style="{width: this.percentage + '%'}"
             :aria-valuenow="this.percentage" aria-valuemin="0" aria-valuemax="100">{{ this.percentage + '%' }}
        </div>
      </div>
    </div>
    <div class="progressContainer" v-else>
      <div class="progress">
        <div class="progress-bar" role="progressbar" :class="{
        'bg-success': this.percentage <= 25,
        'bg-info': this.percentage <= 50 &&  this.percentage > 25,
        'bg-warning': this.percentage <= 75 && this.percentage > 50,
        'bg-danger': this.percentage <= 100 && this.percentage > 75
      }" :style="{width: this.percentage + '%'}"
             :aria-valuenow="this.percentage" aria-valuemin="0" aria-valuemax="100">{{ this.percentage + '%' }}
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "DataBar",
  props: ["percentage", "invert","title"],
  data() {
    return {
      colorClasses: {
        'bg-danger': this.percentage <= 25,
        'bg-warning': this.percentage <= 50,
        'bg-info': this.percentage <= 75,
        'bg-success': this.percentage <= 100
      },
      invertColorClasses: {
        'bg-success': this.percentage <= 25,
        'bg-info': this.percentage <= 50,
        'bg-warning': this.percentage <= 75,
        'bg-danger': this.percentage <= 100
      }
    }
  }
}
</script>

<style scoped lang="scss">
.progressContainer {
  width: 80%;
  display: flex;
  justify-content: left;
  flex-direction: row;
  align-items: center;
}

.progress {
  width: 100%;
}

#title {
  margin: 0 1% 0 0;

}


p {
  margin-top: unset !important;

}

.score {
  margin-left: 1%;
}

#healthContainer {
  display: flex;
  justify-content: left;
  flex-direction: row;
  align-items: center;
  //margin-top: 1%;
}
</style>s