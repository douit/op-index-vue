/*菜单管理*/

// 获取菜单集合
function getList() {
    const data = {
        "code": 200,
        "data": [
            {
                "id":1,
                "name":"产品",
                "url":"/product",
                "icon":"",
                "children":[
                    {"id":101,"name":"数据分析与应用","url":"/product/dataAnalysis","icon":"","children":[
                            {"id":10101,"name":"移动统计U-App","url":"/product/dataAnalysis/uApp","icon":"","desc":"App智能检测与分析平台，助力用户增长"},
                            {"id":10102,"name":"网站统计U-Web","url":"/product/dataAnalysis/uWeb","icon":"","desc":"流量统计分析"},
                            {"id":10103,"name":"游戏统计U-Game","url":"/product/dataAnalysis/uGame","icon":"","desc":"移动游戏统计"},
                        ]
                    },
                    {"id":102,"name":"数据开发与工具","url":"/sys/dataDeveloper","icon":""},
                    {"id":103,"name":"云基础设施","url":"/sys/cloud","icon":""},
                ]
            },
            {
                "id":2,
                "name":"解决方案",
                "url":"/solution",
                "icon":""
            },
            {
                "id":3,
                "name":"开发者中心",
                "url":"/developer",
                "icon":""
            },
            {
                "id":4,
                "name":"品牌动态",
                "url":"/brandDynamic",
                "icon":""
            },
            {
                "id":5,
                "name":"联系我们",
                "url":"/contactUs",
                "icon":""
            },
        ]
    }
    return {
        url: '/menu/list', // 拦截路径
        method: 'get', // 请求方法
        data: data // 响应数据
    }
}

export default [
    (getList)()
]
