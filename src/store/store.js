import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        mycity: '请选择城市'
    },
    mutations: {
        cityChoosed(state, name) {
            state.mycity = name
        }
    }
})


export default store