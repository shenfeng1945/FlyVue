<template>
  <div class="f-date-picker">
    <f-input type="text" :placeholder="placeholder" @focus="onFocusInput"/>
    <div class="f-date-picker-pop" v-if="popVisible">
      <div class="f-date-picker-nav">
        <span>
          <f-icon name="left"></f-icon>
          <f-icon name="left"></f-icon>
        </span>
        <span @click="onClickYear">
          2019 年
        </span>
        <span @click="onClickMonth">
          05 月
        </span>
        <span>
          <f-icon name="left"></f-icon>
          <f-icon name="left"></f-icon>
        </span>
      </div>
      <div class="f-date-picker-panels">
        <div class="f-date-picker-content" v-if="mode === 'years'">年</div>
        <div class="f-date-picker-content" v-else-if="mode === 'months'">
          月
        </div>
        <div class="f-date-picker-content" v-else>日</div>
      </div>
      <div class="f-date-picker-action"></div>
    </div>
  </div>
</template>

<script>
import Input from "../input/Input";
import Icon from "../icon/Icon";
export default {
  name: "FlyDatePicker",
  components: {
    "f-input": Input,
    "f-icon": Icon
  },
  props: {
    placeholder: {
      type: String,
      default: "请选择日期"
    }
  },
  data() {
    return {
      popVisible: false,
      mode: "days" //months,years
    };
  },
  methods: {
    onClickYear() {
      this.mode = "years";
    },
    onClickMonth() {
      this.mode = "months";
    },
    onFocusInput(){
      this.popVisible = true
    },
  }
};
</script>

<style scoped lang="scss">
.f-date-picker {
  &-pop {
    border: 1px solid red;
    width: 300px;
  }
}
</style>
