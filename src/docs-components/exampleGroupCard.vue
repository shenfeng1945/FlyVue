<template>
  <div class="docs-example-frame">
    <div class="docs-example-content">
      <div class="docs-example">
        <div style="margin: 20px;">
          <slot></slot>
        </div>
      </div>
      <div class="docs-example-options">
        <slot name="props"></slot>
      </div>
    </div>
    <transition
      name="expandHeight"
      @enter="enter"
      @leave="leave"
    >
      <div
        class="docs-expand"
        v-if="codeVisible"
      >
        <div
          class="docs-description"
          v-if="source.desc"
          v-html="source.desc"
        ></div>
        <div class="docs-code">
          <pre v-highlightjs="source.code">
            <code class="html">
            </code>
          </pre>
        </div>
      </div>
    </transition>
    <template v-if="codeVisible">
      <f-sticky
        position="bottom"
        :eventBus="eventBus"
      >
        <div
          class="docs-control"
          @click="handerClick"
        >
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
    </template>
    <template v-else>
      <div
        class="docs-control"
        @click="handerClick"
      >
        <template v-if="!codeVisible">
          <f-icon name="caret-down"></f-icon>
          <span class="docs-span">显示代码</span>
        </template>
        <template v-else>
          <f-icon name="caret-up"></f-icon>
          <span class="docs-span">隐藏代码</span>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import Icon from "@/components/icon/Icon";
import Sticky from "@/components/sticky/sticky";
import Vue from "vue";
import "highlight.js/styles/color-brewer.css";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
export default {
  name: "ExampleGroupCard",
  components: {
    "f-icon": Icon,
    "f-sticky": Sticky
  },
  props: {
    source: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      codeVisible: false,
      eventBus: new Vue(),
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
        this.eventBus.$emit("forceUpdate");
      });
    },
    leave(el, done) {
      const { height } = el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.getBoundingClientRect();
      el.style.height = "0px";
      el.addEventListener("transitionend", () => {
        done();
        this.eventBus.$emit("forceUpdate");
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "style/_variable";
@import "style/color-brewer";
.docs-example-frame {
  .docs-example-content {
    display: flex;
    margin-bottom: 10px;
    .docs-example {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      background: #fff;
      min-width: 0;
      max-width: 100%;
      margin-right: 10px;
      border-radius: 3px;
      border: 1px solid #ebebeb;
      flex: 1;
      flex-direction: column;
    }
    .docs-example-options {
      display: flex;
      padding: 20px;
      background-color: #fff;
      border-radius: 3px;
      border: 1px solid #ebebeb;
      max-width: 300px;
      flex-direction: column;
    }
  }
  .docs-expand {
    background: #fafafa;
    overflow: hidden;
    border-top: 1px solid #ebebeb;
    border-left: 1px solid #ebebeb;
    border-right: 1px solid #ebebeb;
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
    border: 1px solid #ebebeb;
    height: 44px;
    border-radius: 4px;
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