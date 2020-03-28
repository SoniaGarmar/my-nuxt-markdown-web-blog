<template>
  <div>
    <Navbar/>

    <nuxt />

     <Footer/>
  </div>
</template>


<script>
  import Navbar from '@/components/NavBar'
  import Footer from '@/components/Footer'



  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>

<style lang="scss">

</style>
