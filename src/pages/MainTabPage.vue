<template>
  <div class="page-container">
    <router-view class="tab-content"></router-view>
    <BottomTabBar :tabs="tabs" :on-select-tab="onSelectTab" />
  </div>
</template>

<script>
import BottomTabBar from "../components/BottomTabBar";
export default {
  name: "App",
  components: {
    BottomTabBar
  },
  data() {
    return {
      tabs: [
        { title: "首页", icon: "icon-home", activeIcon: "icon-home-fill" },
        { title: "我的", icon: "icon-user", activeIcon: "icon-user" }
      ]
    };
  },
  methods: {
    onSelectTab: function(tabIndex) {
      console.log("onSelectTab", tabIndex);
      console.log("this", this);
      console.log("router", this.$router);
      switch (tabIndex) {
        case 0:
          this.$router.replace("/");
          break;
        case 1:
          this.$router.replace("/mine");
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.tab-content {
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  flex: 1;
}
</style>