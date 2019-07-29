<template>
  <button
    class="f-button"
    :type="type"
    :class="[
      `${intent}`,
      circle && `f-circle`,
      loading && `is-loading`,
      (disabled || loading) && `f-disabled`,
      minimal && 'f-minimal'
    ]"
    @click="$emit('click')"
    :disabled="disabled || loading"
  >
    <template v-if="leftIcon">
      <template v-for="icon of getLeftIconList">
         <f-icon :name="icon" :key="icon" :style="noMargin" style="margin-right: 0.3em;"></f-icon>
      </template>
    </template>
    <f-icon class="loading" name="loading" v-if="loading"></f-icon>
    <div class="button-content">
      <slot></slot>
    </div>
    <template v-if="rightIcon">
      <template v-for="icon of getRightIconList">
         <f-icon :name="icon" :key="icon" :style="noMargin" style="margin-left: 0.3em;"></f-icon>
      </template>
    </template>
  </button>
</template>
<script>
import Icon from "../icon/Icon";
export default {
  name: 'FlyButton',
  props: {
    leftIcon: String,
    rightIcon: String,
    loading: {
      type: Boolean,
      default: false
    },
    intent: {
      type: String,
      default: "default",
      validator(value) {
        return (
          ["default", "primary", "warn", "success", "danger"].indexOf(value) >
          -1
        );
      }
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    type: {
      type: String,
      default: "button",
      validator(value) {
        return ["button", "submit"].indexOf(value) > -1;
      }
    },
    minimal: Boolean
  },
  data() {
    return {
      noMargin: null
    };
  },
  components: {
    "f-icon": Icon
  },
  mounted() {
    const text = this.$el.querySelector(".button-content").textContent;
    if (!text) {
      this.noMargin = {
        marginLeft: 0,
        marginRight: 0
      };
    }
  },
  computed: {
    getLeftIconList(){
      return this.leftIcon.trim().split(' ');
    },
    getRightIconList(){
      return this.rightIcon.trim().split(' ');
    }
  }
};
</script>
<style lang="scss" scoped>
@import 'style/_variable.scss';
.f-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  background-color: $button-bg;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
    inset 0 -1px 0 rgba(16, 22, 26, 0.1);
  border: none;
  

  &.primary {
    background-color: $button-primary-bg;
    color: $button-intent-color;
  }
  &.primary:hover,
  &.primary.is-loading:hover {
    background-color: $button-primary-hover-bg;
  }
  &.primary:active,
  &.primary.is-loading:active {
    background-color: $button-primary-active-bg;
  }
  &.primary.f-disabled,
  &.primary.is-loading.disabled {
    background-color: $button-primary-disabled-bg;
    cursor: not-allowed;
    color: $button-intent-disabled-color;
  }

  &.success {
    background-color: $button-success-bg;
    color: $button-intent-color;
  }
  &.success:hover,
  &.success.is-loading:hover {
    background-color: $button-success-hover-bg;
  }
  &.success:active,
  &.success.is-loading:active {
    background-color: $button-success-active-bg;
  }
  &.success.f-disabled,
  &.success.is-loading.f-disabled{
    background-color: $button-success-disabled-bg;
    color: $button-intent-disabled-color;
  }

  &.warn {
    background: $button-warn-bg;
    color: $button-intent-color;
  }
  &.warn:hover,
  &.warn.is-loading {
    background: $button-warn-hover-bg;
  }
  &.warn:active,
  &.warn.is-loading {
    background: $button-warn-active-bg;
  }
  &.warn.f-disabled,
  &.warn.f-disabled.is-loading{
    background-color: $button-warn-disabled-bg;
    color: $button-intent-disabled-color;
  }

  &.danger {
    background: $button-danger-bg;
    color: $button-intent-color;
  }
  &.danger:hover,
  &.danger.is-loading {
    background: $button-danger-hover-bg;
  }
  &.danger:active,
  &.danger.is-loading {
    background: $button-danger-active-bg;
  }
  &.danger.f-disabled,
  &.danger.f-disabled.is-loading{
    background-color: rgba(219,55,55,.5);
    color: $button-intent-disabled-color;
  }

  > .icon {
    // order: 1;
    // margin-left: 0;
    // margin-right: 0.3em;
  }
  > .button-content {
    // order: 2;
  }
  &:hover,
  &.is-loading {
    background-color: #ebf1f5;
  }
  &:focus,
  &.is-loading {
    outline: none;
  }
  &:active,
  &.is-loading {
    background-color: $button-active-bg;
  }
  &.f-disabled{
    background-color: rgba(206,217,224,.5);
    color: rgba(92,112,128,.6);
    cursor: not-allowed;
  }
  &.icon-right {
    > .icon {
      // order: 2;
      // margin-right: 0;
      // margin-left: 0.3em;
    }
    > .button-content {
      // order: 1;
    }
  }
  > .loading {
    animation: spin 1.2s infinite linear;
    margin-right: .5em;
  }
  &.f-circle {
    border-radius: 50%;
    width: 32px;
    padding: 0;
  }
  &.f-minimal {
    box-shadow: none;
    background: white;
    &:hover {background: rgba(167, 182, 194, 0.3);}
    &:active{background: rgba(115,134,148,.3);}
    &.f-disabled{background: none;color: $disabled-color;}
    
    &.success{color: $button-success-hover-bg;}
    &.success:hover{background: $button-intent-success-hover-bg;}
    &.success:active{background: $button-intent-success-active-bg;}
    &.success.f-disabled{background: none;color: $button-intent-success-disabled-color;}
    
    &.primary{color: $button-primary-hover-bg;}
    &.primary:hover{background: $button-intent-primary-hover-bg;}
    &.primary:active{background: $button-intent-primary-active-bg;}
    &.primary.f-disabled{background: none;color: $button-intent-primary-disabled-color;}
    
    &.warn{color: $button-warn-hover-bg;}
    &.warn:hover{background: $button-intent-warn-hover-bg;}
    &.warn:active{background: $button-intent-warn-active-bg;}
    &.warn.f-disabled{background: none;color: $button-intent-warn-disabled-color;}
    
    &.danger{color: $button-danger-hover-bg;}
    &.danger:hover{background: $button-intent-danger-hover-bg;}
    &.danger:active{background: $button-intent-danger-active-bg;}
    &.danger.f-disabled{background: none;color: $button-intent-danger-disabled-color;}
  }

  > svg {
    fill: currentColor;
  }
}
</style>
