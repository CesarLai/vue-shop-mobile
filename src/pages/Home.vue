<template>
  <div class="container">
    <Header 
        iconLeftVisible
        iconLeft="icon-arrowleft" 
        iconRightVisible
        iconRight="icon-ellipsis" 
        title="商城首页" />
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
.container {
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    flex-direction: column;
    flex: 1;
}
</style>
