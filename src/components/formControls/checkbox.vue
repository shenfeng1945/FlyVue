<template>
  <div class="f-checkbox" :style="{'margin-right': getInlineValue ? '20px' : 'unset'}">
    <label class="f-checkbox-label" :class="{large,'reverse': getAlignRightValue,'f-disabled': getDisabledValue}">
      <input
        type="checkbox"
        class="f-checkbox-input"
        :checked="getChecked"
        @change="onChange"
        ref="checkbox"
        :disabled="getDisabledValue"
      >
      <span class="f-checkbox-control" :class="{active: getChecked,indeterminate: indeterminateVal}" :style="{fontSize: getLargeValue ? '20px' : '16px'}"></span>
      <span class="f-checkbox-text" :style="{fontSize: getLargeValue ? '16px' : '14px'}">
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "FlyCheckbox",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    alignRight: {
      type: Boolean,
      default: false
    },
    // checkbox选一半
    indeterminate: {
      type: Boolean,
      default: false
    },
    label: {
      type: [Number, String],
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      indeterminateVal: false,
      existGroup: this.$parent.$options.name === 'FlyCheckboxGroup'
    }
  },
  inject: {
    root: {
      default: 'root'
    }
  },
  mounted(){
    if(this.indeterminate){
      this.indeterminateVal = true;
      this.$refs.checkbox.indeterminate = true;
    }
  },
  watch: {
    indeterminate: function(newVal, oldVal) {
      this.indeterminateVal = newVal;
      this.$refs.checkbox.indeterminate = newVal;
    }
  },
  methods: {
    onChange(e) {
      const val = e.target.checked;
      if(this.existGroup){
        let copyCheckedList = JSON.parse(JSON.stringify(this.$parent.value));
        if(!this.label){
          throw new Error('FlyCheckBox not exist label')
        }
        if(val){
          copyCheckedList.push(this.label);
        }else{
          const index = copyCheckedList.indexOf(this.label);
          copyCheckedList.splice(index, 1);
        }
        this.$parent.onChangeGroup(copyCheckedList)
      }else{
        this.indeterminateVal = false;
        this.$emit("change", val);
      }
    }
  },
  computed: {
    getChecked(){
      if(this.existGroup){
        return this.$parent.value.indexOf(this.label) > -1
      }else{
        return this.value
      }
    },
    getDisabledValue(){
      return (this.root && this.root.disabled) || this.disabled;
    },
    getInlineValue(){
      return this.root && this.root.inline;
    },
    getLargeValue(){
      return (this.root && this.root.large) || this.large;
    },
    getAlignRightValue(){
      return (this.root && this.root.alignRight) || this.alignRight;
    },
  }
};
</script>

<style lang="scss" scoped>
.f-checkbox {
  // margin-bottom: 10px;
  &-label {
    position: relative;
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    cursor: pointer;
    .f-checkbox-input {
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      z-index: -1;
    }
    &.large {
      font-size: 20px;
    }
    &.reverse {
      flex-direction: row-reverse;
      justify-content: space-between;
      width: 100%;
      .f-checkbox-control {
        margin-left: 10px;
        margin-right: 0;
      }
      .f-checkbox-input {
        left: 100%;
        transform: translateX(-100%);
      }
    }
  }
  &-control {
    display: block;
    background: #f5f8fa;
    width: 1em;
    height: 1em;
    margin-right: 10px;
    font-size: inherit;
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
      inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    border-radius: 3px;
    &.active, &.indeterminate {
      background: #137cbd;
    }
    &.active::before {
      display: block;
      width: 1em;
      height: 1em;
      content: "";
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0 0 12 5z' fill='%23fff'/%3E%3C/svg%3E");
    }
    
    &.indeterminate::before {
      display: block;
      width: 1em;
      height: 1em;
      content: "";
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z' fill='%23fff'/%3E%3C/svg%3E");
    }
  }
  &-label.f-disabled {
     .f-checkbox-control {
       box-shadow: none;
       background: rgba(206,217,224,.5);
       cursor: not-allowed;
       &.active {
         background: rgba(19,124,189,.5);
       }
     }
     .f-checkbox-text {
       cursor: not-allowed;
       color: rgba(92,112,128,.6);
     }
  }
}
</style>

