<template>
  <div class="f-pager">
    <span v-for="item in pages" :key="item">{{item}}</span>
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
      ];
      // 排序
      result = result.sort((a,b) => a - b);
      result = result.filter(n => n > 0 && n <= totalPage);
      // 去重
      result = [...new Set(result)];
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>


