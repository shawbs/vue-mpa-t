<template>
  <div id="app">
    <h1>login</h1>
    <a class="btn btn-primary" href="home.html">home</a>
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
