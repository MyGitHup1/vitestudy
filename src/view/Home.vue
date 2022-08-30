<template>
    <img alt="Vue logo" src="../assets/logo.png"/>
    <p>store:{{ $store.state.num }}</p>
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite"/>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue"

export default {
  name: "Home",
  created() {
    console.log("Home create")
  },
  unmounted() {
    console.log("Home xiaohui")
  },
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

</style>