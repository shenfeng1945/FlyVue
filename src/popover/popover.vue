<template>
    <div class="popover" @click.stop="xxx">
       <div class="content-wrapper" v-if="visiable" @click.stop>
           <slot name="content"></slot>
       </div>
       <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'FlyPopover',
    data(){
        return {
            visiable: false
        }
    },
    methods:{
        xxx(){
            this.visiable = !this.visiable
            if(this.visiable === true){
                this.$nextTick(() => {
                    const yyy = () => {
                        this.visiable = false
                        console.log('object')
                        document.removeEventListener('click',yyy)
                    }
                    document.addEventListener('click',yyy)
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
  .popover{
    position: relative;
    margin: 100px;
      .content-wrapper{
          position: absolute;
          border: 1px solid red;
          bottom: 100%;
          left: 0;
          box-shadow: 0 0 3px rgba(0,0,0,.5);
      }
  }
</style>


