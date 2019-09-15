/**
 * 挂载全局 api 对象
 */

import api from './api.js'

const install = (Vue) => {
    Object.defineProperty(Vue.prototype,'$api',{
        get() {
            return api // 可以是一个对象或方法
        }
    })
}

export default install
