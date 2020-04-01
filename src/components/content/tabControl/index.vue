<!--  -->
<template>
  <div class="tabControl">
    <div v-for="(item,index) in titles"  class="tabControl_item" :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        currentIndex: 0
      };
    },

    props: {
      titles: {
        type: Array,
        default(){
          return []
        }
      }
    },

    //components: {},

    // computed: {},

    //mounted: {},

    methods: {
      itemClick(v){
        this.currentIndex = v
      }
    }
  }

</script>
<style>

  .tabControl{
    display: flex;
    text-align: center;
    height: 45px;
    line-height: 45px;
    font-size: 18px;
    background-color: rgb(250, 250, 250);
  }
  .tabControl_item{
    flex: 1;
  }
  .tabControl_item span{
    padding: 8px;
  }

  .active span{
    color: #ff5777;
    border-bottom: 3px solid #ff5777;
  }
</style>