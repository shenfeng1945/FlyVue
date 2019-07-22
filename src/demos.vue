<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <f-water-fall :imageLists="data" @update:isBottom="updateData"></f-water-fall>
  </div>
</template>

<script>
import Input from "./input/Input";
import Button from "./button/button";
import Icon from "./icon/Icon";
import WaterFall from "./waterFall/waterFall";

// const mockData = [
  // "https://i.loli.net/2019/07/19/5d319e2ad21b537355.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e2b1e18e63878.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e2b33e6347832.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e2b341aa22555.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e2b35bb333052.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e2b35e2753904.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e2b3e04496848.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e2b3e29916110.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e2b3e47384367.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e921b55d13780.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e9230ad324157.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e92421c531403.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e9265df245685.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e927c07654313.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e928b64046764.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e929935076314.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e92a946062222.jpeg",
  // "https://i.loli.net/2019/07/19/5d319e92b562b12061.jpeg"
// ];

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
    this.data = Array.from({length: 10}, (v,i) => {
      const path = Math.ceil(Math.random() * 18);
      return {
        src:`http://localhost:8081/${path}.jpeg`,
        name: `图片${path}`
      }
    });
  },
  methods: {
    updateData(){
       setTimeout(() => {
         this.data = this.data.concat(Array.from({length: 10}, (v,i) => `http://localhost:8081/${ Math.ceil(Math.random() * 18)}.jpeg`))
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
</style>
