<template>
  <div class="popover"
       ref="popover">
    <div class="content-wrapper"
         ref="contentWrapper"
         v-if="visiable">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block;">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "GuluPopover",
  props: {
      trigger: {
          type: String,
          default: 'click',
          validator(val){
              return ['click','mouse'].indexOf(val) > -1;
          }
      }
  },
  data() {
    return {
      visiable: false
    };
  },
  mounted(){
     this.addTriggerEvent()
  },
  beforeDestroy(){
     this.removeContentWrapper()
     this.removeTriggerEvent()
  },
  methods: {
    putBackContent(){
      const { contentWrapper,popover } = this.$refs;
      popover.appendChild(contentWrapper);
    },
    onClickDocument(e){
      const { contentWrapper, triggerWrapper} = this.$refs
       if(triggerWrapper.contains(e.target))return;
       if(contentWrapper.contains(e.target))return;
       this.close()
    },
    computePosition(){
      const { contentWrapper, triggerWrapper} = this.$refs
      if(!contentWrapper)return;
      document.body.appendChild(contentWrapper)
      const {width,height,top,left} = triggerWrapper.getBoundingClientRect()
      const {height: height2} = contentWrapper.getBoundingClientRect();
      contentWrapper.style.left = left + window.scrollX + 'px';
      contentWrapper.style.top = top - height2 + window.scrollY + 'px';
    },
    addTriggerEvent(){
       const {triggerWrapper} = this.$refs;
       if(this.trigger === 'click'){
         triggerWrapper.addEventListener('click', this.onClick)
       }else{
         triggerWrapper.addEventListener('mouseenter', this.open)
         triggerWrapper.addEventListener('mouseover', this.close)
       }
    },
    removeTriggerEvent(){
        const {triggerWrapper} = this.$refs;
       if(this.trigger === 'click'){
         triggerWrapper.removeEventListener('click', this.onClick)
       }else{
         triggerWrapper.removeEventListener('mouseenter', this.open)
         triggerWrapper.removeEventListener('mouseover', this.close)
       }
    },
    onClick(e){
       const {triggerWrapper} = this.$refs;
       if(triggerWrapper.contains(e.target)){
          if(this.visiable){
              this.close()
          }else{
              this.open()
          }
       }
    },
    close(){
        this.visiable = false;
        document.removeEventListener('click',this.onClickDocument)
    },
    open(){
        this.visiable = true;
        this.$nextTick(() => {
          this.computePosition()
          document.addEventListener('click', this.onClickDocument)
        })
    }
  }
};
</script>
<style lang="scss" scoped>
.popover {
  margin: 100px;
  position: relative;
  
}
.content-wrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
</style>

