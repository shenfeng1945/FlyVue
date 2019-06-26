<template>
  <div class="f-checkbox">
    <label class="f-checkbox-label" :class="{large,'reverse': alignIndicator === 'left'}">
      <input
        type="checkbox"
        class="f-checkbox-input"
        :checked="value"
        @change="onChange"
        ref="checkbox"
      >
      <span class="f-checkbox-control" :class="{active: value,indeterminate: indeterminateVal}"></span>
      <span :style="{fontSize: large ? '16px' : '14px'}">
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
    alignIndicator: {
      type: String,
      default: "right"
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    label: {
      
    }
  },
  data(){
    return {
      indeterminateVal: false,
      multiple: this.$parent.$options.name === 'FlyCheckboxGroup'
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
      if (newVal) {
        this.indeterminateVal = newVal;
        this.$refs.checkbox.indeterminate = newVal;
      }
    }
  },
  methods: {
    onChange(e) {
      this.indeterminateVal = false;
      this.$emit("change", e.target.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
.f-checkbox {
  &-label {
    position: relative;
    display: inline-flex;
    align-items: center;
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
      .f-checkbox-control {
        margin-left: 10px;
        margin-right: 0px;
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
}
</style>

