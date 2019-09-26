<template>
  <div class="docs-upload">
    <f-init-docs></f-init-docs>
    <h4>点击上传</h4>
    <f-card :source="defaultUploadSource">
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
    </f-card>
    

    <h4>图片列表缩略图</h4>
    <f-card :source="pictureUploadSource">
      <p>只能上传jpg/png文件，且不超过200kb</p>
      <f-upload
            name="avatar"
            action="https://shenfeng1945.cn:3000/upload"
            :parse-response="parseResponse"
            :file-list.sync="fileList1"
            :multiple="true"
            @error="error"
            :sizeLimit="204800"
            list-style="picture">
         <f-button intent="primary">点击上传</f-button>
      </f-upload>
    </f-card>
  </div>
</template>

<script>
import InitDocs from "@/docs-components/initDocs";
import ExampleCard from "@/docs-components/exampleCard";
import Button from "@/components/button/button";
import Upload from "@/components/upload/upload";
import {defaultUploadSource, pictureUploadSource} from '../static/upload-demos';
export default {
  name: 'UploadDemos',
  components: {
    'f-init-docs': InitDocs,
    'f-card': ExampleCard,
    'f-button': Button,
    'f-upload': Upload
  },
  data(){
    return {
      defaultUploadSource,
      pictureUploadSource,
      fileList: [],
      fileList1: []
    }
  },
  methods: {
    parseResponse(res){
      const {key} = JSON.parse(res);
      return `https://shenfeng1945.cn:3000/preview/${key}`
    },
    error(e){
      alert(e)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


