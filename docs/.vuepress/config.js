module.exports = {
    base: '/vuepress-readytogo/', // 比如你的仓库是test
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        sidebarDepth: 1, 
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '标题1',
                collapsable: true, //是否展开
                children:[
                    ['./guide-one/1', '指南1-1'],
                    ['./guide-one/', '指南1-2'],
                ],
            },
            // ['./guide-one/','指南1'],
            {
                title: '组件',
                collapsable: false
            },
            ['./guide-two/','指南2'],
        ]
      }
}