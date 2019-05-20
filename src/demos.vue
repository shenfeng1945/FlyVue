<template>
  <div id="app">
    <div class="scroll" data-name="sticky">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
      <p>9</p>
      <p>10</p>
      <f-sticky :distance="20">
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
    height: 300px;
    overflow: auto;
  }
</style>
