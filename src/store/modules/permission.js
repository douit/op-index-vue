const state = {
    dynamicRoutes: []
}

const mutations = {
    SET_DYNAMICROUTES: (state,dynamicRoutes) => {
        state.dynamicRoutes = dynamicRoutes
    }
}

const actions = {
    setDynamicRoutes({commit},dynamicRoutes){
        commit('SET_DYNAMICROUTES',dynamicRoutes)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
