<template>
    <div class="header">
        <div
            class="button button-base" 
            v-bind:class="[ iconLeftVisible ? `iconfont ${iconLeft}` : '' ]"></div>
        <div class="content">
            <span>{{ title }}</span>
        </div>
        <div
            class="button button-base" 
            v-bind:class="[ iconRightVisible ? `iconfont ${iconRight}` : '' ]"></div>
    </div>    
</template>

<script>
export default {
    name: 'Header',
    props: {
        iconLeftVisible: Boolean,
        iconLeft: String,
        iconRightVisible: Boolean,
        iconRight: String,
        onIconLeftClick: Function,
        title: String,
    },
}
</script>

<style lang="less" scoped>
@import url(../static/fonts/iconfont/iconfont.css);
.header {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 45px;
    background-color: #fff;
    border-bottom: 1px #efefef solid;
}
.header .button-base {
    width: 45px;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
}
.header .button {
    padding: 0px;
    border: none;
    outline: none;
    font-size: 18px;
}
.header .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: 16px;
    font-weight: 400px;
    color: #333333;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>