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

::: tip
 默认主题提供的首页布局

:::

::: details
    YAML front matter 页面的单独配置
    ---
    home: true
    heroImage: /hero.png
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

::: tip
 YAML front matter 语法 前面加 # 注释代码
 
     ---
     # home: true // 注释后，下面的布局配置无效
     
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
