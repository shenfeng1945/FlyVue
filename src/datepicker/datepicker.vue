<template>
  <div class="f-date-picker" v-click-outside="onBlurInput">
    <f-input
      ref="fInput"
      type="text"
      :placeholder="placeholder"
      @focus="onFocusInput"
      :value="formatDate(value)"
      @input="onInput"
      @change="onChange"
    />
    <div class="f-date-picker-pop" v-if="popVisible">
      <div class="f-date-picker-nav">
        <span :class="c('prev')">
          <f-icon :class="c('prev-year')" @click="onClickPrevYear" name="dleft"></f-icon>
          <f-icon :class="c('prev-month')" @click="onClickPrevMonth" name="left"></f-icon>
        </span>
        <span :class="c('year-month')">
          <span @click="onClickYear">{{display.year}}年</span>
          &nbsp;
          <span @click="onClickMonth">{{String(display.month+1).padStart(2,'0')}}月</span>
        </span>
        <span :class="c('next')">
          <f-icon :class="c('next-month')" @click="onClickNextMonth" name="right"></f-icon>
          <f-icon :class="c('next-year')" @click="onClickNextYear" name="dright"></f-icon>
        </span>
      </div>
      <div :class="c('panels')">
        <div :class="c('content')" v-if="mode === 'years'">年</div>
        <div :class="c('content')" v-else-if="mode === 'months'">月</div>
        <div :class="c('content')" v-else>
          <div :class="c('weekdays')">
            <span v-for="week in weekdays" :key="week">{{ week }}</span>
          </div>
          <div :class="c('row')" v-for="(rowDay, r) in visibleDays" :key="r">
            <span
              :class="[c('cell'),{currentMonth: day.isCurrentMonth, selected: isSelected(day.value)}]"
              v-for="(day, i) in rowDay"
              :key="i"
              @click="onClickCell(day.value)"
            >{{day.value.getDate()}}</span>
          </div>
        </div>
      </div>
      <div :class="c('actions')">
        <f-button @click="onClickToday">今天</f-button>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../input/Input";
import Icon from "../icon/Icon";
import ClickOutSide from "../cascader/cascader-click-outside";
import helper from "./helper";
import Button from "../button/button";

export default {
  name: "FlyDatePicker",
  components: {
    "f-input": Input,
    "f-icon": Icon,
    "f-button": Button
  },
  directives: {
    "click-outside": ClickOutSide
  },
  props: {
    placeholder: {
      type: String,
      default: "请选择日期"
    },
    firstDayOfWeek: {
      type: String,
      default: "一"
    },
    value: {
      type: Date,
      default: () => new Date()
    }
  },
  data() {
    const [year, month] = helper.getYearMonthDate(this.value);
    return {
      popVisible: false,
      mode: "days", //months,years
      weekdays: null,
      display: { year, month }
    };
  },
  created() {
    this.initWeekDays();
  },
  computed: {
    visibleDays() {
      let date = new Date(this.display.year, this.display.month, 1);
      let firstDayOfMonth = helper.firstDayOfMonth(date);
      let currentMonthAllDays = helper.lastDayOfMonth(date).getDate();
      let firstDayInWeek =
        firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;
      let firstDayOfPanels =
        firstDayOfMonth - firstDayInWeek * 24 * 3600 * 1000;
      let panelDaysArray = [];
      for (let i = 0; i < 42; i++) {
        let isCurrentMonth = false;
        if (i >= firstDayInWeek && i < firstDayInWeek + currentMonthAllDays) {
          isCurrentMonth = true;
        }
        panelDaysArray.push({
          value: new Date(firstDayOfPanels + i * 24 * 3600 * 1000),
          isCurrentMonth
        });
      }
      // [[new Date(),new Date()],[new Date()]...]
      return [0, 1, 2, 3, 4, 5].map(n =>
        panelDaysArray.slice(n * 7, n * 7 + 7)
      );
    }
  },
  methods: {
    initWeekDays() {
      let basicArray = ["一", "二", "三", "四", "五", "六", "日"];
      let index = basicArray.findIndex(item => item === this.firstDayOfWeek);
      if (index > 0) {
        basicArray = basicArray
          .slice(index, 7)
          .concat(basicArray.splice(0, index));
      }
      this.weekdays = basicArray;
    },
    c(className) {
      return `f-date-picker-${className}`;
    },
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
    },
    onClickCell(day) {
      this.$emit("input", day);
      const [year, month] = helper.getYearMonthDate(day);
      this.display = { year, month };
      // this.popVisible = false;
    },
    formatDate(date) {
      let [year, month, day] = helper.getYearMonthDate(date);
      month = String(month + 1).padStart(2, "0");
      day = String(day).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    onClickPrevMonth() {
      const oldDay = helper.getYearMonthDate(this.value)[2];
      const oldDate = new Date(this.display.year, this.display.month, oldDay);
      const newDate = helper.addMonth(oldDate, -1);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
      this.$emit("input", newDate);
    },
    onClickPrevYear() {
      const oldDay = helper.getYearMonthDate(this.value)[2];
      const oldDate = new Date(this.display.year, this.display.month, oldDay);
      const newDate = helper.addYear(oldDate, -1);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
      this.$emit("input", newDate);
    },
    onClickNextMonth() {
      const oldDay = helper.getYearMonthDate(this.value)[2];
      const oldDate = new Date(this.display.year, this.display.month, oldDay);
      const newDate = helper.addMonth(oldDate, 1);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
      this.$emit("input", newDate);
    },
    onClickNextYear() {
      const oldDay = helper.getYearMonthDate(this.value)[2];
      const oldDate = new Date(this.display.year, this.display.month, oldDay);
      const newDate = helper.addYear(oldDate, 1);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
      this.$emit("input", newDate);
    },
    isSelected(data) {
      const [y, m, d] = helper.getYearMonthDate(data);
      const [y1, m1, d1] = helper.getYearMonthDate(this.value);
      return y === y1 && m === m1 && d === d1;
    },
    onClickToday() {
      const date = new Date();
      const [year, month, day] = helper.getYearMonthDate(date);
      this.display = { year, month };
      this.$emit("input", new Date(year, month, day));
    },
    onInput(value) {
      const reg = /^\d{4}-\d{2}-\d{2}$/g;
      if (reg.test(value)) {
        const [year, month, day] = value.split("-");
        this.$emit("input", new Date(year, +month - 1, day));
        this.display = { year: +year, month: +month - 1 };
      }
    },
    onChange(value) {
      const reg = /^\d{4}-\d{2}-\d{2}$/g;
      if (!reg.test(value)) {
        this.$refs.fInput.setNativeValue(this.formatDate(this.value));
      }
    }
  }
};
</script>

<style scoped lang="scss">
.f-date-picker {
  position: relative;
  user-select: none;
  &-pop {
    position: absolute;
    border: 1px solid red;
    width: 230px;
    left: 0;
    top: 100%;
    padding: 5px;
  }
  &-nav {
    display: flex;
    justify-content: space-between;
    svg {
      width: 12px;
      height: 12px;
    }
  }
  &-prev-month {
    margin-left: 1em;
  }
  &-next-month {
    margin-right: 1em;
  }
  &-content {
    .f-date-picker-weekdays {
      > span {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
      }
    }
    .f-date-picker-row {
      > .f-date-picker-cell {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        color: rgba(92, 112, 128, 0.5);
        cursor: pointer;
        &:hover {
          background: #d8e1e8;
          color: #182026;
        }
        &.currentMonth {
          color: #182026;
        }
        &.selected {
          outline: 1px solid red;
        }
      }
    }
  }
  &-actions {
  }
}
</style>
