/* 配置文件的入口文件，也可以是 YML 或 toml */

module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',

    // 如果你打算发布到 https://<USERNAME or GROUP>.gitlab.io/，则可以省略这一步，因为 base 默认即是 "/"
    // 如果你打算发布到 https://<USERNAME or GROUP>.gitlab.io/<REPO>/（也就是说你的仓库在 https://gitlab.com/<USERNAME>/<REPO>），则将 base 设置为 "/<REPO>/"
    base: "/vuepress-starter/",

    // 主题配置
    themeConfig: {
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
