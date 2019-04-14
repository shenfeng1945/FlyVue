<template>
  <div id="app">
    <f-button type="default">Click</f-button>
    <f-button type="primary" disabled>Click</f-button>
    <f-button type="success">Click</f-button>
    <f-button type="warn">Click</f-button>
    <f-button type="danger">Click</f-button>
  </div>
</template>
<script>
import Button from './button/button'
export default {
  name: "Demos",
  components: {
    'f-button': Button
  },
  data(){
    return {
    }
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box{
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
}
</style>


