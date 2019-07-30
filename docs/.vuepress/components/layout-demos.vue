<template>
  <div>
    <f-init-docs></f-init-docs>
    <h4>基本用法</h4>
    <p>典型的页面布局。</p>
    <f-card :source="basicLayout">
      <div class="docs-basic-1">
        <f-layout>
          <f-header class="f-header">Header</f-header>
          <f-content class="f-content">Content</f-content>
          <f-footer class="f-footer">Footer</f-footer>
        </f-layout>
      </div>
      <div style="margin-top: 24px;" class="docs-basic-2">
        <f-layout>
          <f-header class="f-header">Header</f-header>
          <f-layout>
            <f-sider class="f-sider">Sider</f-sider>
            <f-content class="f-content">Content</f-content>
          </f-layout>
          <f-footer class="f-footer">Footer</f-footer>
        </f-layout>
      </div>
      <div style="margin-top: 24px;" class="docs-basic-3">
        <f-layout>
          <f-header class="f-header">Header</f-header>
          <f-layout>
            <f-content class="f-content">Content</f-content>
            <f-sider class="f-sider">Sider</f-sider>
          </f-layout>
          <f-footer class="f-footer">Footer</f-footer>
        </f-layout>
      </div>
      <div style="margin-top: 24px;" class="docs-basic-4">
        <f-layout>
          <f-sider class="f-sider">Sider</f-sider>
          <f-layout>
            <f-header class="f-header">Header</f-header>
            <f-content class="f-content">Content</f-content>
            <f-footer class="f-footer">Footer</f-footer>
          </f-layout>
        </f-layout>
      </div>
    </f-card>
  </div>
</template>

<script>
import ExampleCard from "@/docs-components/exampleCard";
import InitDocs from "@/docs-components/initDocs";
import Layout from "@/components/layout/layout";
import Header from "@/components/layout/header";
import Sider from "@/components/layout/sider";
import Content from "@/components/layout/content";
import Footer from "@/components/layout/footer";
import { basicLayout } from "../static/layout-demos";

export default {
  name: "LayoutDemos",
  components: {
    "f-card": ExampleCard,
    "f-init-docs": InitDocs,
    "f-layout": Layout,
    "f-header": Header,
    "f-sider": Sider,
    "f-content": Content,
    "f-footer": Footer
  },
  data() {
    return {
      basicLayout
    };
  }
};
</script>

<style lang="scss" scoped>
.docs-basic-1,
.docs-basic-2,
.docs-basic-3 ,
.docs-basic-4 {
  .f-header {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: white;
    background: #5c7080;
    font-weight: bold;
  }
  .f-content {
    height: 200px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    background: #738694;
    color: white;
  }
  .f-footer {
    height: 100px;
    display: flex;
    font-weight: bold;
    color: white;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    background: #8a9ba8;
  }
  .f-sider {
    height: 200px;
    display: flex;
    font-weight: bold;
    color: white;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    background: #a7b6c2;
  }
}
.docs-basic-4 {
  .f-sider {
    height: 400px;
  }
}
</style>


