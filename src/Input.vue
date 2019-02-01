<template>
   <div class="wrapper" :class="{error}">
       <input type="text" :value="value" :disabled="disabled" 
              :readonly="readonly"
              @input="$emit('input',$event.target.value)"
              @focus="$emit('focus',$event.target.value)"
              @blur="$emit('blur',$event.target.value)"
              @change="$emit('change',$event.target.value)">
       <template v-if="error">
         <f-icon name="error" class="error-icon"></f-icon>
         <span class="error-message">{{error}}</span>
       </template>
    </div> 
</template>
<script>
import Icon from './Icon'
export default {
    name: 'FlyInput',
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
    components: { 'f-icon': Icon }
   
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


