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
            { text: 'flutter',link: '/flutter/'},
            { text: 'android', link: '/android/' },
            { text: 'ios', link: '/ios/' },
            { text: 'ted', link: '/ted/' },
        ],
        sidebar: {
            '/flutter/': [
                        "day0",
                        "day1", 
                         ],

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
    }
}
