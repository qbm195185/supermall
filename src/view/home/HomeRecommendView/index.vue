<!--  -->
<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend_i">
      <a :href="item.link">
        <img :src="item.image" alt="" style="height:70px;width:90%">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recomm',
    data () {
      return {
      };
    },

    props:{
      recommends:{
        type: Array,
        default: () => Array
      }
    },

    //components: {},

    //computed: {},

    //mounted: {},

    //methods: {}
  }

</script>
<style>

.recommend{
  padding: 15px 0 0 15px;

  display: flex;
  width: 100%;

  border-bottom: 8px solid #eee;
}
.recommend_i{
  flex: 1;
  /* height: 70px; */
  text-align: center;
  padding-bottom: 10px;
}

</style>