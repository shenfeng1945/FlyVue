<template>
  <div class="docs-popover">
    <f-init-docs></f-init-docs>
    <h4>基础用法</h4>
    <p>支持插槽嵌套自定义浮层内容。</p>
    <f-card :source="BasicPopoverSource">
      <div class="popover-wrapper">
        <f-popover trigger="click" position="top">
          <f-button intent="primary">Click target</f-button>
          <template slot="content">
            <div>
              <h4>标题</h4>
              <p style="font-size: 14px;">这是一段内容 这是一段内容 这是一段内容</p>
            </div>
          </template>
        </f-popover>
        <f-popover trigger="click" position="left" :only-target="true">
          <f-button intent="primary">Click(target only)</f-button>
          <template slot="content">
            <div>
              <h4>标题</h4>
              <p style="font-size: 14px;">这是一段内容 这是一段内容 这是一段内容</p>
            </div>
          </template>
        </f-popover>
        <f-popover trigger="hover" position="right">
          <f-button intent="primary">Hover target</f-button>
          <template slot="content">
            <div>
              <h4>标题</h4>
              <p style="font-size: 14px;">这是一段内容 这是一段内容 这是一段内容</p>
            </div>
          </template>
        </f-popover>
        <f-popover trigger="hover" position="bottom" :only-target="true">
          <f-button intent="primary">Hover(target only)</f-button>
          <template slot="content">
            <div>
              <h4>标题</h4>
              <p style="font-size: 14px;">这是一段内容 这是一段内容 这是一段内容</p>
            </div>
          </template>
        </f-popover>
      </div>
    </f-card>
  </div>
</template>

<script>
import InitDocs from "@/docs-components/initDocs";
import ExampleCard from "@/docs-components/exampleCard";
import Popover from "@/components/popover/popover";
import Button from '@/components/button/button';
import {BasicPopoverSource} from '../static/popover-demos';
export default {
  name: "PopoverDemos",
  components: {
    "f-init-docs": InitDocs,
    "f-popover": Popover,
    "f-card": ExampleCard,
    "f-button": Button
  },
  data(){
    return {
      BasicPopoverSource,
    }
  },
};
</script>

<style lang="scss" scoped>
.docs-popover {
  .popover-wrapper {
    margin: 50px 0;
  }
}
.f-heading {
  color: #182026;
  font-weight: 600;
  margin: 0 0 10px;
  padding: 0;
  font-size: 16px;
}
.f-switch {
  margin-bottom: 10px;
}
</style>