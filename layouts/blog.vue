<template>
  <div>
    <Navbar/>

    <nuxt />

     <Footer/>
  </div>
</template>


<script>
  import Navbar from '@/components/NavbarBlog'
  import Footer from '@/components/FooterBlog'
  export default {

    components: {
      Navbar,
      Footer
    }
  }
</script>

<style lang="scss">

</style>
