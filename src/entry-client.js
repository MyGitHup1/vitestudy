import {createApp} from "./main2";

var {app, router} = createApp()
router.isReady().then(() => {
    console.log("router ready ")
    app.mount("#app")
})
