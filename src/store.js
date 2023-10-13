import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// if (process.env.NODE_ENV === "production") {
//   console.log("production");
// } else if (process.env.NODE_ENV === "development") {
//   console.log("development");
// }

export default new Vuex.Store({
    state: {
        // service: 'http://127.0.0.1:8080',
        // service: 'http://localhost:8080',
        // geoserverWms: 'http://119.198.112.201:9999/geoserver/fldm_layer/wms',
        // service: 'https://safecity.busan.go.kr',
        // geoserverWms: 'https://safecity.busan.go.kr/geoserver/iots/wms',
        service: process.env.VUE_APP_API_URL,
        geoserverWms: process.env.VUE_APP_GEO_URL,
        road : process.env.VUE_APP_API_ROAD,
        userId:'',
        userName:'',
        accessToken:''
    },
    mutations: {
        setAccessToken(state, token) {
            state.accessToken = token;
        },
        clearAccessToken(state) {
            state.accessToken = '';
        },
    },
    actions: {
        updateAccessToken({ commit }, token) {
            commit('setAccessToken', token);
        },
        clearAccessToken({ commit }) {
            commit('clearAccessToken');
        },
    }
})
