<template>
  <footer class="container-fluid">
    <div class="imp-section">
      <div class="inner">
        <p class="subscribe-cta">
            {{ $t("footerBlog.optinCTA1") }}
            {{ $t("footerBlog.optinCTA2") }}
        </p>

        <div ref="aWeberScriptHolder">
          <form
            method="post"
            class="af-form-wrapper"
            accept-charset="UTF-8"
            action="https://www.aweber.com/scripts/xxxxxx"
          >
                     <!---your form-->
          </form>
        </div>
      </div>
    </div>

    <div class="row align-items-center footer-bottom">
      <div class="col-sm-9 text-left ">
        {{ $t("footer.made") }} <a href=" https://nuxtjs.org/" target="_blank">Nuxt </a>  {{ $t("footer.hosted") }}
        <a href="https://www.netlify.com/" target="_blank">Netlify </a> -

        {{ $t("footer.how") }}
        <nuxt-link :to="getPostLink()" >
                  {{ $t("footer.check") }}
        </nuxt-link>
      </div>

      <div class="col-lg-5 col-xl-2 copy ">
        ©{{ new Date().getFullYear() }} Copyright: Sonia García
      </div>

      <div class="col-sm text-right">
        <a id="go-top" v-if="isVisible" @click="backToTop">
          <font-awesome-icon :icon="['fas', 'long-arrow-alt-up']" />
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

  mounted() {
    this.onScroll();
    this.createAweberScript();
  },

  methods: {
    onScroll() {
      window.onscroll = () => {
        let atBottom =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight >
          document.documentElement.offsetHeight - 200;
        if (atBottom) {
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      };
    },

    backToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    },

      getPostLink(){
      switch (this.$i18n.locale) {
         case 'en':
              return "vue-static-site-generator-with-nuxt-and-markdown-create-a-server-less-blog-part-1"
           break;
          case 'es':
           return "generador-de-sitios-estaticos-con-vue-nuxt-y-markdown-vamos-a-crear-un-blog-sin-servidor-parte-1"
           break;
       }
    },

    createAweberScript() {
      // There are two scripts so, create 2 script element
      let aWeberScript = document.createElement("script");
      let aWeberScript2 = document.createElement("script");

      // Set attributes
      aWeberScript.setAttribute("type", "text/javascript");
      aWeberScript.setAttribute("language", "javascript");

      aWeberScript2.setAttribute("type", "text/javascript");
      aWeberScript2.setAttribute("language", "javascript");

      // Create inline script
      let inlineScript = document.createTextNode(` (function() {
            //YOUR JS CODE HERE
          })();`);

      // Special handling for in-app browsers that don't always support new windows
      let inlineScript2 = document.createTextNode(` (function() {

           //YOUR JS CODE HERE

        })();`);




      // Append to script
      aWeberScript.appendChild(inlineScript);
      aWeberScript2.appendChild(inlineScript2);


      this.$refs.aWeberScriptHolder.appendChild(aWeberScript);
      this.$refs.aWeberScriptHolder.appendChild(aWeberScript2);


    }
  }

};
</script>

<style scoped lang="scss">
@import "../assets/styles/main.scss";

footer {
  background-color: $black;
  color: $white;
  min-height: 50px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 16px;
  padding: 30px 15px;

   .footer-bottom{
      margin-top: 40px;
      :first-of-type{
        text-align: left;
      }
    }

  & > div {
    min-height: 50px;
  }

  a {
    color: $grey-med;
  }

  .copy {
    text-align: right;
  }

  .subscribe-cta{
    text-align: center;
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
  color: $grey-light;
  font-weight: 200;
}

.af-body.af-standards,
.af-form,
.af-body {
  width: 100%;
}

// AWEBER //
#af-form-164720178 .af-body .af-textWrap{width:98%;display:block;float:none;}
#af-form-164720178 .af-body .privacyPolicy{color:#444444;font-size:16px;font-family:Helvetica, sans-serif;}
#af-form-164720178 .af-body a{color:#777777;text-decoration:underline;font-style:normal;font-weight:normal;}
 //YOUR AWEBER STYLES HERE

</style>
