<template>
  <div class="f-select">
    <select :class="{'f-minimal': minimal}" :value="value" @change="changeSelect">
      <slot></slot>
    </select>
    <f-icon class="icon-up" name="caret-up"></f-icon>
    <f-icon class="icon-down" name="caret-down"></f-icon>
  </div>
</template>

<script>
import Icon from "../icon/Icon";
export default {
  name: "FlySelect",
  props: {
    value: String|Number,
    minimal: {
      type: Boolean,
      default: false
    }
  },
  components: {
    "f-icon": Icon
  },
  methods: {
    changeSelect(e) {
      this.$emit("update", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.f-select {
  select {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    vertical-align: middle;
    text-align: left;
    font-size: 14px;
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
      inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-color: #f5f8fa;
    color: #182026;
    border-radius: 3px;
    height: 30px;
    padding: 0 25px 0 10px;
    text-transform: none;
    font-family: inherit;
    line-height: 1.15;
    margin: 0;
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: 100%;

    &.f-minimal {
      box-shadow: none;
      background: none;
      &:hover {
        background: rgba(167, 182, 194, 0.3);
        text-decoration: none;
        color: #182026;
      }
    }
  }
  position: relative;
  display: inline-block;
  vertical-align: middle;

  > svg {
    position: absolute;
    right: 5px;
    transform: translateY(-50%);
    fill: #5c7080;
  }

  > .icon-up {
    top: 40%;
  }
  > .icon-down {
    top: 60%;
  }
}
</style>


