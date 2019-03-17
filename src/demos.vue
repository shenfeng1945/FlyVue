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
    let data = db.filter(item => item.parent === parent_id);
    data.forEach(node => {
      if (db.filter(item => item.parent === node.id).length > 0) {
        node.isLeaf = false;
      } else {
        node.isLeaf = true;
      }
    });
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
      }, 1000);
    },
    OutwardSelected() {
      ajax(this.selected[0].id).then(result => {
        const lastLevelSelected = this.sources.filter(
          item => item.id === this.selected[0].id
        )[0];
        this.$set(lastLevelSelected, "children", result);
      });
    }
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


