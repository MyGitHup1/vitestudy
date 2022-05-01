import {createMemoryHistory, createRouter, createWebHashHistory} from "vue-router"

export default createRouter({
    history: createWebHashHistory(),
    // history:createWebHistory(),
    routes: [
        {path: "/", name: "home", component: () => import("../view/Home.vue")},
        {path: "/about", name: "about", component: () => import("../view/About.vue")}
    ]
})

