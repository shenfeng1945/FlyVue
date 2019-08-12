/**
 * 基础用法
 */
 
export const BasicPopoverSource = {
  desc: '<code>trigger</code>属性用于设置何时触发 Popover, 支持两种触发方式 <code>click</code>和<code>hover</code>，<code>only-target</code>属性用于控制<code>trigger</code>交互时是否只针对自身元素。',
  code: `
<tempalte>
  <f-popover trigger="click" position="top">
    <f-button intent="primary">Click target</f-button>
    <template slot="content">
      <div>
        <h4>标题</h4>
        <p>这是一段内容 这是一段内容 这是一段内容</p>
      </div>
    </template>
  </f-popover>
  
  <f-popover trigger="click" position="left" :only-target="true">
    <f-button intent="primary">Click(target only)</f-button>
      <template slot="content">
        <div>
          <h4>标题</h4>
          <p>这是一段内容 这是一段内容 这是一段内容</p>
        </div>
      </template>
  </f-popover>
  
  <f-popover trigger="hover" position="right">
    <f-button intent="primary">Hover target</f-button>
    <template slot="content">
      <div>
        <h4>标题</h4>
        <p>这是一段内容 这是一段内容 这是一段内容</p>
      </div>
    </template>
  </f-popover>
  
  <f-popover trigger="hover" position="bottom" :only-target="true">
    <f-button intent="primary">Hover(target only)</f-button>
    <template slot="content">
      <div>
        <h4>标题</h4>
        <p>这是一段内容 这是一段内容 这是一段内容</p>
      </div>
    </template>
  </f-popover>
</template>
  `
}