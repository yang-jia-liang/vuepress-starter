/* 配置文件的入口文件，也可以是 YML 或 toml */

module.exports = {
    // 网站的标题（显示在导航栏和tab页签上）
    title: "vuepress-starter",

    // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
    description: "vuepress脚手架",

    // build 的输出目录, 默认：.vuepress/dist
    // dest: "./dist",

    // 如果你打算发布到 https://<USERNAME or GROUP>.gitlab.io/，则可以省略这一步，因为 base 默认即是 "/"
    // 如果你打算发布到 https://<USERNAME or GROUP>.gitlab.io/<REPO>/（也就是说你的仓库在 https://gitlab.com/<USERNAME>/<REPO>），则将 base 设置为 "/<REPO>/"
    base: "/vuepress-starter/",

    // 指定 dev server 的端口, 默认8080
    // port: '4444',

    // 额外的需要被注入到当前页面的 HTML <head> 中的标签
    head: [
        ["link", { rel: "icon", href: "/images/favicon.png" }],
        ["meta", { name: "theme-color", content: "#00adb5" }],                         // 顶栏header bar和地址栏address bar的多彩的颜色
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],            // 删除默认的苹果工具栏和菜单栏（把网页添加到主屏幕时才有效果）
        ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }], // 设置苹果工具栏颜色
        ["meta", { name: "msapplication-TileColor", content: "#00adb5" }],             // chrome 的 app 顶部工具栏会根据该色值变色


        // H5分享时有用
        ["meta", { itemprop: "description", content: "some CSS tricks, 一些常用的 CSS 样式, 一点 CSS 技巧" }], // 网页标题，不同社交APP截取的长度都不一样，然后手机屏幕大小也会再次不同程度裁减文字
        ["meta", { itemprop: "name", content: "CSSTricks" }],                                              // 网页简介/摘要，和网页标题一样有长度限制，如果小屏幕可能还会裁减
        ["meta", { itemprop: "image", content: "/css_tricks/images/favicon.png" }]                         // 网页缩略图/分享图标，显示在分享内容的左边，图片支持.jpg、.png等常见格式，建议使用200px*200px的图片，如果太大可能读取比较慢。
    ],

    // 主题配置
    themeConfig: {
        // 导航栏 Logo
        // logo: '/images/favicon.png',

        // 导航栏链接
        // 链接默认包含target="_blank" rel="noopener noreferrer", 可以自己提供 target 与 rel
        nav: [
            {
                text: "blog",
                link: "https://yang-jia-liang.github.io/vuepress-starter/"
            },
            {
                text: "GitHub",
                link: "https://github.com/yang-jia-liang/vuepress-starter",
                // target:'_self',
                // rel: ''
            },

            // 当你提供了一个 items 数组而不是一个单一的 link 时，它将显示为一个 下拉列表
            // {
            //   text: 'Languages',
            //   ariaLabel: 'Language Menu',
            //   items: [
            //     { text: 'Chinese', link: '/language/chinese/' },
            //     { text: 'Japanese', link: '/language/japanese/' }
            //   ]
            // },

            // 可以通过嵌套的 items 来在 下拉列表 中设置分组
            // {
            //   text: 'Languages',
            //   ariaLabel: 'Language Menu',
            //   items: [
            //     {
            //       text: 'Chinese',
            //       items: [
            //         { text: 'Chinese', link: '/language/chinese/' },
            //         { text: 'Japanese', link: '/language/japanese/' }
            //       ]
            //     },
            //     { text: 'Japanese', link: '/language/japanese/' }
            //   ]
            // }
        ],

        /**
         * 搜索
         *
         * 内置搜索只会为页面的标题、h2 、 h3 以及 tags 构建搜索索引
         * 如果你需要全文搜索，你可以使用 Algolia 搜索

         search: false,           // 禁用默认的搜索框
         searchMaxSuggestions: 3, // 显式的搜索结果数
         * */

        /**
         * 上 / 下一篇链接
         *

         nextLinks: false, //  默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
         prevLinks: false, // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
         * */

        /**
         * Git 仓库和编辑链接
         *
         // 自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 "Edit this page" 链接
         repo: "https://github.com/QiShaoXuan/css_tricks", // 完整的 GitHub || GitLab URL

         // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为 "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
         // repoLabel: '查看源码',

         editLinks: true,                      // 默认是 false, 设置为 true 来启用
         editLinkText: '帮助我们改善此页面！',     // 默认为 "Edit this page"
         * */

        // 侧边栏配置
        sidebar: [
            // 使用对象来将侧边栏划分成多个组
            {
                title: "CSS",
                collapsable: false,                           // 是否可折叠，可选, 默认值是 true
                children: [
                    ["/CSS/css书写格式", "css书写格式"],         // 使用 [link, text] 格式的数组，显式指定链接的文字
                    ["/CSS/媒体查询", "媒体查询"],
                    ["/CSS/私有属性", "私有属性"],
                    ["/CSS/默认样式和CSS Reset", "默认样式和CSS Reset"],
                ]
            }
        ],
    }
}
