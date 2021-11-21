/* 配置文件的入口文件，也可以是 YML 或 toml */

// 变更后需要重启项目
module.exports = {
    // 网站的标题（显示在导航栏和tab页签上）
    title: "vuepress脚手架",

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
        ["link", { rel: "icon", href: "/assets/img/favicon.ico" }],
        ['meta', { name: 'author', content: 'yjl' }],
        ['meta', { name: 'keywords', content: 'vuepress脚手架' }],


        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],

        // IOS中的Manifest兼容
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],                     // 类似于manifest中的display的功能，通过设置为yes可以进入standalone模式
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],          // 移动设备状态栏的样式
        ['link', { rel: 'apple-touch-icon', href: '/icons/icon-152.png' }],                     // 桌面图标
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }], // 触摸栏上的自定义Safari书签图标和颜色

        // Windows8 / Microsoft Surface(IE10+) 中的Manifest兼容
        ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }],  // 瓷砖块的背景图
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],                                // 瓷砖块颜色
    ],

    // 提供多语言支持的语言配置
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        "/": {
            lang: "zh-CN",                     // 设置<HTML>的 lang 属性
            title: "vuepress-starter",         // 网站标题，优先级比外层的title配置高
            description: "vuepress脚手架"
        },
        "/en/": {
            lang: "en-US",
            title: "vuepress-starter",
            description: "vuepress-starter"
        }
    },

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
        },
        '@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用.",
                buttonText: "刷新"
            }
        },
    ],

    // 主题配置
    themeConfig: {
        // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，显示在每一页的底部，默认关闭
        lastUpdated: '更新时间', // string | boolean

        // 导航栏 Logo
        // logo: '/assets/img/logo.png',

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
            {
                text: "关于我",
                link: "/about"
            },
            {
                text: "帮助",
                link: "/help"
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

        // 禁用所有页面的导航栏，可以通过 YAML front matter 来禁用某个指定页面的导航栏
        // navbar: false,

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

        // sidebar: 'auto', // 自动生成侧边栏

        // 自定义配置侧边栏
        sidebar: [
            '',
            "about",
            // 文件夹里面的页面要用对象来配置
            {
                title: 'CSS',
                path: '/CSS/',
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


        // 配置规则，从上到下，只命中一个
        // sidebar: {
        //   '/CSS/': [
        //       'cursor',
        //       'hollowCard'
        //   ],
        //     '/': [
        //
        //     ],
        // },

        // 主题也内置了多语言支持
        // 每个语言除了可以配置一些站点中用到的文字之外，还可以拥有自己的 导航栏 和 侧边栏 配置
        locales: {
            "/": {
                selectText: '选择语言',              // 多语言下拉菜单的标题
                label: "简体中文",                   // 该语言在下拉菜单中的标签
                editLinkText: '在 GitHub 上编辑此页', // 编辑链接文字


                // Service Worker 的配置
                // 如果设置为 true，VuePress 将自动生成并注册一个 Service Worker，用于缓存页面的内容以供离线使用（仅会在生产环境中启用）
                // 只有在你能够使用 SSL 部署您的站点时才能启用此功能，因为 service worker 只能在 HTTPs 的 URL 下注册
                serviceWorker: {
                    // 开启了一个用于刷新内容的弹窗。这个弹窗将会在站点有内容更新时显示出来，并提供了一个 refresh 按钮，允许用户立即刷新内容
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },

                // 当前 locale 的 algolia docsearch 选项
                algolia: {},

                // 侧边栏配置
                // sidebar: {
                //     '/': [
                //         {
                //             title: 'PWA',
                //             path: '/PWA/',
                //         },
                //         {
                //             title: "CSS",
                //             collapsable: false,                    // 是否可折叠，可选, 默认值是 true
                //             children: [
                //                 ["/CSS/cursor", "鼠标样式"],         // 使用 [link, text] 格式的数组，显式指定链接的文字
                //                 ["/CSS/hollowCard", "卡卷生成器"],
                //             ]
                //         }
                //     ],
                // }
            },
            "/en/": {
                selectText: "Languages",                   // 多语言下拉菜单的标题
                label: "English",                          // 该语言在下拉菜单中的标签
                editLinkText: 'Edit this page on GitHub',  // 编辑链接文字

                // Service Worker 的配置
                // 如果设置为 true，VuePress 将自动生成并注册一个 Service Worker，用于缓存页面的内容以供离线使用（仅会在生产环境中启用）
                // 只有在你能够使用 SSL 部署您的站点时才能启用此功能，因为 service worker 只能在 HTTPs 的 URL 下注册
                serviceWorker: {
                    // 开启了一个用于刷新内容的弹窗。这个弹窗将会在站点有内容更新时显示出来，并提供了一个 refresh 按钮，允许用户立即刷新内容
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },

                // 当前 locale 的 algolia docsearch 选项
                algolia: {},

                // 侧边栏配置
                sidebar: {
                    '/en/': [
                        {
                            title: "CSS",
                            collapsable: false,                           // 是否可折叠，可选, 默认值是 true
                            children: [
                                ["/en/CSS/CSS writing format", "CSS writing format"],         // 使用 [link, text] 格式的数组，显式指定链接的文字
                                ["/en/CSS/Media queries", "Media queries"],
                                ["/en/CSS/Private property", "Private property"],
                                ["/en/CSS/Default styles and CSS Reset", "Default styles and CSS Reset"],
                            ]
                        }
                    ],
                }
            }
        }
    }
}
