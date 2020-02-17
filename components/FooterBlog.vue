
<template>
  <footer class="container-fluid">



          <div class= "imp-section">
            <div class="inner">
              <p class="subscribe-cta"> Stay updated!</p>

              <div ref="aWeberScriptHolder">
                <div class="AW-Form-164720178"></div>

                <!-- <script type="text/javascript">(function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = "//forms.aweber.com/form/78/164720178.js";
                    fjs.parentNode.insertBefore(js, fjs);
                    }(document, "script", "aweber-wjs-8oqni5d0c"));
                </script> -->
              </div>

            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-sm-9 text-left ">
              Made with <a href=" https://nuxtjs.org/" target="_blank">Nuxt </a>and hosted on <a href="https://www.netlify.com/ " target="_blank">Netlify </a> -

              Wanna see how? <a href=" https://nuxtjs.org/"> Check my blog post </a>
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
        isVisible: true
      };
    },

  mounted () {
    this.onScroll();
    this.createAweberScript();
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
      },

      createAweberScript (){
         // Create a script element
            let aWeberScript = document.createElement('script');

            // Set attributes
            aWeberScript.setAttribute('type', 'text/javascript');
            aWeberScript.setAttribute('language', 'javascript');

            // Create inline script
            let inlineScript = document.createTextNode(`(function(d, s, id) {
                            var js, fjs = d.getElementsByTagName(s)[0];
                            if (d.getElementById(id)) return;
                            js = d.createElement(s); js.id = id;
                            js.src = "//forms.aweber.com/form/78/164720178.js";
                            fjs.parentNode.insertBefore(js, fjs);
                            }(document, "script", "aweber-wjs-8oqni5d0c"));`);

            // Append to script
            aWeberScript.appendChild(inlineScript);

            // Append script
          // this.$refs.hello.insertAdjacentElement('afterend', script);

            this.$refs.aWeberScriptHolder.appendChild(aWeberScript);
      }
    },


    // mounted () {
    //   this.onScroll()
    // },

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


      .imp-section {
        background-color: $black;
        padding: 15px;
        .inner {
          border: 2px solid $white;
          padding: 40px;
          font-family: "IBM Plex Mono", monospace;
          color: $white;
          font-size: 1.8rem;
          line-height: 1.9rem;
        }
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



   .af-body.af-standards, .af-form,  .af-body{
        width: 100%;
   }

  /deep/ #af-form-164720178{
  max-width: 100%;

  .af-body{
    text-align: center;
  }

  .af-element{
      display: inline-block;

      input.text{
        width: 400px!important;
        padding-top: 12px!important;
        padding-bottom: 12px!important;
        background-color: $white;
      }

      label.previewLabel{
        font-family: 'IBM Plex Mono', monospace;
        color: $grey-med;
        position: relative;
        top: 60px;
        left: 20px;
      }

      input[type="submit"]{
        font-family: 'IBM Plex Mono', monospace;
        display: inline-block;
        border-radius: 0px;
        text-decoration: none;
        padding: 20px 40px;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 4px;
        border: 1px solid $base-color;
        background-color: $base-color;
        color: $white;
        &:hover{

          color: $base-color;
          background-color: transparent;
        }
      }

      &.privacyPolicy{
        width: 100%;
        display: block;
        margin-left: 220px;
      }

  }
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
