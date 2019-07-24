<template>
  <div class="f-water-fall-wrapper">
    <div class="f-water-fall" :style="{'width': containerWidth}">
      <div class="f-water-fall-pin" v-for="(item, i) of imageLists" :key="i" :style="pinStyle" ref="pin">
          <template v-if="$scopedSlots.default">
            <slot :item="item"></slot>
          </template>
          <template v-else>
              <img :src="item.src" alt="">
          </template>
      </div>
    </div>
    <div class="f-loading" v-if="loading">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>

</template>

<script>
  import * as utils from "../../utils/browser";
export default {
  name: "FlyWaterFall",
  props: {
    imageLists: {
      type: Array,
      default: () => []
    },
    gapHeight: {
      type: Number,
      default: 20
    },
    gapWidth: {
      type: Number,
      default: 20
    },
    pinWidth: {
      type: Number,
      default: 216
    },
    threshold: {
      type: Number,
      default: 100
    },
  },
  data() {
    return {
      containerWidth: 0,
      // 每列的高度
      columnHeightArr: [],
      unitWidth: 0,
      viewportHeight: 0,
      viewportWidth: 0,
      num: 5,
      pins: null,
      loading: true,
      // 滑到底部图片加载中
      updating: false
    };
  },
  watch: {
    imageLists(){
      this.$nextTick(() => {
        this.setWaterFall();
      })
    }
  },
  mounted() {
    this.pins = this.$refs.pin;
    this.init();
  },
  computed: {
    pinStyle(){
      return {
        width: this.pinWidth + 'px',
        display: 'none'
      }
    }
  },
  methods: {
    init() {
      // 计算有多少列
      this.getColumnNum();
      // 设置 container 居中
      this.setContainer();
      // 绑定滚动事件
      this.bindScrollEvent();

      // 如果已经有了图片，设置瀑布流
      if (this.pins && this.pins.length > 0) {
        this.setWaterFall()
      }
    },
    getColumnNum() {
        this.unitWidth = this.gapWidth + this.pinWidth;
        this.viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        this.viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        this.num = Math.floor((this.viewportWidth + this.gapWidth) / this.unitWidth);
        this.initColumnHeightArr();
    },
    resetPosition(){
       this.getColumnNum();
       this.setContainer();
    },
    initColumnHeightArr(){
        this.columnHeightArr = Array.from({length: this.num}, () => 0)
    },
    handleResize(){
        this.resetPosition();
        this.setPosition();
    },
    bindScrollEvent(){
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll)
    },
    setWaterFall() {
       const promises = this.pins && this.pins.filter(node => getComputedStyle(node).display === 'none').map(node => {
           const img = node.firstChild;
           return new Promise((resolve, reject) => {
             img.onload = function(){
               resolve();
             };
             img.onerror = reject;
           })
       });
      Promise.all(promises)
        .then(this.setPosition)
        .catch(this.setPosition)
    },
    setPosition() {
      this.loading = false;
      this.pins.filter(node => getComputedStyle(node).display === 'none').forEach(node => node.style.display = 'block');
      this.initColumnHeightArr();
      for (let i = 0; i < this.pins.length; i++) {
        const min = this.getMin();
        const index = utils.indexOf(this.columnHeightArr, min);
        this.pins[i].style.left = this.unitWidth * index + 'px';
        this.pins[i].style.top = min + 'px';
        this.columnHeightArr[index] += (this.pins[i].offsetHeight + this.gapHeight)
      }
      this.updating = false;

      // 当图片不能占满页面时，需自动加载
      if(this.getMin() < this.viewportHeight + this.threshold){
        this.handleScroll()
      }
    },
    setContainer(){
       this.containerWidth = (this.unitWidth * this.num - this.gapWidth) + 'px'
    },
    getMin() {
      return Math.min.apply(null, this.columnHeightArr)
    },
    handleScroll(){
      if(this.updating) return;
      const checkScroll = this.getMin() - (window.pageXOffset || document.documentElement.scrollTop) < this.viewportHeight + this.threshold;
      if(checkScroll){
        this.$emit('scrollReachBottom');
        this.updating = true
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .f-water-fall-wrapper {
    position: relative;

    .f-water-fall {
      margin: 16px auto 0;
      position: relative;
      min-height: 100vh;

      &-pin {
        position: absolute;
        font-size: 12px;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        transition: left .6s,top .6s;
        transition-delay: .1s;
        animation: show-card .4s;

        > img {
          display: block;
          margin: 0 auto;
          width: 100%;
        }
      }
    }

    .f-loading {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 50%;
      z-index: 9;

      .dot:nth-child(2n - 1) {
        animation-delay: .35s;
      }

      .dot {
        vertical-align: bottom;
        background-color: #4b15ab;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin: 3px;
        animation-fill-mode: both;
        display: inline-block;
        animation: ball-beat .7s 0s infinite linear;
      }
    }
  }

  @keyframes ball-beat {
    50% {
      opacity: .2;
      transform: scale(.75);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
}
@keyframes show-card {
  0% {
    transform: scale(0.5)
  }
  100% {
    transform: scale(1)
  }
}
</style>

