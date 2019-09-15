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
        console.log("mock拦截响应："+opts.url);
        return fnData.data
    })
}
