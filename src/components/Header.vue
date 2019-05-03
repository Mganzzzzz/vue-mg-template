<template>
  <header>
    <div
      class="logo"
      @click="index"
    />
    <div class="bfc">
      <slot />
    </div>
  </header>
</template>

<script>
import Nav from './Nav'

export default {
  name: 'Header',
  components: { Nav },
  props: {
    navShow: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    index () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="less">
    header {
        height: 100px;
        /*display: flex;*/
        margin: 0 10%;
        /*justify-content: center;*/
        color: #fff;

        .logo {
            min-width: 306px;
            float: left;
            text-align: left;
            padding-top: 19px;
            cursor: pointer;
            height: 68px;
            background: url("../assets/img/logo.png") 100% 100% no-repeat;
            background-size: contain;

            .logo_text {
                display: inline-block;
            }

            .logo_img {
                height: 68px;
                width: 68px;
                float: left;

                margin-right: 11px;
            }

            .logo_title {
                margin-bottom: 8px;
            }

            .logo_title, .logo_title_en {
                font-size: 34px;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
            }

            .logo_title_en {
                font-size: 21px;
            }
        }

    }
</style>
