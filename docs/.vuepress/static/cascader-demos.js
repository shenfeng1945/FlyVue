/**
 * 基础用法
 *  */
export const BasicCascader = {
    desc: '只需要为 Cascader 的 <code>sources</code>属性指定选项数组即可渲染出一个级联选择器',
    code: `
<tempalte>
  <f-cascader :sources="sources"/>
</tempalte>

<script>
  export default {
     data(){
        return {
           sources: [
               {name: "广东省", children: [{ name: "广州市", children: [{ name: "天河区" }]},{name: "深圳市",children: [{name: "南山区" },{ name: "宝安区" },{ name: "罗湖区" }]}]},
               {name: "湖北省",children: [{name: "武汉市",children: [{ name: "武昌区" }, { name: "江岸区" }]},{name: "荆州市",children: [{ name: "石首市" }, { name: "监利县" }]}]}
           ]
        }
     }
  }
<\/script>
    `
};

/**
 * 可清空
 * */
export const ClearableCascader = {
    desc: '',
    code: `
<tempalte>
  <f-cascader :sources="sources" clearable/>
</tempalte>

<script>
  export default {
     data(){
        return {
           sources: [
               {name: "广东省", children: [{ name: "广州市", children: [{ name: "天河区" }]},{name: "深圳市",children: [{name: "南山区" },{ name: "宝安区" },{ name: "罗湖区" }]}]},
               {name: "湖北省",children: [{name: "武汉市",children: [{ name: "武昌区" }, { name: "江岸区" }]},{name: "荆州市",children: [{ name: "石首市" }, { name: "监利县" }]}]}
           ]
        }
     }
  }
<\/script>
    `
}
