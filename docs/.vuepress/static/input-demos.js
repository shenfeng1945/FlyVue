  /**
   * 带icon的输入框
   */
  export const IconInput = {
    desc: '可以通过 <code>prefixIcon</code> 和 <code>suffixIcon</code> 属性在 input 组件首部和尾部增加显示图标',
    code: `
<f-input v-model="icon1Value" prefixIcon="search" placeholder="请输入内容" />
<f-input v-model="icon2Value" suffixIcon="calendar" placeholder="请选择日期" />

<script>
  export default {
    data(){
      return {
        icon1Value: '',
        icon2Value: ''
      }
    }
  }
<\/script>
    `
  }