#### 图片上传交互逻辑
1. 点击上传
2. 确认将要上传的图片
3. post ==> server
4. 响应图片url，并保存在本地
5. 预览图片
6. 保存图片

#### 图片上传需求分析
1. 上传按钮
  - 自动上传
  - 手动上传
2. 文件列表/图片列表
  - 显示进度(真进度-服务端响应进度，浏览器也支持/假进度)
  - 可删除
3. 拖曳上传
4. 图片预览
5. 用户头像上传

#### 图片上传接口设计

```vue
<f-upload
            name="avatar"
            action="http://localhost:3000/upload"
            :parse-response="parseResponse"
            :file-list.sync="fileList"
            :multiple="true"
            list-style="picture"
    >
   <f-button intent="primary">点击上传</f-button>
</f-upload>

parseResponse(res){
  const {key} = JSON.parse(res);
  return `http://localhost:3000/preview/${key}`
}
```
#### 难点分析
子组件emit一个事件，父组件能立马得到，这是同步的，父组件将最新数据重新渲染到子组件的过程，是异步的,父组件创建了一个异步的UI更新任务
