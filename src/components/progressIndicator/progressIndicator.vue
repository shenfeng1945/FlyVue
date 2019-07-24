<template>
  <div class="f-progress-indicator" :style="getPercentWidthStyle"></div>
</template>

<script>
import * as utils from "../../utils/browser";
export default {
  name: "FlyProgressIndicator",
  data() {
    return {
      // 文档高度
      docHeight: 0,
      // 视口高度
      viewPortHeight: 0,
      // 差值
      sHeight: 0,
      width: 0,
    };
  },
  props: {
      color: {
          type: String,
          default: '#137cbd'
      },
  },
  mounted(){
    this.init();
  },
  computed: {
      getPercentWidthStyle(){
          return {
              width: this.width * 100 + '%',
              background: this.color
          }
      }
  },
  methods: {
      init(){
          this.width = this.calcWidthPercent();
          window.addEventListener('scroll', this.bindScrollEvent)
      },
      calcWidthPercent(){
          this.docHeight = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight);
          this.viewPortHeight = utils.getViewPortHeight();
          // 差值
          this.sHeight = Math.max(this.docHeight - this.viewPortHeight, 0)
          // 滚动条垂直偏移量
          const scrollTop = utils.getScrollOffsetsTop()
          return this.sHeight ? scrollTop / this.sHeight : 0
      },
      bindScrollEvent(){
         window.requestAnimationFrame(() => {
             this.width = Math.min(utils.getScrollOffsetsTop() / this.sHeight, 1)
             if(this.width === 1){
                 this.$emit('update:end')
             }
         })
      }
  },
  beforeDestory(){
     window.removeEventListener('scroll', this.bindScrollEvent)
  }
};
</script>

<style lang="scss" scoped>
@import '_variable';
.f-progress-indicator {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 3px;
}
</style>


