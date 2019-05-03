<template>
  <footer>
    <div class="footer_info">
      © 2009-2019 copyright
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="less">
  footer {
    /*height: 59px;*/
    /*border-top: 1px solid rgba(255, 255, 255, 0.15);*/
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    /*padding-top: 16px;*/
    &:before {
      clear: both;
    }

    .footer_info {
      margin: 0 auto;
      width: 587px;
      height: 16px;
      line-height: 38px;
      font-size: 12px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);

      /*line-height: 30px;*/
    }
  }

</style>
