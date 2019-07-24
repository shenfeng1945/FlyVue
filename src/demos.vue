<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
      <f-water-fall :imageLists="data" @scrollReachBottom="updateData">
          <template slot-scope="item">
              <img :src="item.item.src" alt="">
              <div class="description">{{item.item.name}}</div>
          </template>
      </f-water-fall>
  </div>
</template>

<script>
import Input from "@/components/input/Input";
import Button from "@/components/button/button";
import Icon from "@/components/icon/Icon";
import WaterFall from "@/components/waterFall/waterFall";
export default {
  name: "Demos",
  components: {
    "f-input": Input,
    "f-icon": Icon,
    "f-button": Button,
    "f-water-fall": WaterFall
  },
  data() {
    return {
      data: []
    };
  },
  created() {
      this.data = Array.from({length: 10}, () => {
      const path = Math.ceil(Math.random() * 18);
      return {
          src: require(`@/static/images/${path}.jpeg`),
        name: `图片${path}`
      }
    });
  },
  methods: {
    updateData(){
       setTimeout(() => {
           this.data = this.data.concat(Array.from({length: 10}, () => {
               const path = Math.ceil(Math.random() * 18);
               return {
                   src: require(`@/static/images/${path}.jpeg`),
                   name: `图片${path}`
               }
           }))
       }, 500)
    }
  }
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.description {
    display: block;
    padding: 0 16px;
    margin: 10px 0;
    line-height: 1.35em;
    overflow: hidden;
    word-wrap: break-word;
}
</style>
