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
export default {
    name: 'Demos',
    components:{
      'f-input': Input,
      'f-cascader': Cascader
    },
    data(){
        return {
            hasSelected: [],
            sources: [
            {name: '广东省',children: [
                {name: '广州市',children: [
                    {name: '天河区'},
                ]},
                {name: '深圳市',children: [
                    {name: '南山区'},
                    {name: '宝安区'},
                    {name: '罗湖区'}
                ]},
            ]},
            {name: '湖北省',children: [
                {name: '武汉市',children:[
                    {name: '武昌区'},
                    {name: '江岸区'},
                ]},
                {name: '荆州市',children:[
                    {name: '石首市'},
                    {name: '监利县'}
                ]},
            ]}
        ]
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


