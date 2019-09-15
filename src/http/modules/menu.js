import axios from '../axios.js'

/**
 * 菜单管理
 */

export const add = (data) => {
    return axios({
        url: '/menu/add',
        method: 'post',
        data: data
    })
}

export const del = (id) => {
    return axios({
        url: `/menu/delete/${id}`,
        method: 'delete',
        data: {}
    })
}

export const update = (data) => {
    return axios({
        url: `/menu/update`,
        method: 'put',
        data: data
    })
}

export const getList = (params) => {
    return axios({
        url: `/menu/list`,
        method: 'get',
        params: params
    })
}
