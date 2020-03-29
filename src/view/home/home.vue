<!--  -->
<template>
  <div id="home">
    <nav-bar style="backgroundColor:pink">
      <div slot="center" style="color:white">购物街</div>
    </nav-bar>
    <banner :imges="this.banners"></banner>
    首页
    <br>
    <i-button>111</i-button>
  </div>
</template>

<script>

import navBar from 'components/common/navbar/NavBar'
import banner from './banners'


import {getHomeMultidata} from 'network/home'

  export default {
    name: 'home',
    data () {
      return {
        value1:0,
        title: 111,
        result: NaN,
        banners: [],
        dKeyword: [],
        keywords: [],
        recommend: []
      };
    },

    components: {
      navBar,
      banner
    },

    created(){
      // 请求多个数据
      getHomeMultidata().then(res => {
        // console.log(res)
        // this.result = res
        this.banners = res.data.banner.list
        console.log(this.banners)
        this.dKeyword = res.data.dKeyword.list
        this.keywords = res.data.keywords
        this.recommend = res.data.recommend
      })

    }
    //computed: {},

    //mounted: {},

    //methods: {}
  }

</script>
<style>
</style>