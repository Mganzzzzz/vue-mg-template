<template>
  <div class="nav">
    <ul v-if="navShow">
      <li
        v-for="(m ,k) in menus"
        :key="k"
        :class="{active: m.active}"
        @click="changeNav(m)"
      >
        {{ m.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      menuOptions: [
        { title: '首页', },
        { title: '新闻中心', },
        { title: '专家团队', },
        { title: '产品服务', },
        { title: '联系我们', active: true }
      ]
    }
  },
  computed: {
    navShow () {
      return this.$route.path !== '/index'
    },
    menus: {
      get: function () {
        const { path } = this.$route
        let { options: op } = this.$router
        let { routes } = op
        routes = routes.filter(t => t.path !== '/')
        return routes.map(r => ({ title: r.title, active: r.path === path, path: r.path }))
      },
    }
  },
  methods: {
    changeNav (n) {
      this.$router.push(n.path)
    },
  },
  create () {
  },

}
</script>

<style scoped lang="less">

    .nav {
        margin-left: 170px;

        ul {
            list-style: none;
            overflow: hidden;
            min-width: 500px;
            li {
                position: relative;
                float: left;
                width: auto;
                padding-top: 32px;
                margin-right: 32px;
                padding-bottom: 30px;
                cursor: pointer;

                &.active {
                    color: #CCFF00;

                    &::after {
                        content: '';
                        position: absolute;
                        bottom: 0px;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background-color: #CCFF00;
                    }
                }
            }
        }

        .menu_cell {

            height: 100%;
            position: relative;
        }

        .active_lodash {

        }
    }
</style>
