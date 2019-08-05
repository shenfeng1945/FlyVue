<template>
   <div class="wrapper" :class="{error}">
       <input type="text" :value="value" :disabled="disabled"
              class="f-input"
              :class="{'f-inner': clearValue, 'f-suffix-icon': !!suffixIcon, 'f-prefix-icon': !!prefixIcon, 'f-round': round, [intent]: intent}"
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
        },
        round: {
           type: Boolean,
           default: false,
        },
        intent: {
           type: String,
           default: "default",
           validator(value) {
              return (
                ["default", "primary", "warn", "success", "danger"].indexOf(value) > -1
              );
            }
        },
    },
    components: { 'f-icon': Icon },
    computed: {
        showClear(){
            return this.clearable && this.value && !this.disabled
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
@import 'style/_variable';
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
           height: $input-height;
           border: none;
           outline: none;
           border-radius: 4px;
           padding: 0 10px;
           font-size: inherit;
           line-height: $input-height;
           font-weight: 400;
           color: #182026;
           width: 100%;
           box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(16,22,26,.15), inset 0 1px 1px rgba(16,22,26,.2);
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
           
           &[disabled]{
               box-shadow: none;
               background: rgba(206,217,224,.5);
               cursor: not-allowed;
               color: rgba(92,112,128,.6);
               border: none
           }
           &.f-round{
               border-radius: 30px;
           }
           &.primary {
               box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16,22,26,.15), inset 0 1px 1px rgba(16,22,26,.2);
           }
           &.success {
               box-shadow: 0 0 0 0 rgba(15,153,96,0), 0 0 0 0 rgba(15,153,96,0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16,22,26,.15), inset 0 1px 1px rgba(16,22,26,.2);
           }
           &.warn {
               box-shadow: 0 0 0 0 rgba(217,130,43,0), 0 0 0 0 rgba(217,130,43,0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16,22,26,.15), inset 0 1px 1px rgba(16,22,26,.2);
           }
           &.danger {
               box-shadow: 0 0 0 0 rgba(219,55,55,0), 0 0 0 0 rgba(219,55,55,0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16,22,26,.15), inset 0 1px 1px rgba(16,22,26,.2);
           }
           &:focus{
               box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,.3), inset 0 1px 1px rgba(16,22,26,.2);
           }
           &.primary:focus {
                box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,.3), inset 0 1px 1px rgba(16,22,26,.2);
           }
           &.success:focus {
                box-shadow: 0 0 0 0 rgba(15,153,96,0), 0 0 0 0 rgba(15,153,96,0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16,22,26,.15), inset 0 1px 1px rgba(16,22,26,.2);
           }
           &.warn:focus {
                box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217,130,43,.3), inset 0 1px 1px rgba(16,22,26,.2);
           }
           &.danger:focus {
                box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219,55,55,.3), inset 0 1px 1px rgba(16,22,26,.2);
           }
       }
        &.error{
           > input{
             border-color: $red1;
             &:hover{
                 border-color: $red1;
             }
             &:focus{
                 border-color: $red1;
             }
           }
       }
       &.f-round{
           > input{
               border-radius: $input-height / 2;
           }
       }
       .error-icon{
           fill: $red1;
       }
       .error-message{
           color: $red1;
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
        &.pointer{
          input{
            cursor: pointer;
          }
        }
       
   }
   
</style>


