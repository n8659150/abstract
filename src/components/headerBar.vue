<template>
<div>
    <!-- header 
    ================================================== -->
    <header class="short-header" :class="[(searchOpened)?'search-visible':'']">   

      <div class="gradient-block"></div>	

      <div class="row header-content">

        <div class="logo">
            <a href="index.html">Author</a>
          </div>

        <nav id="main-nav-wrap">
          <ul class="main-navigation sf-menu">
            <li :class="[(currentActived == 'home')?'current':'']"><router-link to="/">Home</router-link></li>
            <li class="has-children" :class="[(currentActived == 'categories')?'current':'']">
              <router-link to="/categories">Categories</router-link>
              <ul class="sub-menu">
                    <li><router-link to="/categories/WordPress">WordPress</router-link></li>
                    <li><router-link to="/categories/HTML">HTML</router-link></li>
                    <li><router-link to="/categories/Photography">Photography</router-link></li>
                    <li><router-link to="/categories/UI">UI</router-link></li>
                    <li><router-link to="/categories/Mockups">Mockups</router-link></li>
                    <li><router-link to="/categories/Branding">Branding</router-link></li>
                </ul>
            </li>
            <li class="has-children" :class="[(currentActived == 'blogs')?'current':'']">
              <router-link to="/blogs">Blog</router-link>
              <ul class="sub-menu">
                    <li><router-link to="/blogs/SingleVideoPost">Video Post</router-link></li>
                    <li><router-link to="/blogs/SingleAudioPost">Audio Post</router-link></li>
                    <li><router-link to="/blogs/SingleGalleryPost">Gallery Post</router-link></li>
                    <li><router-link to="/blogs/SingleStandardPost">Single Standard Post</router-link></li>
                </ul>
            </li>
            <li :class="[(currentActived == 'styles')?'current':'']"><router-link to="/Styles">Styles</router-link></li>
            <li :class="[(currentActived == 'about')?'current':'']"><router-link to="/About">About</router-link></li>	
            <li :class="[(currentActived == 'contact')?'current':'']"><router-link to="/Contact">Contact</router-link></li>										
          </ul>
        </nav> <!-- end main-nav-wrap -->

        <div class="search-wrap">
          
          <form role="search" method="get" class="search-form" action="#">
            <label>
              <span class="hide-content">Search for:</span>
              <input type="search" class="search-field" placeholder="Type Your Keywords" value="" name="s" title="Search for:" autocomplete="off">
            </label>
            <input type="submit" class="search-submit" value="Search">
          </form>

          <a href="#" id="close-search" @click="searchClose()" class="close-btn">Close</a>

        </div> <!-- end search wrap -->	

        <div class="triggers">
          <a class="search-trigger" href="#" @click="searchToggle()"><i class="fa fa-search"></i></a>
          <a class="menu-toggle" href="#"><span>Menu</span></a>
        </div> <!-- end triggers -->	
        
      </div>     		
      
    </header> <!-- end header -->
   </div>
</template>

<script>
export default {
  name: "headerBar",
  data(){
    return {
      searchOpened:false
    }
  },
  methods:{
    searchToggle(){
      this.searchOpened = !this.searchOpened;
    },
    searchClose(){
      this.searchOpened = false;
    }
  },
  computed:{
    currentActived(){
      if (this.$route['path'] == '/') {
        return 'home'
      }

      if (this.$route['path'].indexOf('categories') > 0) {
        return 'categories'
      } 
      else if (this.$route['path'].indexOf('blogs') > 0) {
        return 'blogs'
      } 
      else if (this.$route['path'].indexOf('styles') > 0) {
        return 'styles'
      } 
      else if (this.$route['path'].indexOf('about') > 0) {
        return 'about'
      } 
      else if (this.$route['path'].indexOf('contact') > 0) {
        return 'contact'
      } 
      else {
        return -1
      }
      
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->