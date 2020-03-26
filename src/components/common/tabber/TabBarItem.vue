<!--  -->
<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <!-- <slot v-if="!isActive" name="item-icon"></slot> -->
      <div v-else><slot name="item-icon-active"></slot></div>
      <!-- <slot v-else name="item-icon-active"></slot> -->
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        // isActive:true,
      };
    },
    props:{
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      },
    },

    //components: {},

    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },

    //mounted: {},

    methods: {
      itemClick(){
        this.$router.push(this.path);
      }
    }
  }

</script>
<style>

  .tab-bar-item{
    margin-top: 5px;
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 13px;
    /* line-height: 49px; */
  }
  .tab-bar-item img{
    height: 25px;
    width: 28px;
    vertical-align: middle;
  }
  /* .active{
    color: red;
  } */
</style>