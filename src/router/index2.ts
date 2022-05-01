import {createMemoryHistory, createRouter, createWebHistory} from "vue-router"

console.log(22222222222222, import.meta.env.SSR)

export function createR() {
    return createRouter({
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes: [
            {path: "/", name: "home", component: () => import("../view/Home.vue")},
            {path: "/about", name: "about", component: () => import("../view/About.vue")}
        ]
    })
}