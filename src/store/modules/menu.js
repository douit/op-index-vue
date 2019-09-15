const state = {
    menuList: []
}

const mutations = {
    SET_MENULIST: (state,menuList) => {
        state.menuList = menuList
    }
}

const actions = {
    setMenuList({commit},menuList){
        commit('SET_MENULIST',menuList)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
