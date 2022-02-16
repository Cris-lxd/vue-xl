window.ApplicationConfig = {
    baseUrl: 'http://localhost:8083',
    menuList: [
        {
            title: '首页',
            name: 1,
            child:[]
        },
        {
            title: '关于我们',
            name: 2,
            child:[
                {
                    name: 1-1,
                    title: '公司介绍'
                },
                {
                    name: 1-2,
                    title: '企业大事件'
                },
                {
                    name: 1-3,
                    title: '人和文化'
                },
                {
                    name: 1-4,
                    title: '可持续发展'
                },
            ]
        },
        {
            title: '旗下产品',
            name: 3,
            child:[]
        },
        {
            title: '天生元气',
            name: 4,
            child:[
                {
                    name: 4-1,
                    title: '原科介绍'
                },
                {
                    name: 4-2,
                    title: '工厂介绍'
                },
            ]
        },
        {
            title: '新闻公告',
            name: 5,
            child:[
                {
                    name: 5-1,
                    title: '公司新闻'
                },
                {
                    name: 5-2,
                    title: '媒体资源库'
                },
            ]
        },
        {
            title: '联系我们',
            name: 6,
            child:[
                {
                    name: 6-1,
                    title: '招聘信息'
                },
                {
                    name: 6-2,
                    title: '地址电话'
                },
            ]
        }
    ],
}