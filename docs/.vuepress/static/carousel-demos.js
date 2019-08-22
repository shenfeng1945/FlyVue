/**
 * 基本用法
 */
 
export const basicCarouselSource = {
  desc: '通过设置 <code>trigger</code>属性来触发指示器, 设置 <code>autoPlay</code>属性设置是否自动播放。',
  code: `
<template>
  <f-slides
    :selected.sync="selected1"
    :autoPlay="false"
    trigger="hover"
    height="150px">
      <f-slides-item name="1">
        <div class="box box1">Content 1</div>
      </f-slides-item>
      <f-slides-item name="2">
        <div class="box box2">Content 2</div>
      </f-slides-item>
      <f-slides-item name="3">
        <div class="box box3">Content 3</div>
      </f-slides-item>
  </f-slides>
  
  <f-slides
    :selected.sync="selected2"
    :autoPlay="true"
    trigger="click"
    height="150px">
      <f-slides-item name="1">
        <div class="box box1">Content 1</div>
      </f-slides-item>
      <f-slides-item name="2">
        <div class="box box2">Content 2</div>
      </f-slides-item>
      <f-slides-item name="3">
        <div class="box box3">Content 3</div>
      </f-slides-item>
  </f-slides>
</template>

<script>
  export default {
    data(){
      return {
        selected1: '1'
        selected2: '1'
      }
    }
  }
<\/script>

<style scoped lang="scss">
.box {display: flex;justify-content: center;align-items: center;font-size: 24px;height: 100%;}
.box1 {background: #48AFF0;}
.box2 {background: #3dcc91;}
.box3 {background: #ffb366;}
</style>
  `
}

/**
 * 方向
 */
export const directionCarouselSource = {
  desc: '',
  code: `
<template>
  <f-slides
    :selected.sync="selected"
    :autoPlay="false"
    trigger="click"
    direction="vertical"
    height="150px">
      <f-slides-item name="1">
        <div class="box box1">Content 1</div>
      </f-slides-item>
      <f-slides-item name="2">
        <div class="box box2">Content 2</div>
      </f-slides-item>
      <f-slides-item name="3">
        <div class="box box3">Content 3</div>
      </f-slides-item>
  </f-slides>
</template>

<script>
 export default {
   data(){
     return {
       selected: '1'
     }
   }
 }
<\/script>

<style scoped lang="scss">
.box {display: flex;justify-content: center;align-items: center;font-size: 24px;height: 100%;}
.box1 {background: #48AFF0;}
.box2 {background: #3dcc91;}
.box3 {background: #ffb366;}
</style>
  `
}