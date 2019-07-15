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
    <ol class="f-upload-fileList">
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.url">
          <img
            class="f-upload-img"
            :src="file.url"
            alt=""
          />
        </template>
        <template v-else>
          <div style="width:72px;height: 72px;border:1px solid red;">
            <f-icon
              class="f-upload-loading"
              v-if="file.status === 'pending'"
              name="loading"
            ></f-icon>
          </div>
        </template>
        <span class="f-upload-filename">{{ file.name }}</span>
        <f-icon class="f-upload-close" name="close" @click="onRemoveFile(file.name)"></f-icon>
      </li>
    </ol>
  </div>
</template>

<script>
import Icon from "../icon/Icon";
import Button from '../button/button';
export default {
  name: "FlyUpload",
  props: {
    name: { type: String, required: true },
    accept: { type: String, default: "image/*" },
    action: { type: String, required: true },
    // 生成图片的Url
    fileList: { type: Array, default: () => [] },
    method: { type: String, default: "POST" },
    parseResponse: { type: Function, required: true },
    removeFile: { type: Function },
    sizeLimit: { type: Number },
    multiple: { type: Boolean, default: false },
  },
  components: { "f-icon": Icon, "f-button": Button },
  methods: {
    onUploadTrigger() {
      let input = this.createInput();
      this.$refs.files.childNodes.forEach(node => node.remove());
      this.$refs.files.appendChild(input);
      input.addEventListener("change", () => {
        this.uploadFiles(Array.from(input.files));
        input.remove();
      });
      input.click();
    },
    onRemoveFile(name) {
      let findIndex = this.fileList.findIndex(item => item.name === name);
      let spliceList = [...this.fileList];
      spliceList.splice(findIndex, 1);
      this.$emit("update:fileList", spliceList);
    },
    uploadFiles(pureFiles) {
      let newNames = pureFiles.map(pureFile =>
        this.generateName(pureFile.name)
      );
      if (!this.beforeUploadFiles(pureFiles, newNames)) {
        return;
      }
      pureFiles.forEach((pureFile, i) => {
        let formData = new FormData();
        let { type, size } = pureFile;
        formData.append(this.name, pureFile);
        this.doUploadFiles(
          formData,
          res => {
            const imgUrl = this.parseResponse(res);
            const file = {
              name: newNames[i],
              url: imgUrl,
              type,
              size,
              status: "resolve"
            };
            this.afterUploadFile(file);
          },
          xhr => {
            this.uploadError(xhr, newNames[i]);
          }
        );
      });
    },
    uploadError(xhr, name) {
      let newFileList = [...this.fileList].map(item => {
        if (item.name === name) {
          item.status = "reject";
        }
        return item;
      });
      let error = "";
      if (xhr.status === 0) {
        error = "网络无法连接";
      }
      this.$emit("update:fileList", newFileList);
      this.$emit("error", error);
    },
    beforeUploadFiles(pureFiles, newNames) {
      let result = true;
      // 生成将要新增数据数组
      let newFileLists = pureFiles.map((pureFile, i) => ({ name: newNames[i], status: "pending", type: pureFile.type, size: pureFile.size }));
      // 检测上传文件尺寸限制
      pureFiles.forEach(pureFile => {
        let { size } = pureFile;
        if (size > this.sizeLimit) {
          let tips = "";
          if (this.sizeLimit >= 1024 && this.sizeLimit < 1024 * 1024) {
            tips = (this.sizeLimit / 1024).toFixed(1) + "KB";
          } else if (this.sizeLimit > 1024 * 1024) {
            tips = (this.sizeLimit / 1024 / 1024).toFixed(1) + "M";
          } else if (this.sizeLimit < 1024) {
            tips = this.sizeLimit + "B";
          }
          this.$emit("error", `上传文件不得大于${tips}`);
          result = false;
        }
      });
      if (result) {
        this.$emit("update:fileList", this.fileList.concat(newFileLists));
      }
      return result;
    },
    // 生成新的name
    generateName(name) {
      while (this.fileList.filter(item => item.name === name).length > 0) {
        let dotIndex = name.lastIndexOf(".");
        let nameWithoutExtension = name.substring(0, dotIndex);
        let extension = name.substring(dotIndex);
        name = this.getCopyName(nameWithoutExtension) + extension;
      }
      return name;
    },
    afterUploadFile(file) {
      const { name, url } = file;
      const updatedList = [...this.fileList].map(item => {
        if (item.name === name) {
          item.url = url;
          item.status = "resolve";
        }
        return item;
      });
      this.$emit("update:fileList", updatedList);
    },
    getCopyName(name) {
      let reg = /\(\d\)$/;
      let numberReg = /\d/;
      if (reg.test(name)) {
        let brackets = name.match(reg)[0];
        let n = brackets.match(numberReg)[0];
        name = name.replace(reg, `(${parseInt(n) + 1})`);
      } else {
        name = name + "(1)";
      }
      return name;
    },
    doUploadFiles(formData, success, error) {
      let xhr = new XMLHttpRequest();
      xhr.open(this.method, this.action);
      xhr.onload = () => success(xhr.response);
      xhr.onerror = () => error(xhr);
      xhr.send(formData);
    },
    createInput() {
      let input = document.createElement("input");
      input.type = "file";
      input.accept = this.accept;
      input.multiple = this.multiple;
      input.setAttribute("name", this.name);
      return input;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "_variable";
.f-upload {
  &-fileList {
    list-style: none;
    > li {
      display: flex;
      align-items: center;
      background-color: #fff;
      border: 1px solid #c0ccda;
      border-radius: 6px;
      margin-top: 10px;
      padding: 10px 10px 10px 10px;
      height: 92px;
      position: relative;
        justify-content: flex-start;
        .f-upload-img{
          width: 70px;
          height: 70px;
          background-color: #fff;
        }
      .f-upload-filename{
        margin-left: 10px;
      }
      .f-upload-close{
        position: absolute;
        top: 0.2em;
        right: 0.2em;
        cursor: pointer;
        fill: $border-color;
        &:hover{
          fill: $border-color-hover;
        }
      }
    }
  }
  &-loading {
    @include spin;
    width: 32px;
    height: 32px;
  }
}
</style>
