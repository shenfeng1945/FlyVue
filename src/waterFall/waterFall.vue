<template>
  <div class="f-water-fall-wrapper">
    <div class="f-water-fall" :style="{'width': containerWidth}">
      <div class="f-water-fall-pin" v-for="(item, i) of renderList" :key="i" :style="item.style" ref="pin">
        <img :src="item.src"/>
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
  import * as utils from "../utils/browser";
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
    }
  },
  data() {
    return {
      containerWidth: 0,
      renderList: [],

      // 每列的高度
      columnHeightArr: [],
      unitWidth: 0,
      viewportHeight: 0,
      viewportWidth: 0,
      num: 5,
      pins: null,
      loading: true
    };
  },
  created() {
    this.init();
  },
  watch: {
    renderList(){
        this.setWaterFall();
    }
  },
  mounted() {
    this.pins = this.$refs.pin;
  },
  computed: {
  },
  methods: {
    init() {
      this.renderList = this.imageLists.map(item => ({src: item, style: {width: this.pinWidth + 'px',display: 'none'}}));
      // 计算有多少列
      this.getColumnNum();
      // 设置 container 居中
      this.setContainer();
      // 绑定滚动事件
      this.bindScrollEvent();

      if (this.pins && this.pins.length > 0) {
        this.setPosition()
      }
    },
    getColumnNum() {
        this.unitWidth = this.gapWidth + this.pinWidth;
        this.viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        this.viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        this.num = Math.floor((this.viewportWidth + this.gapWidth) / this.unitWidth);
        this.columnHeightArr = Array.from({length: this.num}, () => 0)
    },
    resetPosition(){
       this.getColumnNum();
       this.setContainer();
    },
    handleResize(){
        this.resetPosition()
    },
    bindScrollEvent(){
        window.addEventListener('resize', this.handleResize)
    },
    setWaterFall() {
       const promises = this.pins.map(node => {
           const img = node.firstChild;
           return new Promise((resolve, reject) => {
             img.onload = resolve;
             img.onerror = reject;
           })
       });
      Promise.all(promises).then(() => this.setPosition()).catch( () => this.loading = false)
    },
    setPosition() {
      this.loading =false;
      this.pins.forEach(node => node.style.display = 'block');
      for (let i = 0; i < this.pins.length; i++) {
        const min = this.getMin();
        const index = utils.indexOf(this.columnHeightArr, min);
        this.pins[i].style.left = this.unitWidth * index + 'px';
        this.pins[i].style.top = min + 'px';
        this.columnHeightArr[index] += (this.pins[i].offsetHeight + this.gapHeight)
      }
    },
    setContainer(){
       this.containerWidth = (this.unitWidth * this.num - this.gapWidth) + 'px'
    },
    getMin() {
      return Math.min.apply(null, this.columnHeightArr)
    },
    getMax() {
      return Math.max.apply(null, this.columnHeightArr)
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
        transition: opacity 0.4s ease-in-out;

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
</style>

