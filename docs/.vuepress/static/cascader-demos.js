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

/**
 * 动态加载
 */
 
export const loadingCascader = {
  desc: '通过<code>loadData</code>开启动态加载，接受两个参数，第一个参数是上一次点击的某一项列表<code>item</code>，通过<code>item</code>去动态加载对应数据，第二个参数是个回调函数，接受将要加载的数据列表作为参数。<code>:sources.sync</code>是一个语法糖，用于修改sources的数据源',
  code: `
<tempalte>
  <f-cascader :sources.sync="sources" :load-data="loadData" popoverHeight="100px" clearable/>
</tempalte>

<script>
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
  data(){
    return {
      sources: []
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
<\/script>
  `
}
