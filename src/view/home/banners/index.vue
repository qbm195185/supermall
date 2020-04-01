<!-- 这是轮播图组件 -->
<template>
  <div>
    <Carousel v-model="value1"  loop autoplay>
      <CarouselItem v-for="i in banner">
          <div class="demo-carousel">
            <a :href="i.link"><img :src="i.image" alt="" /></a>
          </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>

  import {getHomeMultidata} from 'network/home'

  export default {
    name: '',
    data () {
      return {
        value1: 0,
        images: []
      }
    },

    props: {
      banner:{
        type:Array,
        default: ()=>Array,
        required: true
      }
    },

    created(){
      console.log(typeof(this.banner),"banner")
    },
    watch:{
      banner: function(n,o){
        this.images = n
        this.update
      }
    },
    //components: {},

    //computed: {},

    //mounted: {},

    methods: {
      update(){
        console.log(this.images)
      }
    }
  }
</script>
<style>

  .demo-carousel{
    height: 12%;
    width: 100%;
  }
  img{
    height: 12%;
    width: 100%;
  }
</style>