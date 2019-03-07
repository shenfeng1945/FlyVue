<template>
  <div id="app" style="margin: 100px;">
    <div v-for="item in hasSelected" :key="item.name">{{item.name}}</div>
    <f-cascader :sources="sources" popover-height="200px" @update:selected="OutwardSelected($event)">
      <f-input></f-input>
    </f-cascader>
  </div>
</template>
<script>
import Input from './Input';
import Cascader from './cascader/cascader';
import db from './db';
function ajax(parent_id = 0){
    return db.filter(item => item.parent === parent_id);
}
export default {
    name: 'Demos',
    components:{
      'f-input': Input,
      'f-cascader': Cascader
    },
    data(){
        return {
            hasSelected: [],
            sources: ajax(0)
        }
    },
    methods: {
        OutwardSelected(selected){
            this.hasSelected = selected;
        }
    }
}
</script>
<style lang="scss" scoped>
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>


