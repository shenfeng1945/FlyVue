<template>
  <div class="f-pull-down">
    <div class="f-refresh" :style="{'min-height': refreshMinHeight}" :class="{'f-animation': status === 'pending' || status === 'refreshing' }">
      <div class="f-refresh-element">
      <template v-if="status === 'refreshing'">
        <f-icon class="refresh-icon loading" name="loading"></f-icon>
        <div class="refresh-text">{{refreshText}}</div>
      </template>
      <template v-else>
        <f-icon class="refresh-icon" name="arrow-up" v-if="status === 'releasing'"></f-icon>
        <f-icon class="refresh-icon" name="arrow-down" v-else></f-icon>
        <div class="refresh-text">{{status === 'releasing' ? relaseText : pullText}}</div>
      </template>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Icon from '@/components/icon/Icon';
export default {
  name: 'FlyPullDownRefresh',
  components: {
    'f-icon': Icon
  },
  props: {
    pullText: {
      type: String,
      default: '下拉'
    },
    relaseText: {
      type: String,
      default: '释放刷新'
    },
    refreshText: {
      type: String,
      default: '刷新中'
    },
    // 手指滑动与页面滑动比例
    distanceIndex: {
      type: Number,
      default: 2.5
    },
    threshold: {
      type: Number,
      default: 100
    },
    // 最大滑动距离
    maxDist: {
      type: Number,
      default: 150
    },
    reloadHeight: {
      type: Number, 
      default: 100
    },
    disabledRefresh: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      // 记录当前状态 pending/pulling/releasing/refreshing
      status: 'pending',
      // touchstart时，Y轴的距离 
      pullStartY: undefined,
      // touchmove时， Y轴的距离
      pullMoveY: undefined,
      // 手指的移动的距离
      fingerDist: 0,
      // f-refresh要移动的距离
      refreshDist: 0,
      refreshMinHeight: 0,
      // 检测是否支持 passive 事件，我们可以传递 passive 为 true 来明确告诉浏览器，事件处理程序不会调用 preventDefault 来阻止默认滑动行为。
      supportsPassive: false,
    }
  },
  mounted(){
    !this.disabledRefresh && this.init();
  },
  methods:{
    init(){
      this.checkPassive();
      this.bindEvent();
    },
    bindEvent(){
      window.addEventListener('touchstart', this.onTouchStart)
      window.addEventListener('touchmove', this.onTouchMove, this.supportsPassive ? {passive: false} : false)
      window.addEventListener('touchend', this.onTouchEnd)
    },
    onTouchStart(e){
      if(this.shouldPullToRefresh()){
        this.pullStartY = e.touches[0].screenY;
      }
      if(this.status !== 'pending'){
        return
      }
    },
    onTouchMove(e){
      this.pullMoveY = e.touches[0].screenY;
      
      if(this.status === 'pending'){
        this.status = 'pulling';
      }

      if(this.pullStartY && this.pullMoveY){
        this.fingerDist = this.pullMoveY - this.pullStartY;
      }
      if(this.fingerDist > 0){
        // 阻止默认的滚动事件
        e.preventDefault();
        this.setRefreshDist();
        if(this.status === 'pulling' && this.refreshDist > this.threshold){
          this.status = 'releasing';
        }
        if(this.status === 'releasing' && this.refreshDist < this.threshold){
          this.status = 'pulling'
        }
      }
    },
    onTouchEnd(){
      if(this.status === 'releasing' && this.refreshDist > this.threshold){
        this.status = 'refreshing';
        this.refreshMinHeight = this.reloadHeight + 'px';
        this.$emit('onRefresh', this.onReset)
      }else {
        if(this.status === 'refreshing') return;
        this.refreshMinHeight = '0px';
        this.status = 'pending';
      }
      
      this.pullStartY = undefined;
      this.pullMoveY = undefined;
      this.fingerDist = 0;
      this.refreshDist = 0;
    },
    shouldPullToRefresh(){
      return !window.scrollY
    },
    setRefreshDist(){
      this.refreshDist = this.resistanceFunction(this.fingerDist / this.threshold) * Math.min(this.maxDist, this.fingerDist);
      this.refreshMinHeight = this.refreshDist + 'px';
    },
    resistanceFunction(t){
      return Math.min(1, t / this.distanceIndex)
    },
    checkPassive(){
      try {
          let _this = this;
          var opts = Object.defineProperty({}, 'passive', {
              get: function() {
                  _this.supportsPassive = true;
              }
          });
          window.addEventListener("testPassive", null, opts);
          window.removeEventListener("testPassive", null, opts);
      } catch (e) {}
    },
    onReset(){
      this.refreshMinHeight = '0px';
      setTimeout(() => {
        this.status = 'pending';
      }, 300)
    },
    beforeDestroy(){
      window.removeEventListener('touchstart', this.onTouchStart)
      window.removeEventListener('touchmove', this.onTouchMove)
      window.removeEventListener('touchend', this.onTouchEnd)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style/_variable';
  .f-pull-down{
    .f-refresh {
      pointer-events: none;
      font-size: 0.85em;
      top: 0;
      height: 0;
      text-align: center;
      width: 100%;
      overflow: hidden;
      color: #fff;
      background: #1abc9c;
      svg {
        fill: white;
      }
      .f-refresh-element {
        padding-top: 10px;
      }
      .refresh-icon {
        font-size: 16px;
      }
      .loading {
        animation: spin 1.2s infinite linear;
      }
      .refresh-text {
        margin-top: .3em;
      }
    }
    .f-animation {
      transition: height 0.3s, min-height 0.3s;
    }
  }
</style>


