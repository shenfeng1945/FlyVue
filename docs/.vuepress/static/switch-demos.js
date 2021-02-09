/**
 * 基本用法
 */
 
 export const basicSwitchSource = {
     desc: '绑定<code>v-model</code>到一个 <code>Boolean</code> 类型的变量。可以使用<code>activeColor</code>属性与<code>inactiveColor</code>属性来设置开关的背景色。设置<code>large</code>属性，接受一个<code>Boolean</code>，为<code>true</code>表示设置大号开关。',
     code: `
<f-switch
   v-model="value1"
   active-color="#13ce66"
   inactive-color="#ff4949"
</f-switch>
<f-switch v-model="value2" large></f-switch>
     
<script>
  export default {
    data(){
      return {
          value1: true,
          value2: false
      }
    }
  }
</script>
 `
 }
 
 /**
  * 文字描述
  */
export const textDescSwitchSource = {
    desc: '使用<code>active-text</code>属性与<code>inactive-text</code>属性来设置开关的文字描述。',
    code: `
<f-switch 
   v-model="textDescValue"
   active-text="On"
   inactive-text="Off">
</f-switch>    

<script>
  export default {
    data(){
      return {value: true}
    }
  }
</script>
    `
}

/**
 * 禁用状态
 */

 export const bannedSwitchSource = {
     desc: '设置<code>disabled</code>属性，接受一个<code>Boolean</code>,设置<code>true</code>为禁用。',
     code: `
  <f-switch v-model="value1" disabled></f-switch>    
  <f-switch v-model="value2" disabled></f-switch>    
  
  <script>
    export default {
      data(){
        return {
            value1: false,
            value2: true
        }
      }
    }
  </script>     
     `
 }