<!--  -->
<template>
  <div id="home">
    <nav-bar style="backgroundColor:pink">
      <div slot="center" style="color:white">购物街</div>
    </nav-bar>
    首页
  </div>
</template>

<script>

import navBar from 'components/common/navbar/NavBar'

  export default {
    name: 'home',
    data () {
      return {
        title: 111,
      };
    },

    components: {
      navBar,
    },

    //computed: {},

    //mounted: {},

    //methods: {}
  }

</script>
<style>
</style>