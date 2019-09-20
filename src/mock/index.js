import Mock from 'mockjs'
import { baseMockUrl } from '@/config/global.js'

import menu from './modules/menu.js'

const mocks = [
    ...menu
]

mocks.forEach(fnData=>{
    fnCreate(fnData)
})

function fnCreate(fnData){
    let url = fnData.url
    if(url.endsWith('/'))
        url = url.slice(0,url.length-1)
    url = baseMockUrl+url
    console.log("mock拦截请求："+url)
    Mock.mock(new RegExp(url), fnData.method, (opts) => {
        // 获取请求参数
        let params = {}
        if(opts.type == 'GET'){
            params = getParamsByGet(opts.url)
        }
        if(opts.type == 'POST'){
            params = getParamsByPost(opts.body)
        }
        let data = fnData.response(params)
        console.log("mock拦截响应数据："+data);
        return data
    })
}

function getParamsByPost(body){
    let res = {}
    if(body instanceof FormData){
        debugger
    }else{
        res = JSON.parse(body)
    }
    return res
}

function getParamsByGet(url){
    if(url.split('?').length>1){
        let param = url.split('?')[1].split('=')
        let res = {[param[0]]:param[1]}
        return res
    }else{
        return {}
    }
}
