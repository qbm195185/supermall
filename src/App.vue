<template>
  <div id="app">

    <router-view />
    <mainTabBar />
  </div>
</template>

<script>

import mainTabBar from 'components/content/tabber/mainTabBar'

export default {
  name: 'App',
  components: {
    mainTabBar,
  }
}
</script>
@import "assets/css/base.css"

<style>

</style>
