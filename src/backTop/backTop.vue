<template>
    <div class="f-back-top" :style="getStyle" v-show="targetVisible" @click="onBackTop">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'FlyBackTop',
    props: {
        target: {
            type: String,
            default: '.list'
        },
        visibilityHeight: {
            type: Number,
            default: 200
        },
        right: {
            type: Number,
            default: 40,
        },
        bottom: {
            type: Number,
            default: 40
        }
    },
    created(){
       this.bindEvent();
    },
    mounted(){
       this.onScrollEvent();
    },
    data(){
        return {
           targetVisible: false
        }
    },
    computed: {
        getStyle(){
            return {
                right: this.right + 'px',
                bottom: this.bottom + 'px'
            }
        },
    },
    methods: {
       bindEvent(){
         document.addEventListener('scroll', this.onScrollEvent)
       },
       onScrollEvent(){
          const targetEle = document.querySelector(this.target)
          const {top} = targetEle.getBoundingClientRect()
          if(Math.abs(top) > this.visibilityHeight){
              this.targetVisible = true
          }else{
              this.targetVisible = false
          }
       },
       onBackTop(){
          const targetEle = document.querySelector(this.target)
          let {top} = targetEle.getBoundingClientRect()
          top = Math.abs(top);
        //   if(top > 0){
            //   window.requestAnimationFrame(this.onBackTop)
            //   window.scrollTo(0, top - top/8)
        //   }
        targetEle.scrollTop = 0
        // targetEle.scrollTo(0, 0)
       }
    }
}
</script>

<style lang="scss" scoped>
  .f-back-top{
      position: fixed;
      z-index: 9;
      width: 32px;
      height: 32px;
  }
</style>

