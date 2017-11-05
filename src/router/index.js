import Vue from 'vue'
import Router from 'vue-router'
// /About
import About from '@/components/about/about'
// /Blogs and /Blogs/singleStandard
import SingleStandardPost from '@/components/blogs/singleStandardPost'
// /Blogs/singleVideo
import SingleVideoPost from '@/components/blogs/singleVideoPost'
// /Blogs/singleAudio
import SingleAudioPost from '@/components/blogs/singleAudioPost'
// /Blogs/singleGallery
import SingleGalleryPost from '@/components/blogs/singleGalleryPost'
// /Categories
import Categories from '@/components/categories/categories'

// /Contact
import Contact from '@/components/contact/contact'
// /
import Home from '@/components/home/home'
// /Styles
import Styles from '@/components/styles/styles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component:About 
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: SingleStandardPost
    },
        {
          path: '/blogs/SingleVideoPost',
          name: 'SingleVideoPost',
          component: SingleVideoPost
        },
        {
          path: '/blogs/SingleAudioPost',
          name: 'SingleAudioPost',
          component: SingleAudioPost
        },
        {
          path: '/blogs/SingleGalleryPost',
          name: 'SingleGalleryPost',
          component: SingleGalleryPost
        },
        {
          path: '/blogs/SingleStandardPost',
          name: 'SingleStandardPost',
          component: SingleStandardPost
        },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
        {
          path: '/Categories/WordPress',
          name: 'WordPress',
          component: Categories
        },
        {
          path: '/Categories/HTML',
          name: 'HTML',
          component: Categories
        },
        {
          path: '/Categories/Photography',
          name: 'Photography',
          component: Categories
        },
        {
          path: '/Categories/UI',
          name: 'UI',
          component: Categories
        },
        {
          path: '/Categories/Mockups',
          name: 'Mockups',
          component: Categories
        },
        {
          path: '/Categories/Branding',
          name: 'Branding',
          component: Categories
        },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/styles',
      name: 'styles',
      component: Styles
    }
    
  ]
})
