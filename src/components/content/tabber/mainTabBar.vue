<!--  -->
<template>
  <tabBar>
      <tabBarItem path="/home" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabBarItem>
      <tabBarItem path="/category" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tabBarItem>
      <tabBarItem path="/shopcart" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabBarItem>
      <tabBarItem path="/profile" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tabBarItem>
    </tabBar>
</template>

<script>

import tabBar from 'components/common/tabber/TabBar'
import tabBarItem from 'components/common/tabber/TabBarItem'

  export default {
    name: '',
    data () {
      return {
      };
    },

    components: {
      tabBar,
      tabBarItem,
    },

    //computed: {},

    //mounted: {},

    //methods: {}
  }

</script>
<style>
</style>