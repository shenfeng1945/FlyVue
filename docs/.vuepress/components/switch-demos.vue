<template>
  <div class="docs-switch-demos">
    <f-init-docs></f-init-docs>
    <h4>基础用法</h4>
    <f-card :source="basicSwitchSource">
      <div style="display:flex;">
        <f-switch
          v-model="basicValue1"
          active-color="#13ce66"
          inactive-color="#ff4949"
        ></f-switch>
        &nbsp; &nbsp;
        <f-switch v-model="basicValue2" large></f-switch>
      </div>
    </f-card>

    <h4>文字描述</h4>
    <f-card :source="textDescSwitchSource">
      <f-switch
        v-model="textDescValue"
        active-text="On"
        inactive-text="Off"
      ></f-switch>
    </f-card>

    <h4>禁用状态</h4>
    <f-card :source="bannedSwitchSource">
      <div style="display: flex;">
        <f-switch v-model="bannedValue1" disabled></f-switch>
        &nbsp;&nbsp;&nbsp;
        <f-switch v-model="bannedValue2" disabled></f-switch>
      </div>
    </f-card>
  </div>
</template>

<script>
import InitDocs from "@/docs-components/initDocs";
import ExampleCard from "@/docs-components/exampleCard";
import Switch from "@/components/formControls/switch";
import {
  basicSwitchSource,
  textDescSwitchSource,
  bannedSwitchSource,
} from "../static/switch-demos";
export default {
  components: {
    "f-init-docs": InitDocs,
    "f-card": ExampleCard,
    "f-switch": Switch,
  },
  data() {
    return {
      basicValue1: true,
      basicValue2: true,
      textDescValue: false,
      bannedValue1: false,
      bannedValue2: true,
      basicSwitchSource,
      textDescSwitchSource,
      bannedSwitchSource,
    };
  }
};
</script>
