<template>
  <div class="docs-backTop">
    <f-progress-indicator></f-progress-indicator>
    <h4>基础用法</h4>
    <p>滑动页面即可看到右下方的按钮。</p>
    <f-card :source="basicBackTopSource">
      <p>Scroll down to see the bottom-right button.</p>
      <f-backtop speed="slow" :right="100" :bottom="100"></f-backtop>
    </f-card>

    <h4>自定显示内容</h4>
    <p>显示区域被固定为 40px * 40px 的区域, 其中的内容可支持自定义。</p>
    <f-card :source="customBackTopSource">
      <p>Scroll down to see the bottom-right button.</p>
      <f-backtop :right="100" @click="onClick">
        <div
          style="
          height: 100%;
          width: 100%;
          background-color: #1088e9;
          box-shadow: 0 0 6px rgba(0,0,0, .12);
          line-height: 40px;
          border-radius: 3px;
          color: #fff;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        "
        >
            up
        </div>
      </f-backtop>
    </f-card>
  </div>
</template>

<script>
import ProgressIndicator from '@/components/progressIndicator/progressIndicator';
import ExampleCard from "@/docs-components/exampleCard";
import BackTop from "@/components/backTop/backTop";
import {
  basicBackTopSource,
  customBackTopSource
} from "../static/backtop-demos";
export default {
  name: "BackTopDemos",
  components: {
    "f-progress-indicator": ProgressIndicator,
    "f-card": ExampleCard,
    "f-backtop": BackTop
  },
  data() {
    return {
      basicBackTopSource,
      customBackTopSource
    };
  },
  methods: {
    onClick(){
      console.log('点击了');
    }
  }
};
</script>

<style scoped lang="scss"></style>
