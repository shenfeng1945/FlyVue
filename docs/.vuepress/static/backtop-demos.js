/**
 * 基础用法
 * */
export const basicBackTopSource = {
    desc: '该组件接受 <code>speed</code> 属性，用于控制页面回到顶部的速度。',
    code: `
<template>
   <p>Scroll down to see the bottom-right button.</p>
   <f-backtop speed="slow" :visibility-height="200"></f-backtop>
</template>   
    `
};

/**
 * 自定义显示内容
 * */
export const customBackTopSource = {
    desc: '',
    code: `
<template>
   <p>Scroll down to see the bottom-right button.</p>
   <f-backtop :right="100" @click="onClick">
      <div
        style="
          height: 100%;
          width: 100%;
          background-color: #1088e9;
          box-shadow: 0 0 6px rgba(0,0,0, .12);
          line-height: 40px;
          border-radius: 3px;
          color: #fff;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        ">
            up
      </div>
   </f-backtop>
</template>

<script>
 export default {
     methods: {
         onClick(){
             console.log('点击了')
         }
     }
 }
<\/script>
    `
};