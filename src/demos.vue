<template>
  <div
    id="app"
    style="margin: 100px;"
  >
    <f-cascader
      :sources.sync="sources"
      popover-height="200px"
      :selected.sync="selected"
      :load-data="loadData"
    >
      <f-input :value="getValue"></f-input>
    </f-cascader>
  </div>
</template>
<script>
import Input from "./Input";
import Cascader from "./cascader/cascader";
import db from "./db";
function ajax(parent_id = 0) {
  return new Promise((resolve, reject) => {
    const data = db.filter(item => item.parent === parent_id);
    resolve(data);
  });
}
export default {
  name: "Demos",
  components: {
    "f-input": Input,
    "f-cascader": Cascader
  },
  data() {
    return {
      selected: [],
      sources: []
    };
  },
  created() {
    ajax(0).then(data => {
      this.sources = data;
    });
  },
  computed: {
    getValue() {
      if (this.selected.length) {
        return this.selected.map(item => item.name).join("/");
      } else {
        return "";
      }
    }
  },
  methods: {
    loadData(lastItem, callback) {
      setTimeout(() => {
        ajax(lastItem.id).then(result => {
          callback(result);
        });
      }, 100);
    },
    OutwardSelected() {
      ajax(this.selected[0].id).then(result => {
        const lastLevelSelected = this.sources.filter(
          item => item.id === this.selected[0].id
        )[0];
        this.$set(lastLevelSelected, "children", result);
      });
    },
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>


