/**
 * 点击上传
 */
export const defaultUploadSource = {
  desc: '通过 slot 可以传入自定义的上传按钮类型和文字提示。通过设置 <code>sizeLimit</code>来限制上传文件的大小(B), 设置 <code>listStyle</code>设置图片的展示方式,默认以缩略图展示',
  code: `
<template>
  <p>只能上传jpg/png文件，且不超过100kb</p>
  <f-upload
      name="avatar"
      action="https://shenfeng1945.cn:3000/upload"
      :parse-response="parseResponse"
      :file-list.sync="fileList"
      :multiple="true"
      @error="error"
      :sizeLimit="102400"
      list-style="default">
        <f-button intent="primary">点击上传</f-button>
  </f-upload>
</template>
  
<script>
  export default {
    data(){
      return {
        fileList: []
      }
    },
    methods: {
      parseResponse(res){
        const {key} = JSON.parse(res);
        return 'https://shenfeng1945.cn:3000/preview/' + key;
      },
      error(err){
        alert(err)
      }
    }
  }
<\/script>
  `
}

/**
 * 图片列表缩略图
 */
export const pictureUploadSource = {
  desc: '',
  code: `
 <template>
  <p>只能上传jpg/png文件，且不超过200kb</p>
  <f-upload
      name="avatar"
      action="https://shenfeng1945.cn:3000/upload"
      :parse-response="parseResponse"
      :file-list.sync="fileList"
      :multiple="true"
      @error="error"
      :sizeLimit="204800"
      list-style="picture">
        <f-button intent="primary">点击上传</f-button>
  </f-upload>
</template>
  
<script>
  export default {
    data(){
      return {
        fileList: []
      }
    },
    methods: {
      parseResponse(res){
        const {key} = JSON.parse(res);
        return 'https://shenfeng1945.cn:3000/preview/' + key;
      },
      error(err){
        alert(err)
      }
    }
  }
<\/script> 
  ` 
}