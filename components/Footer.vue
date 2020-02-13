
<template>
  <footer class="container-fluid">
    <div class="row align-items-center">
      <div class="col-sm-9 text-left ">
        Made with <a href=" https://nuxtjs.org/" target="_blank">Nuxt </a>and hosted on <a href="https://www.netlify.com/ " target="_blank">Netlify </a> -

        Wanna see how? <a href=" https://nuxtjs.org/"> Check my blog post </a>
      </div>

      <div class="col-sm-2 text-center ">
        ©{{ new Date().getFullYear() }} Copyright: Sonia García
      </div>

      <div class="col-sm text-right">
            <a id="go-top" v-if="isVisible" @click="backToTop">
              <font-awesome-icon :icon="['fas', 'angle-up']"/>
            </a>
      </div>

    </div>
  </footer>
</template>

<script>
  export default {

    data: function() {
      return {
        isVisible: true
      };
    },


    methods: {
      onScroll () {
        window.onscroll = () => {
          let atBottom = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight > document.documentElement.offsetHeight -200;
          if (atBottom) {
            this.isVisible = true;
          } else {
            this.isVisible = false;
          }
        }
      },

      backToTop () {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
      }
    },


    mounted () {
      this.onScroll()
    },

  }

</script>

<style lang = "scss">
   @import '../assets/styles/main.scss';

   footer {
     background-color:$black;
     color:$white;
     min-height: 50px;
     font-family: "IBM Plex Mono", monospace;
     font-size: 16px;
     padding: 15px;

     & > div{
         height: 50px;
     }

     a{
       color: $grey-med;
     }
   }

  #go-top {
    position: fixed;
    width: 45px;
    height: 45px;
    font-size: 40px;
    text-align: center;
    line-height: 45px;
    display: block;
    right: 30px;
    bottom: 5px;
    border: none;
    opacity: 1;
    color:$white;

   }
</style>
