<template>
  <div id="app">
    <f-slides width="400" height="300" :selected.sync="selected" :reverse="false">
      <f-slides-item name="1">
        <div class="box box1">1</div>
      </f-slides-item>
      <f-slides-item name="2">
        <div class="box box2">2</div>
      </f-slides-item>
      <f-slides-item name="3">
        <div class="box box3">3</div>
      </f-slides-item>
    </f-slides>
  </div>
</template>
<script>
import Slides from "./carousel/slides";
import SlidesItem from "./carousel/slides-item";

export default {
  name: "Demos",
  components: {
    "f-slides": Slides,
    "f-slides-item": SlidesItem
  },
  data(){
    return {
      selected: '1' 
    }
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box{
  width: 100%;
  height: 350px;
  border: 1px solid red;
}
.box1{
  background: red;
}
.box2{
  background: gray;
}
.box3{
  background: green;
}
</style>


