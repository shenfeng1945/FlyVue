<template>
  <div class="docs-card">
    <div class="docs-source">
      <slot></slot>
    </div>
    <transition name="expandHeight" @enter="enter" @leave="leave">
      <div class="docs-expand" v-if="codeVisible">
        <div class="docs-description" v-if="source.desc" v-html="source.desc"></div>
        <div class="docs-code">
          <pre v-highlightjs="source.code">
            <code class="html">
            </code>
          </pre>
        </div>
      </div>
    </transition>
    <f-sticky position="bottom" :eventBus="eventBus">
      <div class="docs-control" @click="handerClick">
        <template v-if="!codeVisible">
          <f-icon name="caret-down"></f-icon>
          <span class="docs-span">显示代码</span>
        </template>
        <template v-else>
          <f-icon name="caret-up"></f-icon>
          <span class="docs-span">隐藏代码</span>
        </template>
      </div>
    </f-sticky>
  </div>
</template>

<script>
import Icon from "@/components/icon/Icon";
import Sticky from "@/components/sticky/sticky";
import Vue from 'vue';
import 'highlight.js/styles/color-brewer.css';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS);

export default {
  name: "FlyExampleCard",
  components: {
    "f-icon": Icon,
    "f-sticky": Sticky
  },
  props: {
    source: Object
  },
  data() {
    return {
      codeVisible: false,
      eventBus: new Vue(),
      code: `
        <f-button intent="succuss">按钮</f-button>
        <f-button intent="succuss">按钮</f-button>
        <f-button intent="succuss">按钮</f-button>
        <f-button intent="succuss">按钮</f-button>
      `
    };
  },
  methods: {
    handerClick() {
      this.codeVisible = !this.codeVisible;
    },
    enter(el, done) {
      el.style.height = `auto`;
      const { height } = el.getBoundingClientRect();
      el.style.height = "0px";
      el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.addEventListener("transitionend", () => {
        done();
        this.eventBus.$emit('forceUpdate')
      });
    },
    leave(el, done) {
      const { height } = el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.getBoundingClientRect();
      el.style.height = "0px";
      el.addEventListener("transitionend", () => {
        done();
        this.eventBus.$emit('forceUpdate')
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "style/_variable";
@import "style/color-brewer";
.docs-card {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  .docs-source {
    padding: 24px;
  }
  .docs-expand {
    background: #fafafa;
    overflow: hidden;
    border-top: 1px solid #ebebeb;
    .docs-description {
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid #ebebeb;
      border-radius: 3px;
      font-size: 14px;
      line-height: 22px;
      color: #666;
      word-break: break-word;
      margin: 10px;
      background-color: #fff;
    }
    .docs-code {
      padding: 0 24px;
      pre {
        padding: 0;
        margin: 0;
        border-radius: none;
        background: #fafafa;
      }
    }
  }
  .docs-control {
    border-top: 1px solid #eaeefb;
    height: 44px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    display: flex;
    background: #fff;
    justify-content: center;
    align-items: center;
    .docs-span {
      margin-left: 10px;
      color: inherit;
      font-size: 14px;
    }
    svg {
      fill: #d3dce6;
    }
    &:hover {
      color: $menu-active-color;
      background: #f9fafc;
      svg {
        fill: $menu-active-color;
      }
    }
  }
}
</style>


