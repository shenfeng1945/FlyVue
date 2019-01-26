<template>
   <div class="wrapper" :class="{error}">
       <input type="text" :value="value" :disabled="disabled" 
              :readonly="readonly"
              @input="$emit('input',$event)"
              @focus="$emit('focus',$event)"
              @blur="$emit('blur',$event)"
              @change="$emit('change',$event)">
       <template v-if="error">
         <g-icon name="error" class="error-icon"></g-icon>
         <span class="error-message">{{error}}</span>
       </template>
    </div> 
</template>
<script>
import Icon from './Icon'
export default {
    name: 'GuluInput',
    props: {
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String,
            default: ''
        }
    },
    components: { 'g-icon': Icon }
   
}
</script>
<style lang="scss" scoped>
   $height: 32px;
   $border-color: #999;
   $border-color-erro: #999;
   $border-color-hover: #666;
   $font-size: 14px;
   $box-shadow-color: rgba(0,0,0,.5);
   $red: #F1453D;
   .wrapper{
       font-size: $font-size;
       display: inline-flex;
       align-items: center;
       > :not(:last-child){
           margin-right: .2em;
       }
       &.error{
           > input{
             border-color: $red;
           }
       }
       > input {
           height: $height;
           border: 1px solid $border-color;
           border-radius: 4px;
           padding: 0 8px;
           font-size: inherit;
           &:hover{
               border-color: $border-color-hover;
           }
           &:focus{
               box-shadow: inset 0 1px 3px $box-shadow-color;
               outline: none;
           }
           &[disabled], &[readonly]{
               border-color: #aaa;
               color: #aaa;
               cursor: not-allowed;
           }
       }
       .error-icon{
           fill: $red;
       }
       .error-message{
           color: $red;
       }
   }
</style>


