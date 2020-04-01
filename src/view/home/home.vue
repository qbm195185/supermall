<!--  -->
<template>
  <div id="home">
    <nav-bar style="backgroundColor:pink">
      <div slot="center" style="color:awhite">购物街</div>
    </nav-bar>
    <banner :banner="banners" />
    <recomm :recommends="recommend" />
    <feature />
    <tabControl class="tab-control" :titles="['流行','新选','精款']" />
    <div style="height:2000px">
      
    </div>
  </div>
  
</template>

<script>

import navBar from 'components/common/navbar/NavBar'
import tabControl from 'components/content/tabControl'

import banner from './banners'
import recomm from './HomeRecommendView'
import feature from './feature'

import {getHomeMultidata,getHomeGoods} from 'network/home'

  export default {
    name: 'home',
    data () {
      return {
        banners: [],
        dKeyword: [],
        keywords: [],
        recommend: [],

        goods:{
          'pop':{
            page: 0,
            list: []
          },
          'new':{
            page: 0,
            list: []
          },
          'sell':{
            page: 0,
            list: []
          }
        }
      };
    },

    components: {
      navBar,
      tabControl,
      banner,
      recomm,
      feature,
      tabControl
    },

    created(){
      // 请求多个数据
      this.getHomeMultidata(),
      this.getHomeGoods('pop'),
      this.getHomeGoods('news'),
      this.getHomeGoods('sell')
    },

    //computed: {},

    //mounted: {},

    methods: {
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.dKeyword = res.data.dKeyword.list
          this.keywords = res.data.keywords.list
          this.recommend = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }
    }
  }

</script>
<style>
#home{
  padding-top: 44px;
  padding-bottom: 70px;
}

.tab-control{
  position: sticky;
  top: 44px;
}
</style>