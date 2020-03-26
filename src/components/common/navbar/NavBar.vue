<!--  -->
<template>
  <div class="nav-bar" :style="bgColor1">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data () {
      return {

      };
    },

    props: {
      bgColor: {
        type: String,
        default: 'pink'
      }
    },

    //components: {},

    computed: {
      bgColor1(){
        return {backgroundColor: this.bgColor}
      }
    },

    //mounted: {},

    //methods: {}
  }

</script>
<style>
.nav-bar{
  display: flex;
  line-height: 44px;
  height: 44px;
  box-shadow: 0 2px 2px rgba(100, 100, 100, .1);
  /* background-color: red; */
}
.left,.right{
  width: 60px;
}
.center{
  flex: 1;
  /* background-color: rgb(135, 179, 245); */
  font-size: 18px;
  text-align: center;
}
</style>