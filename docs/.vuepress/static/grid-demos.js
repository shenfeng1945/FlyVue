/**
 * 基础用法
 */
export const basicGrid = {
    desc: '使用 <code>row</code> 和 <code>col</code> 组件，并通过 <code>col</code> 组件的 span 属性我们就可以自由地组合布局。',
    code: `
 <f-row class="f-row">
    <f-col span="24"> <div class="grid-content"></div> </f-col>
 </f-row>
 
 <f-row class="f-row">
     <f-col span="12"> <div class="grid-content"></div> </f-col>
     <f-col span="12"> <div class="grid-content"></div> </f-col>
 </f-row>
 
 <f-row class="f-row">
     <f-col span="8"> <div class="grid-content"></div> </f-col>
     <f-col span="8"> <div class="grid-content"></div> </f-col>
     <f-col span="8"> <div class="grid-content"></div> </f-col>
 </f-row>
 
 <f-row class="f-row">
     <f-col span="6"> <div class="grid-content"></div> </f-col>
     <f-col span="6"> <div class="grid-content"></div> </f-col>
     <f-col span="6"> <div class="grid-content"></div> </f-col>
     <f-col span="6"> <div class="grid-content"></div> </f-col>
 </f-row>   
 
 <style>
 .f-row {
    margin-bottom: 24px;
    & > div:nth-child(2n+1) .grid-content{
        background: #8a9ba8;
    }
    & > div:nth-child(2n) .grid-content{
        background: #bfccd6;
    }
    .grid-content{
        border-radius: 4px;
        min-height: 36px;
    }
 }
</style>
    `
};

/**
 * 分栏间隔
 */
export const divideLayout = {
    desc: 'Row 组件提供 <code>gutter</code> 属性来指定每一秒之间的间隔',
    code: `
 <f-row class="f-row" gutter="20">
     <f-col span="6"> <div class="grid-content"></div> </f-col>
     <f-col span="6"> <div class="grid-content"></div> </f-col>
     <f-col span="6"> <div class="grid-content"></div> </f-col>
     <f-col span="6"> <div class="grid-content"></div> </f-col>
 </f-row>
`
};
