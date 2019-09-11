<template>
  <div>
    <f-progress-indicator></f-progress-indicator>
    <f-back-top :right="100" :bottom="100"></f-back-top>
  </div>
</template>

<script>
import ProgressIndicator from '@/components/progressIndicator/progressIndicator';
import BackTop from '@/components/backTop/backTop';
import Icon from "@/components/icon/Icon"
export default {
  name: 'FlyInitDocs',
  components: {
    "f-progress-indicator": ProgressIndicator,
    "f-back-top": BackTop,
    "f-icon": Icon
  }
}
</script>

<style lang="scss" scoped>
</style>

