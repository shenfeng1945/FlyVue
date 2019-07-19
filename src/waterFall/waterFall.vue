<template>
  <div class="f-water-fall" :style="{'width': containerWidth}">
    <div class="f-water-fall-pin" v-for="(item, i) of renderList" :key="i" :style="item.style">
      <img :src="item.src" />
    </div>
  </div>
</template>

<script>
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
      num: 5
    };
  },
  created() {
    this.init();
  },
  computed: {
  },
  methods: {
    init() {
      this.renderList = this.imageLists.map(item => ({src: item, style: {width: this.pinWidth + 'px'}}))
      // 计算有多少列
      this.getColumnNum();
      // 设置 container 居中
      this.setContainer();
      // 绑定滚动事件
      this.bindScrollEvent();
      
      this.$nextTick(() => {
          // 设置瀑布流
          this.setWaterFall()
      })
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
    setWaterFall(){},
    setPosition(){},
    setContainer(){
       this.containerWidth = (this.unitWidth * this.num - this.gapWidth) + 'px'
    }
  }
};
</script>

<style lang="scss" scoped>
.f-water-fall {
  margin: 16px auto 0;
  &-pin {
    // position: absolute;
    // width: 216px;
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
</style>

