<template>
  <div id="app">
     <m-header></m-header>
     <router-view></router-view>
     <m-footer></m-footer>
  </div>
</template>

<script>
  import MHeader from 'components/m-header/m-header'
  import MFooter from 'components/m-footer/m-footer'
  import Tab from 'components/tab/tab'
  import ProductDetail from 'components/product-detail/product-detail'

  export default {
    components: {
      MHeader,
      MFooter,
    }
  }
</script>

<style>

</style>
