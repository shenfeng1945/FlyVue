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
            title: 'basic',
            collapsable: false,
            children: [
              'views/components/color',
              'views/components/button',
              'views/components/layout',
              'views/components/grid'
            ]
          },
          {
            title: 'form',
            collapsable: false,
            children: [
              'views/components/radio'
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
