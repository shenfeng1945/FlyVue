<template>
  <div>
    <f-progress-indicator></f-progress-indicator>
    <f-back-top :right="100" :bottom="100">
      <div class="caret-up-wrapper">
        <f-icon name="caret-up"></f-icon>
      </div>
    </f-back-top>
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
  .caret-up-wrapper{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: #409eff;
      width: 20px;
      height: 20px;
    }
    &:hover {
      background: #f2f6fc;
    }
  }
</style>

