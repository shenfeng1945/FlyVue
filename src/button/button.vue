<template>
    <button class="f-button" :class="[iconPosition && `icon-${iconPosition}`, `${type}`, circle && `circle`, loading && `is-loading` ]" @click="$emit('click')">
        <f-icon :name="icon" :style="noMargin"></f-icon>
        <f-icon class="loading" name="loading" v-if="loading"></f-icon>
        <div class="button-content">
          <slot></slot>
        </div>
    </button>
</template>
<script>
import Icon from '../Icon';
export default {
   props: {
       icon: {},
       iconPosition: {
           type: String,
           default: 'left',
           validator(value){
              return value === 'left' || value === 'right';
           }
       },
       loading: {
           type: Boolean,
           default: false
       },
       type: {
           type: String,
           default: 'default',
           validator(value){
               return ['default','primary','warn'].indexOf(value) > -1
           }
       },
       circle: {
           type: Boolean,
           default: false
       }
   },
   data(){
       return {
           noMargin: null
       }
   },
   components: {
       'f-icon': Icon
   },
   mounted(){
       const text = this.$el.querySelector('.button-content').textContent;
       if(!text){
           this.noMargin = {
               marginLeft: 0,
               marginRight: 0,
           }
       }
   },
}
</script>
<style lang="scss" scoped>
  @import '../../style/variable'; 
 .f-button{
     font-size: $font-size;
     height: $button-height;
     padding: 0 1em;
     border-radius: $border-radius;
     border: 1px solid $border-color;
     display: inline-flex;
     justify-content: center;
     align-items: center;
     vertical-align: middle;
     background-color: $button-bg;
     cursor: pointer;
     &.primary{
       background: $button-primary-bg;
       color: $button-bg;
       border-color: $button-primary-bg;
     }
     &.primary:active, &.primary.is-loading{
       background: $button-primary-active-bg;
     }
     &.primary:hover,  &.primary.is-loading{
       border-color: $button-primary-active-bg;
     }
     &.warn{
       background: $button-warn-bg;
       color: $button-bg;
       border-color: $button-warn-bg;
     }
     &.warn:active,&.warn.is-loading{
       background: $button-warn-active-bg;
     }
     &.warn:hover,&.warn.is-loading{
       border-color: $button-warn-active-bg;
     }
     > .icon {
         order: 1;
         margin-left: 0;
         margin-right: .3em;
     }
     > .button-content{
         order: 2;
     }
     &:hover,&.is-loading{
       border-color: $border-color-hover;
     }
     &:focus,&.is-loading{
       outline: none;
     }
     &:active,&.is-loading{
         background-color: $button-active-bg;
     }
     &.icon-right{
        > .icon {
            order: 2;
            margin-right: 0;
            margin-left: .3em;
        }
        > .button-content{
            order: 1;
        }
     }
     > .loading{
       animation: spin 1.2s infinite linear;
     }
     &.circle{
         border-radius: 50%;
     }
     
 }
</style>


