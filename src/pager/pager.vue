<template>
  <div class="f-pager">
    <span v-for="(item,index) in pages"
          :key="index"
          class="f-pager-item"
          :class="{active: item === currentPage, separator: item === '...'}"
    >
      {{item}}
    </span>
  </div>
</template>

<script>
export default {
  name: "FlyPager",
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      pages: this.NumberToPager()
    };
  },
  methods: {
    NumberToPager() {
      const { totalPage, currentPage } = this;
      let result = [
        1,
        currentPage,
        currentPage - 1,
        currentPage - 2,
        currentPage + 1,
        currentPage + 2,
        totalPage
      ].sort((a,b) => a - b)
       .filter(n => n > 0 && n <= totalPage);
      // 去重
      result = [...new Set(result)];
      result = result.reduce((prev,current,index,array) => {
        prev.push(current);
        array[index+1] !== undefined && array[index+1] - current > 1 && prev.push('...');
        return prev;
      },[]);
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../style/variable';
  .f-pager{
    &-item{
      border: 1px solid $grey;
      border-radius: $border-radius;
      padding: 0 4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      min-width: 20px;
      height: 20px;
      margin: 0 4px;
      font-size: 12px;
        &.active,&:hover{
          border-color: $button-primary-active-bg;
        }
      &.active{
        cursor: default;
      }
      &.separator{
        border: none;
      }
    }
  }
</style>


