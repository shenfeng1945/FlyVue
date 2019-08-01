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
export const divideGrid = {
    desc: 'Row 组件提供 <code>gutter</code> 属性来指定每一栏之间的间隔，默认为0',
    code: `
 <f-row gutter="20">
     <f-col span="6"> <div class="grid-content"></div> </f-col>
     <f-col span="6"> <div class="grid-content"></div> </f-col>
     <f-col span="6"> <div class="grid-content"></div> </f-col>
     <f-col span="6"> <div class="grid-content"></div> </f-col>
 </f-row>
`
};

/**
 * 混合布局
 */
 
 export const hybridGrid = {
     desc: '',
     code: `
<f-row gutter="20">
    <f-col span="16"> <div class="grid-content"></div> </f-col>
    <f-col span="8"> <div class="grid-content"></div> </f-col>
</f-row>

<f-row gutter="20">
    <f-col span="8"> <div class="grid-content"></div> </f-col>
    <f-col span="8"> <div class="grid-content"></div> </f-col>
    <f-col span="4"> <div class="grid-content"></div> </f-col>
    <f-col span="4"> <div class="grid-content"></div> </f-col>
</f-row>

<f-row gutter="20">
    <f-col span="4"> <div class="grid-content"></div> </f-col>
    <f-col span="16"> <div class="grid-content"></div> </f-col>
    <f-col span="4"> <div class="grid-content"></div> </f-col>
</f-row>
     `
 }
 
 /**
  * 分栏偏移
  */
  
export const offsetGrid = {
    desc: '控制 Col 组件的<code>offset</code>属性可以指定分栏偏移的栏树。',
    code: `
<f-row gutter="20">
    <f-col span="6"> <div class="grid-content"></div> </f-col>
    <f-col span="6" offset="6"> <div class="grid-content"></div> </f-col>
</f-row>

<f-row gutter="20">
    <f-col span="6" offset="6"> <div class="grid-content"></div> </f-col>
    <f-col span="6" offset="6"> <div class="grid-content"></div> </f-col>
</f-row>
    `
}

/**
 * 对齐方式
 */
export const alignGrid = {
    desc: '通过设置 Row 组件的<code>align</code>属性来控制分栏的对齐方式。',
    code: `
<f-row align="left">
    <f-col span="6"> <div class="grid-content"></div> </f-col>
    <f-col span="6"> <div class="grid-content"></div> </f-col>
</f-row>

<f-row align="center">
    <f-col span="6"> <div class="grid-content"></div> </f-col>
    <f-col span="6"> <div class="grid-content"></div> </f-col>
</f-row>

<f-row align="right">
    <f-col span="6"> <div class="grid-content"></div> </f-col>
    <f-col span="6"> <div class="grid-content"></div> </f-col>
</f-row>
    `
}

/**
 * 响应式布局
 */
 
export const responseGrid = {
   desc: '通过设置 Col 组件的属性<code>ipad</code> <code>narrowPc</code> <code>pc</code> <code>widePc</code>来对分栏做响应式布局。',
   code: `
<f-row>
    <f-col span="12" :widePc="{span: 14}" :pc="{span: 16}" :narrowPc="{span: 18}" :ipad="{span: 20}"> <div class="grid-content"></div> </f-col>
    <f-col span="12" :widePc="{span: 10}" :pc="{span: 8}" :narrowPc="{span: 6}" :ipad="{span: 4}"> <div class="grid-content"></div> </f-col>
</f-row>
   `
}