<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <f-cascader :sources="sources" :level="0" clearable/>
  </div>
</template>
<script>
import Input from "./input/Input";
import Button from "./button/button";
import Icon from "./icon/Icon";
import Cascader from "./cascader/cascader";
import db from "../tests/fixtures/db";

function ajax(parent_id = 0) {
  return new Promise((resolve, rejects) => {
    let provinceList = db.filter(item => item.parent === parent_id);
    provinceList.filter(node => {});
    resolve(provinceList);
  });
}

export default {
  name: "Demos",
  components: {
    "f-input": Input,
    "f-icon": Icon,
    "f-button": Button,
    "f-cascader": Cascader
  },
  data() {
    return {
      sources: [
        {
          name: "广东省",
          children: [
            { name: "广州市", children: [{ name: "天河区" }] },
            {
              name: "深圳市",
              children: [
                { name: "南山区" },
                { name: "宝安区" },
                { name: "罗湖区" }
              ]
            }
          ]
        },
        {
          name: "湖北省",
          children: [
            {
              name: "武汉市",
              children: [{ name: "武昌区" }, { name: "江岸区" }]
            },
            {
              name: "荆州市",
              children: [{ name: "石首市" }, { name: "监利县" }]
            }
          ]
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
