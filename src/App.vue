<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    navShow () {
      return !this.$route.path.includes('/index')
    },
  },
}
</script>
<style lang="less">
  html, body, #parent {
    height: 100%;
    /*overflow: hidden;*/
    min-width: 1000px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    min-width: 900px;
    position: relative;
    min-height: 100vh;
    background: url("./assets/img/bk.jpg") 100% 100% no-repeat;
    background-size: cover;

    .pageMain {
      position: absolute;
      height: 100%;
      width: 100%;
    }

    .header {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      height: 100px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    }

    .body {
      position: absolute;
      overflow: hidden;
      margin: 0 10%;
      left: 0;
      right: 0;
      top: 100px;
      bottom: 50px;
      /*border-bottom: 1px solid rgba(255, 255, 255, 0.15);*/
      /*border-top: 1px solid rgba(255, 255, 255, 0.15);*/

      .box {
        /*overflow: hidden;*/
        height: 100%;
      }
    }

    .footer {
      position: absolute;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      left: 0;
      right: 0;
      bottom: 0;
      height: 50px;
    }

    /*公共部分*/

    // 各页面标题
    .title {
      margin-top: 25px;
      margin-bottom: 25px;
      text-align: left;
      font-size: 34px;
      color: rgba(255, 255, 255, 1);
    }

    .inline_item {
      display: inline-block;
      margin-right: 15px;
      margin-top: 29px;
    }

    .mask {
      position: absolute;
      bottom: 50px;
      height: 50px;
      width: 100vw;
      background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 470%);
      z-index: 1;
      padding-top: 90px;
      margin-top: -160px;
      /*background: rgba(179, 179, 179, 0.8);*/
    }

  }

  .paginate-list {
    width: 159px;
    margin: 0 auto;
    text-align: left;

    li {
      display: block;

      &:before {
        content: '⚬ ';
        font-weight: bold;
        color: slategray;
      }
    }
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      display: inline-block;
      margin: 0 10px;
    }
  }

  .paginate-links {

    &.items {
      user-select: none;

      a {
        cursor: pointer;
      }

      li.active a {
        font-weight: bold;
      }

      li.next:before {
        content: ' | ';
        margin-right: 13px;
        color: #ddd;
      }

      li.disabled a {
        color: #ccc;
        cursor: no-drop;
      }
    }
  }

</style>
