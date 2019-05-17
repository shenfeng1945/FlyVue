<template>
  <div class="f-upload">
    <div class="f-upload-trigger" @click="onUploadTrigger">
      <slot></slot>
    </div>
    <div
      class="f-upload-files"
      ref="files"
      style="width:0;height: 0;overflow: hidden;"
    ></div>
    {{fileList}}
    <ol>
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.status === 'pending'">
           菊花
        </template>
        <template v-if="file.url">
          <img :src="file.url" width="100" height="100" alt="">
        </template>
        <span>{{file.name}}</span>
        <f-icon name="close" @click="onRemoveFile(file.name)"></f-icon>
      </li>
    </ol>
  </div>
</template>

<script>
import Icon from "../icon/Icon";
export default {
  name: "FlyUpload",
  props: {
    name: {
      type: String,
      required: true
    },
    accept: {
      type: String,
      default: "image/*"
    },
    action: {
      type: String,
      required: true
    },
    // 生成图片的Url
    fileList: {
      type: Array,
      default: () => []
    },
    method: {
      type: String,
      default: "POST"
    },
    parseResponse: {
      type: Function,
      required: true
    },
    removeFile: {
      type: Function,
    }
  },
  components: {
    'f-icon': Icon
  },
  methods: {
    onUploadTrigger() {
      let input = this.createInput();
      this.$refs.files.appendChild(input);
      input.addEventListener("change", () => this.uploadFile(input.files[0]));
      input.click();
      input.remove();
    },
    onRemoveFile(name){
      let findIndex = this.fileList.findIndex(item => item.name === name);
      let spliceList = [...this.fileList];
      spliceList.splice(findIndex, 1);
      this.$emit('update:fileList', spliceList);
    },
    uploadFile(pureFile) {
      let formData = new FormData();
      let {name,type,size} = pureFile;
      let newName = this.generateName(name);
      formData.append(this.name, pureFile);
      this.beforeUploadFile(pureFile, newName);
      this.$nextTick(() => {
        this.uploadError(newName)
      })
      return;
      this.doUploadFile(formData, (res) => {
        const imgUrl = this.parseResponse(res);
        const file = {name: newName,url: imgUrl, type, size,status: 'resolve'};
        this.afterUploadFile(file);
      },(error) => {
        this.uploadError(newName);
      });
    },
    uploadError(name){
       let newFileList = [...this.fileList].map(item => {
         if(item.name === name){
           item.status = 'reject';
         }
         return item;
       })
      this.$emit("update:fileList", newFileList);
    },
    beforeUploadFile(pureFile, newName){
      let {type,size} = pureFile;
      this.$emit("update:fileList", [...this.fileList, {name: newName,status: 'pending', type, size}]);
    },
    // 生成新的name
    generateName(name){
      while(this.fileList.filter(item => item.name === name).length > 0){
          let dotIndex = name.lastIndexOf('.');
          let nameWithoutExtension = name.substring(0, dotIndex);
          let extension = name.substring(dotIndex);
          name = this.getCopyName(nameWithoutExtension) + extension;
      }
      return name;
    },
    afterUploadFile(file){
       const { name, url } = file;
      const updatedList = [...this.fileList].map(item => {
         if(item.name === name){
            item.url = url;
            item.status = 'resolve';
         }
         return item;
      })
      this.$emit("update:fileList", updatedList);
    },
    getCopyName(name){
      let reg = /\(\d\)$/;
      let numberReg = /\d/;
      if(reg.test(name)){
        let brackets = name.match(reg)[0];
        let n = brackets.match(numberReg)[0];
        name = name.replace(reg,`(${parseInt(n) + 1})`);
      }else{
        name = name + '(1)';
      }
      return name;
    },
    doUploadFile(formData, success, error){
      let xhr = new XMLHttpRequest();
      xhr.open(this.method, this.action);
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status >=200 || xhr.status <400){
             success(xhr.response);
          }else if(xhr.status >= 400){
            error(xhr.response)
          }
        }
      }
      xhr.send(formData);
    },
    createInput() {
      let input = document.createElement("input");
      input.type = "file";
      input.setAttribute("name", "file");
      return input;
    }
  }
};
</script>

<style lang="scss" scoped></style>
