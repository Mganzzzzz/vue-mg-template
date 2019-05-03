<template>
  <div class="pageMain">
    <div class="header">
      <Header>
        <Nav />
      </Header>
    </div>
    <div class="body">
      <div class="title">
        关于我们
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import TeamList from '@/components/TeamList'
import Footer from '@/components/Footer'
export default {
  name: 'About',
  components: {
    Nav, Header, Footer, TeamList
  }
}
</script>

<style scoped>

</style>
