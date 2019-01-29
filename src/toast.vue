<template>
    <div class="toast">
       <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuluToast',
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 5
        }
    },
    mounted(){
        if(this.autoClose){
            setTimeout(() => {
              this.close()
            },this.autoCloseDelay * 1000)
        }
    },
    methods: {
        close(){
            // dom元素remove
            this.$el.remove()
            // 组件死掉，注销绑定的事件
            this.$destroy()
        }
    }
}
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $height: 40px;
  $toast-bg: rgba(0,0,0,.75);
  .toast{
      font-size: $font-size;
      position: fixed;
      top: 0;
      left: 50%;
      line-height: 1.8;
      height: $height;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      color: white;
      background: $toast-bg;
      padding: 0 16px;
      border-radius: 4px;
      box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
  }
</style>

