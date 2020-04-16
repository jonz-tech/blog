module.exports = {
    title: 'jonz-tech', 
    description: 'jonz-tech的博客',
    //非常重要，加载js
    base: '/TED/',// 设置站点根路径
    repo: 'https://github.com/jonz-tech/TED/',
    head: [
        // ['link', { rel: 'icon', href: '/img/logo.ico' }],
        // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/home/' },
            { text: 'flutter',
              items: [
                { text: 'day0', link: '/flutter/day0.md' },
                { text: 'day1', link: '/flutter/day1.md' },
              ] 
            },
            { text: 'android', link: '/android/' },
            { text: 'ios', link: '/ios/' },
            { text: 'ted', link: '/ted/' },
        ],
        sidebar: {
            '/android/': [
                        "",
                        "android1", 
                         ],
            "/ios/":[
                        "",
                        "ios1",
                        ],
            "/ted/":[
                        "",
                        "web1",
            				 ],
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    }
}
