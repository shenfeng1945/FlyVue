<template>
   <div class="wrapper" :class="{error}">
        
       <input type="text" :value="value" :disabled="disabled" 
              :readonly="readonly"
              :placeholder="placeholder"
              @input="$emit('input',$event.target.value)"
              @focus="$emit('focus',$event.target.value)"
              @blur="$emit('blur',$event.target.value)"
              @change="$emit('change',$event.target.value)">
       <template v-if="error">
         <f-icon name="error" class="error-icon"></f-icon>
         <span class="error-message">{{error}}</span>
       </template>
      <template v-if="showClear">
          <div class="close-icon" @click="clearValue">
            <f-icon name="close"></f-icon>
          </div>
       </template>
    </div> 
</template>
<script>
import Icon from '../icon/Icon'
export default {
    name: 'FlyInput',
    props: {
        value: {
            type: [String,Date],
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
        },
        clearable: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
        }
    },
    components: { 'f-icon': Icon },
    computed: {
        showClear(){
            return this.clearable && this.value
        }
    },
    methods: {
        clearValue(){
            this.$emit('input','')
            this.$emit('change','')
        }
    }
   
}
</script>
<style lang="scss" scoped>
   $height: 32px;
   $border-color: #999;
   $border-color-error: #999;
   $border-color-hover: #666;
   $border-color-focus: #409EFF;
   $font-size: 14px;
   $box-shadow-color: rgba(0,0,0,.5);
   $red: #F1453D;
   .wrapper{
       font-size: $font-size;
       display: inline-flex;
       align-items: center;
       position: relative;
       > :not(:last-child){
           margin-right: .2em;
       }
       > input {
           height: $height;
           border: 1px solid $border-color;
           border-radius: 4px;
           padding-left: 1em;
           padding-right: 1.2em;
           font-size: inherit;
           &:hover{
               border-color: $border-color-hover;
           }
           &:focus{
               border-color: $border-color-focus;
               outline: none;
           }
           &[disabled], &[readonly]{
               border-color: #aaa;
               color: #aaa;
               cursor: not-allowed;
           }
       }
        &.error{
           > input{
             border-color: $red;
             &:hover{
                 border-color: $red;
             }
             &:focus{
                 border-color: $red;
             }
           }
       }
       .error-icon{
           fill: $red;
       }
       .error-message{
           color: $red;
       }
       
       > .close-icon{
           position: absolute;
           right: .4em;
           top: 50%;
           transform: translateY(-50%);
           display: flex;
           align-items: center;
       }
   }
</style>


