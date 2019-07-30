<template>
    <div class="f-color-card" :class="{isClicked}" 
         @click="copyHexCode(source.hex)" 
         v-click-outside="close"
         :style="{'color': source.color || '#fff', 'background': source.hex, 'fill': source.color || '#fff'}">
     <span class="text">
       <f-icon v-if="isClicked" name="tick"></f-icon>
       {{isClicked ? 'Copied to clipBoard' : source.name}}
     </span>
     <span class="tips">
       <f-icon v-if="isClicked" name="tick"></f-icon>
       {{isClicked ? 'Copied to clipBoard' : hoverTips}}
     </span>
     <span>{{source.hex}}</span>
    </div>
</template>

<script>
import copyTextToClipboard from '../utils/clipborad';
import ClickOutside from '../components/cascader/cascader-click-outside';
import Icon from '../components/icon/Icon';
export default {
  name: 'FlyColorCard',
  props: {
    source: {
      // {name: '@white1', hex: '#ffffff', color: ''}
      type: Object,
      required: true
    },
    hoverTips: {
      type: String,
      default: 'Click to copy hex code'
    }
  },
  directives: {
    'click-outside': ClickOutside
  },
  components: {
    'f-icon': Icon
  },
  data(){
    return {
      isClicked: false
    }
  },
  methods: {
    copyHexCode(hex){
     copyTextToClipboard(hex, (val) => {
       if(val){
         this.isClicked = true
       }
     })
    },
    close(){
      this.isClicked = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .f-color-card {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      white-space: nowrap;
      font-size: 12px;
      transition: all .2s cubic-bezier(.4,1,.75,.9);
      cursor: pointer;
      &.isClicked {
        transform: scale(1.02);
        transform-origin: center center;
        border-radius: 3px;
      }
      > .tips { display: none; }
      &:hover {
        transform: scale(1.02);
        transform-origin: center center;
        border-radius: 3px;
        > .text { display: none; }
        > .tips { display: inline; }
      }
      svg {fill: inherit;}
  }
</style>


