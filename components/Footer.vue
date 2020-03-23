
<template>
  <footer class="container-fluid">
    <div class="row align-items-center">
      <div class="col-sm-9 text-left ">
        {{ $t("footer.made") }} <a href=" https://nuxtjs.org/" target="_blank">Nuxt </a>  {{ $t("footer.hosted") }}
        <a href="https://www.netlify.com/" target="_blank">Netlify </a> -

        {{ $t("footer.how") }}
        <nuxt-link :to="getPostLink()" >
                  {{ $t("footer.check") }}
        </nuxt-link>
      </div>

      <div class="col-sm-2 copy ">
        ©{{ new Date().getFullYear() }} Copyright: Sonia García
      </div>

      <div class="col-sm text-right">
            <a id="go-top" v-if="isVisible" @click="backToTop">
              <font-awesome-icon :icon="['fas', 'long-arrow-alt-up']"/>
            </a>
      </div>

    </div>
  </footer>
</template>

<script>
  export default {

    data: function() {
      return {
        isVisible: true,
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

      getPostLink(){
        switch (this.$i18n.locale) {
           case 'en':
                return "blog/vue-static-site-generator-with-nuxt-and-markdown-create-a-server-less-blog-part-1"
             break;
            case 'es':
             return "es/blog/generador-de-sitios-estaticos-con-vue-nuxt-y-markdown-vamos-a-crear-un-blog-sin-servidor-parte-1"
             break;
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

<style scoped lang = "scss">
   @import '../assets/styles/main.scss';

   footer {
     background-color:$black;
     color:$white;
     min-height: 50px;
     font-family: "IBM Plex Mono", monospace;
     font-size: 16px;
     padding: 30px 15px;

     & > div{
         min-height: 50px;
     }

     a{
       color: $grey-med;
     }

     .copy{
       text-align:right;
     }
   }

  #go-top {
    position: fixed;
    width: 45px;
    height: 45px;
    font-size: 30px;
    text-align: center;
    line-height: 45px;
    display: block;
    right: 20px;
    bottom: 5px;
    border: none;
    opacity: 1;
    color:$grey-light;
    font-weight: 200;

   }


/* MEDIA QUERIES */
@media (max-width: 500px) {
  footer{
    .copy{
        text-align:center;
        padding: 20px 0;
      }
  }

   #go-top {
     right: 10px;
   }
}

</style>
