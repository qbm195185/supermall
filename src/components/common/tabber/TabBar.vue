<!--  -->
<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar',
    data () {
      return {
      };
    },

    // components: {},

    // computed: {},

    // mounted: {},

    // methods: {}
  }

</script>
<style>
  #tabBar{
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.3);
  }
  
</style>