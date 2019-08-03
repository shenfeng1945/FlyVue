<template>
  <div
    class="f-radio"
    :class="{'f-disabled': disabledValue, 'f-large': largeValue }"
    :style="!inlineValue ? {'margin-bottom': '10px'} : {'margin-right': '20px'}"
  >
    <label :class="{'f-reverse': alignRightValue}">
      <input
        :name="root.name"
        type="radio"
        class="f-radio-input"
        :checked="checked"
        :disabled="disabledValue"
        @change="onChangeRadio"
      >
      <span
        class="f-radio-control"
        :class="{'f-checked': checked}"
      ></span>
      <span class="f-radio-text">
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "FlyRadio",
  props: {
    label: [Number, String],
    disabled: {
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
    }
  },
  inject: ["root", "eventBus"],
  computed: {
    checked() {
      return this.root.value === this.label;
    },
    disabledValue() {
      return this.root.disabled || this.disabled;
    },
    inlineValue() {
      return this.root.inline;
    },
    largeValue() {
      return this.root.large || this.large;
    },
    alignRightValue(){
      return this.root.alignRight || this.alignRight;
    }
  },
  methods: {
    onChangeRadio(e) {
      if (e.target.checked) {
        this.eventBus.$emit("change", this.label);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.f-radio {
  > label {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
    &:hover {
      .f-radio-control {
        background: #f5f8fa;
      }
    }
    .f-radio-input {
      cursor: pointer;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
    }
    .f-radio-control {
      box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
        inset 0 -1px 0 rgba(16, 22, 26, 0.1);
      width: 1.15em;
      height: 1.15em;
      border-radius: 50%;
      background-color: lighten(#f5f8fa, 80%);
      &.f-checked {
        background-color: #137cbd;
        background-image: linear-gradient(
          180deg,
          hsla(0, 0%, 100%, 0.1),
          hsla(0, 0%, 100%, 0)
        );
        color: #fff;
        &::before {
          background-image: radial-gradient(#fff, #fff 28%, transparent 32%);
          display: block;
          width: 1.15em;
          height: 1.15em;
          content: "";
        }
      }
    }
    .f-radio-text {
      margin-left: 10px;
    }
  }
  &.f-large {
    > label {
      font-size: 16px;
    }
  }
  > label.f-reverse {
    flex-direction: row-reverse;
    justify-content: space-between;
    .f-radio-text {
      margin-left: 0px;
    }
  }
}
.f-radio.f-disabled {
  label {
    cursor: not-allowed;
    > * {
      cursor: not-allowed;
      color: rgba(92, 112, 128, 0.6);
    }
  }
  label:hover {
    .f-radio-control:not(.f-checked) {
      background: rgba(206, 217, 224, 0.5);
    }
  }
  .f-radio-control {
    background: rgba(206, 217, 224, 0.5);
    box-shadow: none;
    &.f-checked {
      background: rgba(19, 124, 189, 0.5);
    }
  }
}
</style>
