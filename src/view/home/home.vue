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

import {getHomeMultidata} from 'network/home'

  export default {
    name: 'home',
    data () {
      return {
        title: 111,
        result: NaN,
        banners: []
      };
    },

    components: {
      navBar,
    },

    created(){
      // 请求多个数据
      getHomeMultidata().then(res => {
        // console.log(res)
        // this.result = res
        this.banners = res.data.banner.list
      })

    }
    //computed: {},

    //mounted: {},

    //methods: {}
  }

</script>
<style>
</style>