export const basicButton = {
  desc: '使用<code>intent</code>、<code>leftIcon</code>、<code>rightIcon</code>、<code>minimal</code>、<code>circle</code>属性来定义 Button 的样式。',
  code: `
<div>
  <f-button>默认按钮</f-button>
  <f-button intent="primary">主要按钮</f-button>
  <f-button intent="warn">警告按钮</f-button>
  <f-button intent="success">成功按钮</f-button>
  <f-button intent="danger">危险按钮</f-button>
</div> 

<div>
  <f-button minimal>默认按钮</f-button>
  <f-button intent="primary" minimal>主要按钮</f-button>
  <f-button intent="warn" minimal>警告按钮</f-button>
  <f-button intent="success" minimal>成功按钮</f-button>
  <f-button intent="danger" minimal>危险按钮</f-button>
<div>

<div>
  <f-button leftIcon="user" rightIcon="caret-down">Profile settings</f-button>
  <f-button intent="success" rightIcon="arrow-right">Next Step</f-button>
  <f-button intent="danger" leftIcon="refresh">Reset</f-button>
  <f-button leftIcon="search" circle intent="primary"></f-button>
  <f-button leftIcon="calendar" intent="warn" circle></f-button>
</div>
  `
}

/**
 * 禁用状态
 */
export const disabledButton = {
  desc: '你可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值',
  code: `
<div>
  <f-button disabled>默认按钮</f-button>
  <f-button intent="primary" disabled>主要按钮</f-button>
  <f-button intent="warn" disabled>警告按钮</f-button>
  <f-button intent="success" disabled>成功按钮</f-button>
  <f-button intent="danger" disabled>危险按钮</f-button>
</div>

<div>
  <f-button minimal disabled>默认按钮</f-button>
  <f-button intent="primary" minimal disabled>主要按钮</f-button>
  <f-button intent="warn" minimal disabled>警告按钮</f-button>
  <f-button intent="success" minimal disabled>成功按钮</f-button>
  <f-button intent="danger" minimal disabled>危险按钮</f-button>
</div>
 `
}

/**
 * 按钮组
 */
export const groupButton = {
  desc: '使用<code>&lt;f-button-group&gt;</code>来嵌套你的按钮',
  code: `
  <f-button-group>
    <f-button intent="primary" leftIcon="left">上一页</f-button>
    <f-button intent="primary" rightIcon="right">下一页</f-button>
  </f-button-group>
  `
}

/**
 * 加载中
 */
 export const loadingButton = {
   desc: '要设置为 loading 状态，只要设置 <code>loading</code>属性为<code>true</code>即可。',
   code: `
  <f-button intent="success" loading>加载中</f-button>
   `  
 }