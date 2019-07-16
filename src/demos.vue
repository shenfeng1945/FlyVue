<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
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
  </div>
</template>
<script>
import Input from "./input/Input";
import Button from "./button/button";
import Icon from "./icon/Icon";
import Upload from './upload/upload';


export default {
  name: "Demos",
  components: {
    "f-input": Input,
    "f-icon": Icon,
    "f-button": Button,
    "f-upload": Upload
  },
  data() {
    return {
      fileList: []
    };
  },
  created() {},
  methods: {
     parseResponse(res){
       const {key} = JSON.parse(res);
       return `http://localhost:3000/preview/${key}`
     }
  }
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
    width: 300px;
}
  ul,ol{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

</style>
