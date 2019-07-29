<template>
  <div>
    <f-init-docs></f-init-docs>
    <h4>基础用法</h4>
    <p>基础的按钮用法。</p>
    <f-card :source="basicButton">
      <div>
        <f-button>默认按钮</f-button>
        <f-button intent="primary">主要按钮</f-button>
        <f-button intent="warn">警告按钮</f-button>
        <f-button intent="success">成功按钮</f-button>
        <f-button intent="danger">危险按钮</f-button>
      </div>
      <div style="margin-top: 24px">
        <f-button minimal>默认按钮</f-button>
        <f-button intent="primary" minimal>主要按钮</f-button>
        <f-button intent="warn" minimal>警告按钮</f-button>
        <f-button intent="success" minimal>成功按钮</f-button>
        <f-button intent="danger" minimal>危险按钮</f-button>
      </div>
      <div style="margin-top: 24px;">
        <f-button leftIcon="user" rightIcon="caret-down">Profile settings</f-button>
        <f-button intent="success" rightIcon="arrow-right">Next Step</f-button>
        <f-button intent="danger" leftIcon="refresh">Reset</f-button>
        <f-button leftIcon="search" circle intent="primary"></f-button>
        <f-button leftIcon="calendar" intent="warn" circle></f-button>
      </div>
    </f-card>
    
    <h4>禁用状态</h4>
    <p>按钮不可用状态</p>
    <f-card :source="disabledButton">
      <div>
        <f-button disabled>默认按钮</f-button>
        <f-button intent="primary" disabled>主要按钮</f-button>
        <f-button intent="warn" disabled>警告按钮</f-button>
        <f-button intent="success" disabled>成功按钮</f-button>
        <f-button intent="danger" disabled>危险按钮</f-button>
      </div>
      <div style="margin-top: 24px;">
        <f-button minimal disabled>默认按钮</f-button>
        <f-button intent="primary" minimal disabled>主要按钮</f-button>
        <f-button intent="warn" minimal disabled>警告按钮</f-button>
        <f-button intent="success" minimal disabled>成功按钮</f-button>
        <f-button intent="danger" minimal disabled>危险按钮</f-button>
      </div>
    </f-card>
    
    <h4>按钮组</h4>
    <p>以按钮组的方式出现，常用于多项类似操作。</p>
    <f-card :source="groupButton">
      <f-button-group>
        <f-button intent="primary" leftIcon="left">上一页</f-button>
        <f-button intent="primary" rightIcon="right">下一页</f-button>
      </f-button-group>
    </f-card>
    
    <h4>加载中</h4>
    <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
    <f-card :source="loadingButton">
       <f-button intent="success" loading>加载中</f-button>
    </f-card>
  </div>
</template>
<script>
import Button from "@/components/button/button";
import ButtonGroup from "@/components/button/button-group";
import ExampleCard from "@/docs-components/exampleCard";
import InitDocs from "@/docs-components/initDocs";
import { basicButton, disabledButton, groupButton, loadingButton } from "../static/button-demos";

export default {
  name: "FlyButtonDemos",
  components: {
    "f-button": Button,
    "f-card": ExampleCard,
    "f-init-docs": InitDocs,
    "f-button-group": ButtonGroup
  },
  data() {
    return {
      basicButton,
      disabledButton,
      groupButton,
      loadingButton
    };
  }
};
</script>

