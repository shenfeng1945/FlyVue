<template>
    <div class="docs-cascader">
        <f-init-docs></f-init-docs>
        <h4>基础用法</h4>
        <p>click 触发子菜单</p>
        <f-card :source="BasicCascader">
            <f-cascader :sources="sources"/>
        </f-card>

        <h4>可清空</h4>
        <p>通过 clearable 设置输入框可清空</p>
        <f-card :source="ClearableCascader">
            <f-cascader :sources="sources" clearable/>
        </f-card>

        <h4>动态加载</h4>
        <p>当选中某一级时，动态加载该级下的选项。</p>
        <f-card :source="loadingCascader">
            <f-cascader :sources.sync="sources1" :load-data="loadData" popoverHeight="100px" clearable/>
        </f-card>
    </div>
</template>

<script>
import InitDocs from "@/docs-components/initDocs";
import ExampleCard from "@/docs-components/exampleCard";
import Cascader from "@/components/cascader/cascader";
import {BasicCascader, ClearableCascader, loadingCascader} from "../static/cascader-demos";

const db = [
  {id: 1, name: '北京', parent: 0},
  {id: 2, name: '广东', parent: 0},
  {id: 3, name: '东城', parent: 1},
  {id: 4, name: '西城', parent: 1},
  {id: 5, name: '朝阳', parent: 1},
  {id: 6, name: '广州', parent: 2},
  {id: 7, name: '深圳', parent: 2},
  {id: 8, name: '佛山', parent: 2},
  {id: 9, name: '越秀', parent: 6},
  {id: 10, name: '天河', parent: 6},
  {id: 11, name: '黄埔', parent: 6},
  {id: 12, name: '罗湖', parent: 7},
  {id: 13, name: '南山', parent: 7},
  {id: 14, name: '福田', parent: 7},
  {id: 15, name: '顺德', parent: 8},
  {id: 16, name: '三水', parent: 8},
]

function ajax(parent_id = 0) {
  return new Promise((resolve, reject) => {
    let data = db.filter(item => item.parent === parent_id);
    data.forEach(node => {
        node.isLeaf = db.filter(item => item.parent === node.id).length <= 0;
    });
    resolve(data);
  });
}
 export default {
    name: "CascaderDemos",
    components: {
        'f-init-docs': InitDocs,
        'f-card': ExampleCard,
        'f-cascader': Cascader
    },
    data(){
        return {
            BasicCascader,
            ClearableCascader,
            loadingCascader,
            sources: [
                {name: "广东省", children: [{ name: "广州市", children: [{ name: "天河区" }]},{name: "深圳市",children: [{name: "南山区" },{ name: "宝安区" },{ name: "罗湖区" }]}]},
                {name: "湖北省",children: [{name: "武汉市",children: [{ name: "武昌区" }, { name: "江岸区" }]},{name: "荆州市",children: [{ name: "石首市" }, { name: "监利县" }]}]}
                ],
            sources1: []
        }
    },
    created() {
      ajax(0).then(res => {
         this.sources1 = res;
      })
    },
    methods: {
      loadData(lastItem, callback){
        setTimeout(() => {
          ajax(lastItem.id).then(res => callback(res))
        }, 500)
      }
    }
  }
</script>

<style scoped lang="scss">

</style>