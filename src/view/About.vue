<template>
  <p>about111249</p>
  <p>{{ num }}</p>
  <p @click="$store.state.num+=1">store{{ $store.state.num }}</p>
  <render-fun></render-fun>
  <carbon-accessibility/>
  <ph-activity-light></ph-activity-light>
  <ph-apple-logo-fill></ph-apple-logo-fill>
  <mdi-ab-testing></mdi-ab-testing>
  <audio autoplay muted controls src="于洋 - 望爱却步.mp3"></audio>
</template>
<script>
import {ref} from "vue";
import RenderFun from "./RenderFun.vue";

console.log("about env",process.env.NODE_ENV)
export default {
  name: "About",
  components: {RenderFun},
  setup() {
    var num = ref(1)
    return {num}
  },
  created() {
    console.log("About create")
  },
  unmounted() {
    console.log("about xiaohuia")
  }
}
</script>

<style lang="scss">
</style>