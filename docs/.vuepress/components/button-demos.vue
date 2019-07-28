<template>
  <div>
    <h4>基础用法</h4>
    <f-card>
       <f-button intent="success" left-icon="download">按钮</f-button>
    </f-card>
  </div>
</template>
<script>
import Button from "@/components/button/button";
import ExampleCard from "@/components/exampleCard/exampleCard";

export default {
  name: "FlyButtonDemos",
  components: {
    "f-button": Button,
    "f-card": ExampleCard
  }
};
</script>

