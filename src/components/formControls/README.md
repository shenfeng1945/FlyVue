#### 使用示例

##### Switch组件

```vue
<f-switch v-model="value" large @change="value = $event"></f-switch>

data(){
    return {
        value: false
    }
}
```

#### checkbox组件

```vue
// 单一使用
checked: {{value}}
<f-checkbox v-model="value" @change="value = $event">allen</checkbox>

//多选框组
selected: {{checklist}}
<f-checkbox-group v-model="checklist" @change="checklist = $event">
    <f-checkbox label="allen">allen</f-checkbox>
    <f-checkbox label="curry">curry</f-checkbox>
    <f-checkbox label="klay">kobe</f-checkbox>
</f-checkbox-group>

data(){
    return {
        value: false,
        checklist: ['allen']
    }
}

```

#### radio组件

```vue
selected: {{radio || ''}}
<f-radio-group v-model="radio" @change="radio = $event">
    <f-radio label="Vue" style="margin-bottom: 10px;">Vue</f-radio>
    <f-radio label="React" style="margin-bottom: 10px;">React</f-radio>
    <f-radio label="Angular" style="margin-bottom: 10px;">Angular</f-radio>
</f-radio-group>

data(){
  return {
    radio: undefined
  }
}
```