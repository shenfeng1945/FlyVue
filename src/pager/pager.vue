<template>
  <div class="f-pager" :class="{'f-background': background}">
      <span class="f-pager-nav" :class="{disabled: currentPage === 1}" @click="onClickPage(currentPage-1)">
        <f-icon name="left"></f-icon>
      </span>
    <template v-for="(page,index) in pages">
      <template v-if="page === currentPage">
        <span class="f-pager-item active" :key="index">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <f-icon class="f-pager-separator" name="dots" :key="index">{{page}}</f-icon>
      </template>
      <template v-else>
        <span class="f-pager-item" @click="onClickPage(page)" :key="index">{{page}}</span>
      </template>
    </template>
    <span class="f-pager-nav" :class="{disabled: currentPage === totalPage}" @click="onClickPage(currentPage+1)">
        <f-icon name="right"></f-icon>
      </span>
  </div>
</template>

<script>
import Icon from '../icon/Icon';
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
    },
    onChange: Function,
    background: {
      type: Boolean,
      default: false
    }
  },
  computed: {
      pages(){
        return this.NumberToPager();
      }
  },
  components: {
    'f-icon': Icon
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
    },
    onClickPage(page){
      if(page < 1 || page > this.totalPage)return;
      this.$emit('update:currentPage', page);
      this.onChange && this.onChange(page);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '_variable';
  $width: 20px;
  $height: 20px;
  $font-size: 14px;
  .f-pager{
    display: flex;align-items: center;
    user-select: none;
      &-nav{
        margin: 0 4px; display: inline-flex;justify-content: center;align-items: center;
        height: $height; width: $height; font-size: $font-size;
        cursor: pointer;
        &.disabled{ 
          cursor: not-allowed;
          svg{ fill: darken($grey, 30%); } 
        }
        &:hover{color: $active-color}
      }
      &-item{
        padding: 0 4px; display: inline-flex; box-sizing: border-box;
        justify-content: center; align-items: center; cursor: pointer; min-width: $width; height: $height;
        margin: 0 4px; font-size: $font-size;
        &.active,&:hover{ color: $button-primary-active-bg; }
        &.active{ cursor: default; }
        &.separator{ border: none; cursor: pointer; }
      }
      &.f-background{
        .f-pager-nav{
          background: #f4f4f5;
          border-radius: 2px;
          &:hover{color:inherit;}
        }
        .f-pager-item{
          background: #f4f4f5;
          border-radius: 2px;
          &.active{
            background: #106ba3;
            color: #fff;
          }
        }
      }
  }
</style>


