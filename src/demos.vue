<template>
  <div id="app" style="margin: 100px;">
    2
    <f-cascader :sources="sources" popover-height="200px">
      <f-input></f-input>
    </f-cascader>
    2
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


