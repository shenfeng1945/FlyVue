---
title: Upload 上传
sidebarDepth: 2
---

### Upload 上传

通过点击或者拖拽上传文件

<ClientOnly>
  <upload-demos />
</ClientOnly>

#### Upload Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| name | 上传的文件字段名 | string | - | file |
| accept | 接受上传的文件类型 | string | - | image/* |
| action | 必选参数，上传的地址 | string | - | - |
| fileList | 已上传文件列表 | array | - | [] |
| method | 上传时的请求方法 | string | - | POST | 
| parseResponse | 自定义上传成功后的函数 | function | - | - |
| size-limit | 限制上传文件的大小(B) | number | - | 102400 |
| multiple | 是否支持上传多选 | boolean | - | false |
| list-style | 文件列表的类型 | string | default/picture | default |

#### Upload Events

| 事件名称 | 说明 | 回调参数 |
| -- | -- | -- | 
| update:fileList | 文件上传成功时的钩子 | (value: Array[]) | 
| error | 文件上传失败时的狗子 | (error: string) | 