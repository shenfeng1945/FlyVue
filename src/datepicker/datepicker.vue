<template>
  <div class="f-date-picker" v-click-outside="onBlurInput">
    <f-input type="text" :placeholder="placeholder" @focus="onFocusInput"/>
    <div class="f-date-picker-pop" v-if="popVisible">
      <div class="f-date-picker-nav">
        <span>
          <f-icon name="left"></f-icon>
          <f-icon name="left"></f-icon>
        </span>
        <span @click="onClickYear">2019 年</span>
        <span @click="onClickMonth">05 月</span>
        <span>
          <f-icon name="right"></f-icon>
          <f-icon name="right"></f-icon>
        </span>
      </div>
      <div class="f-date-picker-panels">
        <div class="f-date-picker-content" v-if="mode === 'years'">年</div>
        <div class="f-date-picker-content" v-else-if="mode === 'months'">月</div>
        <div class="f-date-picker-content" v-else>
          <div v-for="(rowDay,r) in getDays" :key="r">
            <span v-for="(day, c) in rowDay" :key="c">{{day}}</span>
          </div>
        </div>
      </div>
      <div class="f-date-picker-action"></div>
    </div>
  </div>
</template>

<script>
import Input from "../input/Input";
import Icon from "../icon/Icon";
import ClickOutSide from "../cascader/cascader-click-outside";
import helper from "./helper";
export default {
  name: "FlyDatePicker",
  components: {
    "f-input": Input,
    "f-icon": Icon
  },
  directives: {
    "click-outside": ClickOutSide
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
  computed: {
    getDays() {
      let columns = ["一", "二", "三", "四", "五", "六", "日"];
      let date = new Date();
      let firstDayInWeek =
        helper.firstDayOfMonth(date).getDay() === 0
          ? 6
          : helper.firstDayOfMonth(date).getDay() - 1;
      let currentMonthAllDays = helper.lastDayOfMonth(date).getDate();
      let beforeMonthAllDays = helper.lastDayOfPrevMonth(date).getDate();
      let prevArray = [];
      let currentArray = [];
      let nextArray = [];
      for (
        let i = beforeMonthAllDays;
        i > beforeMonthAllDays - firstDayInWeek;
        i--
      ) {
        prevArray.unshift(i);
      }
      for (let i = 1; i <= currentMonthAllDays; i++) {
        currentArray.push(i);
      }
      for (let i = 1; i <= 42 - currentMonthAllDays - firstDayInWeek; i++) {
        nextArray.push(i);
      }
      const nativeDays = [...prevArray, ...currentArray, ...nextArray];
      const cropDays = [0, 1, 2, 3, 4, 5].map(n =>
        nativeDays.slice(n * 7, n * 7 + 7)
      );
      return cropDays;
    }
  },
  methods: {
    onClickYear() {
      this.mode = "years";
    },
    onClickMonth() {
      this.mode = "months";
    },
    onFocusInput() {
      this.popVisible = true;
    },
    onBlurInput() {
      this.popVisible = false;
    }
  }
};
</script>

<style scoped lang="scss">
.f-date-picker {
  position: relative;
  &-pop {
    position: absolute;
    border: 1px solid red;
    width: 300px;
    left: 0;
    top: 100%;
  }
}
</style>
