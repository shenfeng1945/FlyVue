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

```js
<f-upload accept="image/*" action="/api/upload" name="avatar" :fileList.sync="fileList">
  <button>上传</button>
</f-upload>
<button>保存</button>
```
