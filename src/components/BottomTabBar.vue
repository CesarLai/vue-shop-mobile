<template>
  <div class="tabbar">
    <div v-for="(tab, index) in tabs" class="tab" :key="index" @click="selectTab(index, $event)">
      <i
        class="tab-icon iconfont"
        :class="[activeIndex === index ? 'active' : '', activeIndex === index ? tab.activeIcon : tab.icon]"
      />
      <span class="tab-title" :class="[activeIndex === index ? 'active' : '']">{{ tab.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtomTabBar",
  props: {
    tabs: Array,
    onSelectTab: Function
  },
  data() {
    return {
      activeIndex: 0,
      callbackSelectTab: this.onSelectTab
    };
  },
  methods: {
    selectTab: function(i, e) {
      this.callbackSelectTab(i);
    }
  }
};
</script>

<style lang="less" scoped>
@import url(../static/styles/color.less);
.tabbar {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 8px 0;
  background-color: #fff;
  border-top: 1px #efefef solid;
}
.tabbar .tab {
  flex: 1;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
.tabbar .tab .tab-title {
  font-size: 14px;
  color: #666666;
  margin-top: 3px;
}
.tabbar .tab .tab-icon {
  font-size: 22px;
  color: #666666;
}
.tabbar .tab .tab-title.active,
.tabbar .tab .tab-icon.active {
  color: @primaryColor;
}
</style>