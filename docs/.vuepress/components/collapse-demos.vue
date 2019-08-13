<template>
  <div class="docs-collapse">
    <f-init-docs></f-init-docs>
    <h4>基础用法</h4>
    <p>可同时展开多个面板，面板之间不影响</p>
    <f-card :source="BasicCollapseSource">
      <f-collapse :selected.sync="selected">
        <f-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </f-collapse-item>
        <f-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </f-collapse-item>
        <f-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </f-collapse-item>
        <f-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </f-collapse-item>
      </f-collapse>
    </f-card>
    
    <h4>手风琴效果</h4>
    <p>每次只能展开一个面板</p>
    <f-card :source="SingleCollapseSource">
      <f-collapse :selected.sync="selected1" :single="true">
        <f-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </f-collapse-item>
        <f-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </f-collapse-item>
        <f-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </f-collapse-item>
        <f-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </f-collapse-item>
      </f-collapse>
    </f-card>
    
    <h4>自定义面板标题</h4>
    <p>除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。</p>
    <f-card :source="CustomCollapseSource">
      <f-collapse :selected.sync="selected2">
        <f-collapse-item name="1">
          <template slot="title">
            <h5>一致性 Consistency
              <f-icon name="info-sign"></f-icon>
            </h5>
          </template>
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </f-collapse-item>
        <f-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </f-collapse-item>
        <f-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </f-collapse-item>
        <f-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </f-collapse-item>
      </f-collapse>
    </f-card>
  </div>
</template>

<script>
import InitDocs from "@/docs-components/initDocs";
import ExampleCard from "@/docs-components/exampleCard";
import Collapse from "@/components/collapse/collapse";
import CollapseItem from "@/components/collapse/collapseItem";
import { BasicCollapseSource, SingleCollapseSource, CustomCollapseSource } from "../static/collapse-demos";
import Popover from '@/components/popover/popover';
import Icon from '@/components/icon/Icon';
export default {
  name: "CollapseDemos",
  components: {
    "f-init-docs": InitDocs,
    "f-card": ExampleCard,
    "f-collapse": Collapse,
    "f-collapse-item": CollapseItem,
    "f-icon": Icon,
    "f-popover": Popover
  },
  data() {
    return {
      BasicCollapseSource,
      SingleCollapseSource,
      CustomCollapseSource,
      selected: [],
      selected1: [],
      selected2: ['1']
    };
  }
};
</script>



