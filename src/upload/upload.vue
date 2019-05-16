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
  </div>
</template>

<script>
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
      type: String
    },
    method: {
      type: String,
      default: "POST"
    },
    parseResponse: {
      type: Function,
      required: true
    }
  },
  methods: {
    onUploadTrigger() {
      let input = this.createInput();
      this.$refs.files.appendChild(input);
      input.addEventListener("change", () => this.uploadFile(input.files[0]));
      input.click();
      input.remove();
    },
    uploadFile(file) {
      let formData = new FormData();
      formData.append(this.name, file);
      this.doUploadFile(formData, (res) => {
        const imgUrl = this.parseResponse(res);
        this.$emit("update:fileList", imgUrl);
      });
    },
    doUploadFile(formData, success){
      let xhr = new XMLHttpRequest();
      xhr.open(this.method, this.action);
      xhr.onload = () => success(xhr.response);
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
