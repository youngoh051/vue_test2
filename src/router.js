import Vue from 'vue'
import Router from 'vue-router'
import HomeView from "@/views/Web/HomeView.vue";
import m_HomeView from "@/views/Mobile/m_HomeView.vue";

Vue.use(Router)

export default new Router({
    // mode: 'history',
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "HomeView",
            components: {
                web: HomeView,
                mobile: m_HomeView
            }
        },
    
        //하천수위
        {
            path: "/wlvl",
            name: "wWvl",
            components: {
                web: () => import("@/views/Web/Wlvl.vue"),
                // mobile: () => import("@/views/Mobile/m_Rain.vue")
            }
        },
    
        //풍향풍속
        {
            path: "/wdws",
            name: "wWws",
            components: {
                web: () => import("@/views/Web/Wdws.vue"),
                // mobile: () => import("@/views/Mobile/m_Rain.vue")
            }
        },
        //조위
        {
            path: "/tide",
            name: "Tide",
            components: {
                web: () => import("@/views/Web/Tide.vue"),
                // mobile: () => import("@/views/Mobile/m_Rain.vue")
            }
        },
        //강우
        {
            path: "/rain",
            name: "Rain",
            components: {
                web: () => import("@/views/Web/Rain.vue"),
                // mobile: () => import("@/views/Mobile/m_Rain.vue")
            }
        },
        //데이터 조회
        {
            path: "/data_inquiry",
            name: "DataInquiry",
            components: {
                web: () => import("@/views/Web/DataInquiry.vue"),
                // mobile: () => import("@/views/Mobile/m_Rain.vue")
            }
        },
        // vworld popup
        {
            path: "/vworld",
            name: "vworld",
            components: {
                web: () => import("@/components/Vworld/Vworld.vue"),
                // mobile: () => import("@/views/Mobile/m_Rain.vue")
            }
        },
        // cctv popup
        {
            path: "/cctv",
            name: "cctv",
            components: {
                web: () => import("@/components/Cctv/Cctv.vue"),
                // mobile: () => import("@/views/Mobile/m_Rain.vue")
            }
        },
        //모바일 침수예상도
        {
            path: "/m_floodmap",
            name: "m_floodMap",
            components: {
                // default: () => import("@/views/Web/Rain.vue"),
                mobile: () => import("@/views/Mobile/m_floodMap.vue")
            },
        },
        {
            path: "/m_sensormap",
            name: "m_sensorMap",
            components: {
                mobile: () => import("@/views/Mobile/m_sensorMap.vue"),
            },
        },
        {
            path: "/m_evamap",
            name: "m_evaMap",
            components: {
                mobile: () => import("@/views/Mobile/m_evaMap.vue"),
            },
        },
        {
            path: "/m_cctvmap",
            name: "m_cctvMap",
            components: {
                mobile: () => import("@/views/Mobile/m_cctvMap.vue"),
            },
        },
        {
            path: '/login',
            name: 'Login',
            components: {
                web: () => import("@/views/Login.vue"),
                mobile: () => import("@/views/Login.vue"),
            },
        },
        {
            path: '/index_admin',
            name: 'IndexAdmin',
            components: {
                web: () => import("@/views/Web/IndexAdmin.vue"),
            },
        },
        {
            path: '/error_page',
            name: 'ErrorPage',
            components: {
                web: () => import("@/views/Web/ErrorPage.vue"),
            },
        },
        {
            path: '/m_test1',
            name: 'm_test1',
            components: {
                mobile: () => import("@/views/Mobile/m_test1.vue"),
            },
        },
        {
            path: '/m_test2',
            name: 'm_test2',
            components: {
                mobile: () => import("@/views/Mobile/m_test2.vue"),
            },
        },
        {
            path: '/m_test3',
            name: 'm_test3',
            components: {
                mobile: () => import("@/views/Mobile/m_test3.vue"),
            },
        },
        
    ]
})