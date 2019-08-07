#### 联级选择器

##### 静态加载

```vue
<f-cascader :sources="sources" :level="0" clearable/>

data(){
    return {
        sources: [
        {name: "广东省", children: [{ name: "广州市", children: [{ name: "天河区" }]},{name: "深圳市",children: [{name: "南山区" },{ name: "宝安区" },{ name: "罗湖区" }]}]},
        {name: "湖北省",children: [{name: "武汉市",children: [{ name: "武昌区" }, { name: "江岸区" }]},{name: "荆州市",children: [{ name: "石首市" }, { name: "监利县" }]}]}
      ]
    }
}
```

#### 动态加载

```vue
<f-cascader :sources.sync="sources" :load-data="loadData" clearable/>

function ajax(parent_id = 0) {
  return new Promise((resolve, reject) => {
    let data = db.filter(item => item.parent === parent_id);
    data.forEach(node => {
        node.isLeaf = db.filter(item => item.parent === node.id).length <= 0;
    });
    resolve(data);
  });
}
data(){
  return {
    sources: []
  }
},
created() {
    ajax(0).then(res => {
        this.sources = res;
    })
  },
  methods: {
    loadData(lastItem, callback){
      setTimeout(() => {
        ajax(lastItem.id).then(res => callback(res))
      }, 500)
    }
  }

```