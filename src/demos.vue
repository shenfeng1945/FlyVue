<template>
  <div id="app">
    <div class="scroll">
      <f-sticky>
        <div style="border: 1px solid red;">
          这是粘贴的内容
        </div>
      </f-sticky>
      <p>11</p>
      <p>12</p>
      <p>13</p>
      <p>14</p>
      <p>15</p>
      <p>16</p>
      <p>17</p>
      <p>18</p>
      <p>16</p>
      <p>17</p>
      <p>18</p>
    </div>
  </div>
</template>
<script>
import Sticky from "./sticky/sticky";
export default {
  name: "Demos",
  components: {
    "f-sticky": Sticky
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  .scroll{
    // height: 300px;
    overflow: auto;
  }
</style>
