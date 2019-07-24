<template>
  <div class="f-radio">
    <label>
      <input :name="root.name" type="radio" class="f-radio-input" :checked="checked" @change="onChangeRadio">
      <span class="f-radio-control" :class="{'f-checked': checked}"></span>
      <span style="margin-left: 10px">
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "FlyRadio",
  props: {
    label: [Number, String]
  },
  inject: ['root','eventBus'],
  computed: {
    checked() {
      return this.root.value === this.label;
    }
  },
  methods: {
    onChangeRadio(e){
      if(e.target.checked){
        this.eventBus.$emit('change', this.label)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.f-radio label {
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
   &:hover{
    .f-radio-control{
      background: #f5f8fa;
    }
  }
  .f-radio-input {
    cursor: pointer;
    position: absolute;
    left: 0;top: 0;opacity: 0;
  }
  .f-radio-control {
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
      inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    width: 1em;
    height: 1em;
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
        width: 1em;
        height: 1em;
        content: "";
      }
    }
  }
 
}
</style>
