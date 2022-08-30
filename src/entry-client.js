import {_createApp} from "./main2";

var {app, router} = _createApp()
router.isReady().then(() => {
    console.log("router ready ")
    app.mount("#app")
})
