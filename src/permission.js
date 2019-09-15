import router from './router/index.js'
import store from './store/index.js'
import api from './http/api.js'

router.beforeEach((to,form,next) => {
    var dynamicRoutes = store.getters.dynamicRoutes
    if(dynamicRoutes.length == 0){
        // 加载动态菜单和路由
        addDynamicMenuAndRoutes().then(res=>{
            next()
        })
    }else{
        next()
    }
})

router.afterEach(() => {

})

async function addDynamicMenuAndRoutes(){
    // 1. 获取菜单
    return new Promise((resolve,reject)=>{
        api.menu.getList().then((res)=>{
            console.log(res.data);
            // 2. 创建路由
            let routes = generateRoutes(res.data)
            store.dispatch('menu/setMenuList',res.data) // 保存菜单信息
            store.dispatch('permission/setDynamicRoutes',routes) // 保存路由信息
            resolve()
        }).catch(err => {
            console.log("菜单获取失败："+err.message);
            reject()
        })
    })
}

/**
 * 根据菜单生成动态路由
 * 1 无子路由的父级处理
 * 2 存在子路由父路由处理
 * 3 子路由处理
 * @param menuList
 */
function generateRoutes(menuList, routes = []) {
    for(let i=0; i<menuList.length; i++){
        if(menuList[i].children && menuList[i].children.length > 0){
            generateRoutes(menuList[i].children,routes)
        }else if(menuList[i].url){
            let url = menuList[i].url
            if(url.startsWith('/')) // 去掉路径开头的 /
                url = url.slice(1)
            var route = {
                path: menuList[i].url,
                component:() => require(`@/views/${url}`),
                name: menuList[i].name,
                meta: {
                    icon: menuList[i].icon,
                    index: menuList[i].id
                }
            }
            routes.push(route)
        }
    }
    return routes
}
