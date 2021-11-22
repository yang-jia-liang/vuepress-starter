---
title: '帮助'
---

## YAML


### 配置
::: tip
    ---
    navbar: false       // 禁用顶部导航栏
    sidebar: auto       // 自动配置侧边栏
    title: '自定义标题'  // 自定义侧边栏标题，默认取文档的第一个标题，无关标题等级
    ---
:::

::: tip
    默认主题的首页配置，此时首页独占一页
    
     ---
     home: true
     heroImage: /assets/img/logo.png
     heroText: Hero 标题
     tagline: Hero 副标题
     actionText: 快速上手 →
     actionLink: /zh/guide/
     features:
     - title: 简洁至上
       details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
     - title: Vue驱动
       details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
     - title: 高性能
       details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
     footer: MIT Licensed | Copyright © 2018-present Evan You
     ---
:::

### 注释
::: tip
    # 可以注释代码
    
    注释 home: true 后，首页布局失效，首页不会独占一页
    
     ---
     # home: true
     heroImage: /assets/img/logo.png
     heroText: Hero 标题
     tagline: Hero 副标题
     actionText: 快速上手 →
     actionLink: /zh/guide/
     features:
     - title: 简洁至上
       details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
     - title: Vue驱动
       details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
     - title: 高性能
       details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
     footer: MIT Licensed | Copyright © 2018-present Evan You
     ---
:::

##  .vuepress/config.js
项目全局配置文件

### siderbar 侧边栏
```js
// 展示所有配置侧边栏
// 文件的展示层级默认为两级
module.exports = {
    themeConfig: {
        sidebar: [
            '',
            "about",
            // 文件夹里面的页面要用对象来配置
            {
                title: 'CSS',        // 侧边栏标题
                path: '/CSS/',       // 标题指向的路由，如果不需要对子类做总结，可以指向子类的路由
                collapsable: false,   // 是否可折叠，可选, 默认值是 true
                children: [
                    '/CSS/cursor',
                    "/CSS/hollowCard",
                ]
            },
            {
                title: 'PWA',
                path: '/PWA/',
            },
            'help'
        ],
    }
}
```

```js
// 只展示命中路由的侧边栏
// 文件的展示层级默认为两级
module.exports = {
    themeConfig: {
        // 配置规则，从上到下，只命中一个
         sidebar: {
           '/CSS/': [
               'cursor',
               'hollowCard'
           ],
             '/': [
    
             ],
         },
    }
}
```

```js
// 只展示命中路由的侧边栏
// 文件的展示层级无限，一般从 ## 标题开始定义
module.exports = {
    themeConfig: {
        sidebar: 'auto'
    }
}
```

## 热更新

::: tip
    YAML / .vuepress/config.js 改变后需要重启项目
::: 
 
## SEO
```JS
module.exports = {
    // 网站的标题（显示在导航栏和tab页签上）
    title: "vuepress脚手架",
   
    // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
    description: "vuepress脚手架",
    
    // 额外的需要被注入到当前页面的 HTML <head> 中的标签
    head: [
        ["link", { rel: "icon", href: "/assets/img/favicon.ico" }],
        ['meta', { name: 'author', content: 'yjl' }],
        ['meta', { name: 'keywords', content: 'vuepress脚手架' }],
    ],
}
```

# 插件
```JS
// 格式化最后更新时间
module.exports = {
   // 使用插件
   plugins: [
       '@vuepress/last-updated',
       {
           transformer: (timestamp, lang) => {
               // 不要忘了安装 moment
               const moment = require('moment');
               
               moment.locale(lang);
               
               return moment(timestamp).format('LLLL');
           }
       }
   ]
}
```

## 发布到github.io
1. https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages
2. 修改package.json
    ```json
    {
      "scripts": {
        "deploy": "bash deploy.sh"
      }
    }
    ```
3. git bash here 执行 yarn run deploy

:::tip
    脚本运行失败，可以把打包后的dist文件夹里的文件复制到gh-pages分支目录下，单独提交
:::

### 部署到自己的域名
https://www.bilibili.com/video/BV1vb411m7NY?p=8&spm_id_from=pageDriver

## PWA

### 安装
```bash
yarn add -D @vuepress/plugin-pwa
# OR npm install -D @vuepress/plugin-pwa
```

## 使用
修改 .vuepress/config.js
```js
module.exports = {
  head: [
      ['link', { rel: 'icon', href: '/logo.png' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
}
```

.vuepress/public 新建manifest.json
```json

{
  "name": "vuepress-starter",
  "short_name": "VP",
  "description": "vuepress脚手架",
  "start_url": "/index.html",
  "display": "standalone",
  "orientation": "portrait-primary",
  "theme_color": "#FFDF00",
  "background_color": "#FFDF00",
  "icons": [
    {
      "src": "images/icon-192.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "images/icon-144.png",
      "sizes": "144x144",
      "type": "image/png"
    }
  ]
}

```

修改


::: tip
https://vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html
:::