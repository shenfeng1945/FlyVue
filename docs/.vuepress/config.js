const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  title: 'FlyVue',
  base: '/FlyVue/',
  description: '一个好用的UI框架',
  head: [
    ['link', {rel: 'icon',href:'/favicon.ico'}]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/shenfeng1945/FlyVue' },
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          'views/guide/install',
          'views/guide/get-started',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          {
            title: 'Basic',
            collapsable: false,
            children: [
              'views/components/basic/color',
              'views/components/basic/button',
              'views/components/basic/layout',
              'views/components/basic/grid'
            ]
          },
          {
            title: 'Form',
            collapsable: false,
            children: [
              'views/components/form/radio',
              'views/components/form/checkbox',
              'views/components/form/input',
              'views/components/form/switch',
              'views/components/form/cascader',
              'views/components/form/datePicker',
              'views/components/form/upload',
            ]
          },
          {
            title: 'Data',
            collapsable: false,
            children: [
              'views/components/data/table',
              'views/components/data/pager',
            ]
          },
          {
            title: 'Navigation',
            collapsable: false,
            children: [
              'views/components/navigation/tabs',
              'views/components/navigation/navMenu',
            ]
          },
          {
            title: 'Others',
            collapsable: false,
            children: [
              'views/components/others/popover',
              'views/components/others/collapse',
              'views/components/others/carousel',
              // 'views/components/others/waterfall',
              'views/components/others/backTop',
              'views/components/others/indicator',
              'views/components/others/infinite-scroll',
            ]
          }
        ]
      }
    ]
  },
  chainWebpack(config){
    config.resolve.alias
            .set('@', resolve('../../src'))
  }
}
