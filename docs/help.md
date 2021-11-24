---
title: '帮助'
sidebar: 'auto'
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

    - YAML
    - .vuepress/components 
    - .vuepress/config.js 

  改变后需要重启项目
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
    脚本运行失败，可以把打包的dist文件夹里的文件复制到gh-pages分支目录下，单独提交
:::

::: tip 
[部署到自己的域名](https://www.bilibili.com/video/BV1vb411m7NY?p=8&spm_id_from=pageDriver)
:::

## PWA

### 安装
```bash
yarn add -D @vuepress/plugin-pwa
# OR npm install -D @vuepress/plugin-pwa
```

### 使用
1. 修改 .vuepress/config.js
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
    plugins: {
        '@vuepress/pwa': {
            // Service Worker 的配置
            // 如果设置为 true，VuePress 将自动生成并注册一个 Service Worker，用于缓存页面的内容以供离线使用（仅会在生产环境中启用）
            // 只有在你能够使用 SSL 部署您的站点时才能启用此功能，因为 service worker 只能在 HTTPs 的 URL 下注册
            serviceWorker: true,
            // 开启了一个用于刷新内容的弹窗。这个弹窗将会在站点有内容更新时显示出来，并提供了一个 refresh 按钮，允许用户立即刷新内容
            updatePopup: {
                message: "发现新内容可用.",
                buttonText: "刷新"
            }
        }
    }
}
```

2. .vuepress/public 新建manifest.json

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

::: tip
[视频教程](https://vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html)
:::

## Vssue 评论
### 安装
```bash
yarn add @vssue/vuepress-plugin-vssue
yarn add @vssue/api-github-v3
```

### 使用
1. [创建 OAuth App](https://vssue.js.org/zh/guide/github.html)
2. 修改 .vuepress/config.js
```js
module.exports = {
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github',

            // 其他的 Vssue 配置
            owner: '<github用户名>',
            repo: '<github仓库名>',
            clientId: '<创建的OAuth App 中的Client ID>',
            clientSecret: '<创建的OAuth App 中的Client secrets>',
            autoCreateIssue: true, // 自动创建issue，省去一步操作，需要登录github，没有登录会自动跳转登录页
        },
    },
};
```

3. 引用
在需要的页面末尾引入
```md
# 默认英文
<Vssue />

# 配置中文
<Vssue :options="{ locale: 'zh' }" />
```

3.1 全局使用
1. 新建.vuepress/theme文件夹
2. 新建.vuepress/theme/index.js 继承默认的主题
3. 拷贝VuePress的[默认主题文件](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/theme-default)，layouts/Layout.vue、util/index.js
4. 在默认布局的插槽中加入自定义内容
``` html
        <Page
               v-else
                sidebar-items="sidebarItems"
        >
            <template #top>
                <slot name="page-top" />
            </template>
            <template #bottom>
                <slot name="page-bottom" />

                <!-- 评论组件 -->
                <Vssue
                    options="{ locale: 'zh' }"
                    class="theme-default-content content__default"
                />
            </template>
        </Page>
```

:::tip
[Vssue官网](https://vssue.js.org/zh/)
:::

## 网站流量统计
### 添加百度统计
1. [登录百度统计后台](https://tongji.baidu.com/sc-web/36717895/home/site/index?from=3)
2. 创建站点
3. 复制统计代码
```html
<script>
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?122c8c3619099529f88017a761dbb803";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
</script>

```

4. 修改 .vuepress/config.js
```js
module.exports = {
    hdad: [
        // 添加百度统计
        [
            "script",
            {},
            `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?122c8c3619099529f88017a761dbb803";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
        `
        ]
    ]
};
```
::: tip
[百度统计官方 js-api 文档](https://tongji.baidu.com/holmes/Tongji/%E7%BB%9F%E8%AE%A1%E5%BC%80%E6%94%BE%E6%89%8B%E5%86%8C/%E6%A6%82%E5%86%B5/)
:::

### 添加友盟+(cnzz)统计
1. [登录友盟统计后台](https://www.umeng.com/)
2. 创建站点
3. 复制统计代码
```html
<script
    type="text/javascript" 
    src="https://s4.cnzz.com/z_stat.php?id=1280620168&web_id=1280620168"
>
</script>
```

4. 修改 .vuepress/config.js
```js
module.exports = {
    hdad: [
        // 添加友盟+（cnzz）统计
        ["script", { src: "https://s4.cnzz.com/z_stat.php?id=1280620168&web_id=1280620168" }]
    ]
};
```

::: tip 控制台warning警告

解决控制台warning警告：`A parser-blocking, cross site (i.e. different eTLD+1) script, https://c.cnzz.com/... `
<br/><br/>
[警告原因](https://blog.csdn.net/WuLex/article/details/101017150)

```js
module.exports = {
    hdad: [
        // 添加友盟+（cnzz）统计
        [
            "script",
            {},
            `
                var _hmt = _hmt || [];
                (function() {
                  var hm = document.createElement("script");
                  hm.async = true;
                  hm.type = 'text/javascript';
                  hm.charset = 'utf-8';
                  hm.src = "https://s4.cnzz.com/z_stat.php?id=1280620168&web_id=1280620168";
                  var s = document.getElementsByTagName("script")[0]; 
                  s.parentNode.insertBefore(hm, s);
                })();
            `
        ]
    ]
};
```
:::




::: warning
net::ERR_BLOCKED_BY_CLIENT 被浏览器的防广告插件屏蔽了
:::


## 添加图片
```bash
<img :src="$withBase('/assets/img/favicon.ico')" alt="favicon">

![favicon](/assets/img/favicon.ico)
```

### 图片放大
1. 安装插件
```bash
yarn add -D @vuepress/plugin-medium-zoom
# OR 
npm install -D @vuepress/plugin-medium-zoom
```
2. 使用
```js
module.exports = {
    plugins: {
        '@vuepress/medium-zoom': { selector: 'img.zoom-custom-imgs' }
    },
};
```
```bash
<img :src="$withBase('/assets/img/favicon.ico')" alt="favicon" class='zoom-custom-imgs'>
```

## live2d动画
1. 安装插件
```bash
yarn add vuepress-plugin-helper-live2d
# or
npm install vuepress-plugin-helper-live2d --save
```

2. 使用
```js
module.exports = {
    plugins: {
        'vuepress-plugin-helper-live2d': true
    },
};
```

::: tip 
会在 vuepress/public/ 生成live2d文件夹，保存模型信息

[官方文档](https://github.com/JoeyBling/vuepress-plugin-helper-live2d)
:::
