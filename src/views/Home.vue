<template>
  <div class="pageMain">
      <Header/>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    Cell, Footer, Header,
  },
  data () {
    return {
      bgImg,
      bgSpeed: 4,
      cellSpeed: 4,
      debuger: true,
      currentInfo: '',
      cellFloat: '',
      leftShow: 0,
      cellTextShow: false,
      menus: [
        { title: '公司简介', left: 39, top: -49, active: true, },
        { title: '新闻中心', left: 214, top: -16 },
        { title: '专家团队', left: -83, top: 63 },
        { title: '产品服务', left: 214, top: 280 },
        { title: '联系我们', left: 90, top: 280 + 20 }
      ],
      mapping: {
        '公司简介': 'introduce',
        '新闻中心': 'news',
        '专家团队': 'team',
        '产品服务': 'service',
        '联系我们': 'contact',
      }
    }
  },
  computed: {
    navShow () {
      return !this.$route.path.includes('/index')
    },
    bgAnimationSpeed () {
      return `${this.bgSpeed}s`
    },
    cellAnimationSpeed () {
      return `${this.cellSpeed}s`
    }
  },
  mounted () {
    $(this.$refs.cellBg).on('animationend', () => {
      log('end')
      // this.leftShow = 1
      // this.cellFloat = 'float infinite animated'
    })
  },
  methods: {
    changeLeft (e) {
      const p = this.mapping[e.title]
      this.$router.push(`/index/${p}`)
    },
    animateReset () {

    }
  },
}
</script>

<style scoped lang="less">
  .pageMain {
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  .float {
    animation-name: float;
    animation-timing-function: linear;
    animation-duration: 3s;
  }

  .bg {
    &.upIn {
      animation-name: upIn;
    }

    position: absolute;
    pointer-events: none;
    height: 1000%;
    width: 100%;
    /*opacity: 0;*/
    background-image: url("../assets/img/new3.png");
    background-size: 100%;
    /*background-size: cover;*/
    background-repeat: no-repeat;
    animation-duration: 3s;
    animation-timing-function: linear;
  }

  @keyframes upIn {
    0% {
      top: 100%;
      opacity: 1
    }
    25% {
      top: 55%;
      opacity: 1
    }
    50% {
      top: 0%;
      opacity: 1
    }
    75% {
      top: -50%;
      opacity: 1
    }
    100% {
      top: -90%;
      opacity: 1
    }
  }

  .bfc {
    overflow: hidden;
  }

  .left {
    float: left;
    text-align: left;
    width: 50%;
    padding-top: 0px;
    overflow: auto;
    height: 100%;
    color: #fff;
  }

  .right {
    height: 100vh;
    float: left;
    position: relative;
    display: inline-block;
    width: 50%;
    padding-top: 107px;
  }

  .debuger {
    color: white;
    position: fixed;
    bottom: 100px;
    right: 100px;
    width: 200px;
    height: 200px;
  }
</style>
