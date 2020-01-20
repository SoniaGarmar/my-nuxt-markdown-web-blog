<template>
  <div>
    <Navbar/>
    <LangSwitcher/>

    <nuxt />

     <Footer/>
  </div>
</template>


<script>
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Footer'
  import LangSwitcher from '@/components/LangSwitcher'


  export default {
    components: {
      Navbar,
      Footer,
      LangSwitcher
    }
  }
</script>

<style lang="scss">

</style>
