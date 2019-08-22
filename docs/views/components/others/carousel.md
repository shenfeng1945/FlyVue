---
title: Carousel 走马灯
sidebarDepth: 2
---

### Carousel 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容

<ClientOnly>
  <carousel-demos />
</ClientOnly>

#### Carousel Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| selected | 当前展示的选项 | string/number | - | - |
| autoPlay | 是否自动切换 | boolean | - | true |
| reverse | 是否反方向切换 | boolean | - | false |
| autoPlayDelay | 自动切换的时间间隔，单位为毫秒 | number | - | 3000 |
| trigger | 指示器的触发方式 | string | click/hover | - | hover |
| height | 走马灯的高度 | string | - | - |
| direction | 走马灯展示的方向 | string | horizontal/vertical | horizontal |

#### Carousel Events 

| 参数 | 说明 | 回调参数 | 
| -- | -- | -- | 
| update:selected | 更新当前走马灯的selected值 | (value: string) |

#### Carousel-Item Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| name | 幻灯片的名字 | string | - | - |
