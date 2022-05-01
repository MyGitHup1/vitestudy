import {createSSRApp} from 'vue'
import App from './App.vue'
import {createR} from "./router/index2";
// @ts-ignore
import  store from "./store/index.ts"
const modules = import.meta.glob('./common/*.vue')
console.log("main222222221")
export function createApp() {
    var app = createSSRApp(App);
    app.use(store)
    for (const path in modules) {
        modules[path]().then((mod) => {
            app.component(mod.default.name, mod.default)
        })
    }
    var router = createR();
    app.use(router)
    return {app, router}
}