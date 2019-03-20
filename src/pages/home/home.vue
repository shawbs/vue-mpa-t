<template>
  <div id="app">
    <h1>home</h1>
    <a href="login.html">login</a>
    <img src="@ai/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import "~@as/variables/index";
@import "~@as/app.scss";
</style>
