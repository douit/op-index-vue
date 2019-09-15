import axios from 'axios'
import {Message} from 'element-ui'
import qs from 'qs'

/*创建实例，设置配置默认值
* 配置合并优先顺序
* 1 lib/defaults.js
* 2 实例的 defaults
* 3 请求的config
* 后者优于前者
* */
const server = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 1000,
    headers: {'Content-Type': 'application/json;charset=utf-8'}
})

// 请求拦截器
const reqInterceptor = server.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    return config
}, (error) => {
    // 请求错误做些什么
    return Promise.reject(error)
})

// 响应拦截器
const resInterceptor = server.interceptors.response.use((response) => {
    let res
    // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
    if (response.data == undefined) {
        res = JSON.parse(response.request.responseText)
    } else {
        res = response.data
    }
    // 根据返回的code值来做不同的处理
    if (res.code !== 20000 && response.status !== 200) {
        Message({
            message: res.message || 'error',
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(res.message || 'error')
    } else {
        return res
    }
}, (err) => {
    if (err && err.response) {
        switch (err.message.status) {
            case 400:
                err.message = '请求错误'
                break
            case 401:
                err.message = '未授权，请登录'
                break
            case 403:
                err.message = '拒绝访问'
                break
            case 404:
                err.message = `请求地址出错：${err.response.config.url}`
                break
            case 408:
                err.message = '请求超时'
                break
            case 500:
                err.message = '服务器内部错误'
                break
            case 501:
                err.message = '服务未实现'
                break
            case 502:
                err.message = '网关错误'
                break
            case 503:
                err.message = '服务不可用'
                break
            case 504:
                err.message = '网关超时'
                break
            case 505:
                err.message = 'HTTP版本不受支持'
                break
            default:
        }
    }
    Message({
        message: err.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(err)
})

// 移除拦截器
/*server.interceptors.request.eject(reqInterceptor)
server.interceptors.response.eject(resInterceptor)*/

const AxiosUtil = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
    CONTENTTYPE_JSON: 'application/json',
    CONTENTTYPE_FORM: 'application/x-www-form-urlencoded',

    get() {
    },
    put(config) {
        const contentType = config.headers['Content-Type']
        if (contentType && contentType.indexOf(AxiosUtil.CONTENTTYPE_FORM)) {
            config.data = qs.stringify(config.data)
        }
    },
    delete() {
    },
    post(config) {

    },
}

export default server




