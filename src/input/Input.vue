<template>
   <div class="wrapper" :class="{error}">
       <input type="text" :value="value" :disabled="disabled" 
              class="f-input"
              :class="{'f-inner': clearValue, 'f-suffix-icon': !!suffixIcon, 'f-prefix-icon': !!prefixIcon}"
              :readonly="readonly"
              :placeholder="placeholder"
              ref="input"
              @input="$emit('input',$event.target.value)"
              @focus="$emit('focus',$event.target.value)"
              @blur="$emit('blur',$event.target.value)"
              @change="$emit('change',$event.target.value)">
       <template v-if="error">
         <f-icon name="error" class="error-icon"></f-icon>
         <span class="error-message">{{error}}</span>
       </template>
      <template v-if="showClear">
          <div class="close-icon" :class="{'suffix-close': suffixIcon}" @click="clearValue">
            <f-icon name="close"></f-icon>
          </div>
       </template>
       <template v-if="suffixIcon">
          <div class="suffix-icon">
            <f-icon :name="suffixIcon"></f-icon>
          </div>
       </template>
       <template v-if="prefixIcon">
          <div class="prefix-icon">
            <f-icon :name="prefixIcon"></f-icon>
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
        },
        // icon在右侧
        suffixIcon: {
            type: String
        },
        // icon在左侧
        prefixIcon: {
            type: String
        }
    },
    components: { 'f-icon': Icon },
    computed: {
        showClear(){
            return this.clearable && this.value
        }
    },
    methods: {
        clearValue(e){
            this.$emit('input','')
            this.$emit('change','')
        },
        setNativeValue(value){
           this.$refs.input.value = value
        }
    }
   
}
</script>
<style lang="scss" scoped>
   $height: 30px;
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
       vertical-align: middle;
       > :not(:last-child){
        //    margin-right: .2em;
       }
       > .f-input {
           height: $height;
           border: 1px solid $border-color;
           border-radius: 4px;
           padding: 0 10px;
           font-size: inherit;
           line-height: $height;
           font-weight: 400;
           color: #182026;
           width: 100%;
           &.f-inner{
               padding-right: 2em;
           }
           &.f-suffix-icon{
               padding-right: 2em;
           }
           &.f-prefix-icon{
               padding-left: 2em;
           }
           &.f-inner.f-suffix-icon{
               padding-right: 4em;
           }
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
       &.f-round{
           > input{
               border-radius: $height / 2;
           }
       }
       .error-icon{
           fill: $red;
       }
       .error-message{
           color: $red;
       }
       .close-icon{
           display: none;
       }
       &:hover > .close-icon{
           position: absolute;
           right: 1em;
           top: 50%;
           transform: translate(25%,-50%);
           display: flex;
           align-items: center;
           &.suffix-close{
               right: 2.5em;
           }
       }
       .suffix-icon{
           position: absolute;
           right: 0.5em;
           top: 50%;
           display: flex;
           align-items: center;
           transform: translateY(-50%);
           > svg{width: 1.2em;height: 1.2em;}
       }
       .prefix-icon{
           position: absolute;
           left: 0.5em;
           top: 50%;
           display: flex;
           align-items: center;
           transform: translateY(-50%);
           > svg{width: 1.2em;height: 1.2em;}
       }
   }
   
</style>


