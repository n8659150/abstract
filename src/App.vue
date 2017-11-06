<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <headerBar></headerBar>
    <keep-alive>  
    <router-view/>
    </keep-alive include="home">
    <footerBar></footerBar>
  </div>
</template>

<script>
import headerBar from '@/components/headerBar'
import footerBar from '@/components/footerBar'
export default {
  name: 'app',
  components:{
    headerBar,
    footerBar
  }
}
</script>

