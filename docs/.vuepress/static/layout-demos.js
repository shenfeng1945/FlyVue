/**
 * 基本用法
 */
export const basicLayout = {
  desc: '无默认样式，需自己补充',
  code: `
<div>
  <f-layout>
    <f-header>Header</f-header>
    <f-content>Content</f-content>
    <f-footer>Footer</f-footer>
  </f-layout>
</div>

<div>
  <f-layout>
    <f-header>Header</f-header>
    <f-layout>
      <f-sider>Sider</f-sider>
      <f-content>Content</f-content>
    </f-layout>
    <f-footer>Footer</f-footer>
  </f-layout>
</div>

<div>
  <f-layout>
    <f-header>Header</f-header>
    <f-layout>
      <f-sider>Sider</f-sider>
      <f-content>Content</f-content>
    </f-layout>
    <f-footer>Footer</f-footer>
  </f-layout>
</div>

<div>
  <f-layout>
    <f-sider>Sider</f-sider>
    <f-layout>
      <f-header>Header</f-header>
      <f-content>Content</f-content>
      <f-footer>Footer</f-footer>
    </f-layout>
  </f-layout>
</div>
 `
}