<!-- 这是轮播图组件 -->
<template>
  <div>
    <Carousel v-model="value1"  loop autoplay>
      <!-- <CarouselItem>
          <div class="demo-carousel">1</div>
      </CarouselItem> -->
      <!-- <CarouselItem v-for="i in imges"><img src="i.image" alt="" srcset=""></CarouselItem> -->
      <CarouselItem v-for="i in imges">
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
        imges: []
      };
    },

    props: {
      
    },

    created(){
      // console.log(this.imges)
      getHomeMultidata().then(res => {
        // console.log(res)
        // this.result = res
        this.imges = res.data.banner.list
        console.log(this.imges[0].image)
      })
    }
    //components: {},

    //computed: {},

    //mounted: {},

    //methods: {}
  }

</script>
<style>

  .demo-carousel{
    height: 100px;
  }

  .demo-carousel{
    height: 14%;
    width: 100%;
  }
  img{
    height: 14%;
    width: 100%;
  }
</style>