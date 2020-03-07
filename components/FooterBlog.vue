<template>
  <footer class="container-fluid">
    <div class="imp-section">
      <div class="inner">
        <p class="subscribe-cta">Stay updated!</p>

        <div ref="aWeberScriptHolder">
          <form
            method="post"
            class="af-form-wrapper"
            accept-charset="UTF-8"
            action="https://www.aweber.com/scripts/addlead.pl"
          >
            <div style="display: none;">
              <input type="hidden" name="meta_web_form_id" value="164720178" />
              <input type="hidden" name="meta_split_id" value="" />
              <input type="hidden" name="listname" value="awlist5544132" />
              <input
                type="hidden"
                name="redirect"
                value="https://www.aweber.com/thankyou-coi.htm?m=text"
                id="redirect_a6f1c2701552e4a91dbf646e22701032"
              />

              <input
                type="hidden"
                name="meta_adtracking"
                value="Code_with_sonia"
              />
              <input type="hidden" name="meta_message" value="1" />
              <input type="hidden" name="meta_required" value="email" />

              <input type="hidden" name="meta_tooltip" value="" />
            </div>
            <div id="af-form-164720178" class="af-form">
              <div id="af-body-164720178" class="af-body af-standards">
                <div class="af-element">
                  <label class="previewLabel" for="awf_field-105491711"
                    >Email</label
                  >
                  <div class="af-textWrap">
                    <input
                      class="text"
                      id="awf_field-105491711"
                      type="text"
                      name="email"
                      value=""
                      tabindex="500"
                      onfocus=" if (this.value == '') { this.value = ''; }"
                      onblur="if (this.value == '') { this.value='';} "
                    />
                  </div>
                  <div class="af-clear"></div>
                </div>
                <div class="af-element buttonContainer">
                  <input
                    name="submit"
                    class="submit"
                    type="submit"
                    value="Subscribe"
                    tabindex="501"
                  />
                  <div class="af-clear"></div>
                </div>
                <div
                  class="af-element privacyPolicy"
                  style="text-align: center"
                >
                  <p>
                    We respect your
                    <a
                      title="Privacy Policy"
                      href="https://www.aweber.com/permission.htm"
                      target="_blank"
                      rel="nofollow"
                      >email privacy</a
                    >
                  </p>
                  <div class="af-clear"></div>
                </div>
              </div>
            </div>
            <div style="display: none;">
              <img
                src="https://forms.aweber.com/form/displays.htm?id=jGws7EwMjOwc"
                alt=""
              />
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="row align-items-center footer-bottom">
      <div class="col-lg-7 col-xl-9 ">
        Made with <a href=" https://nuxtjs.org/" target="_blank">Nuxt </a>and
        hosted on
        <a href="https://www.netlify.com/ " target="_blank">Netlify </a> - Wanna
        see how? <a href=" https://nuxtjs.org/"> Check my blog post </a>
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
              var IE = /*@cc_on!@*/false;
              if (!IE) { return; }
              if (document.compatMode && document.compatMode == 'BackCompat') {
                  if (document.getElementById("af-form-164720178")) {
                      document.getElementById("af-form-164720178").className = 'af-form af-quirksMode';
                  }
                  if (document.getElementById("af-body-164720178")) {
                      document.getElementById("af-body-164720178").className = "af-body inline af-quirksMode";
                  }
                  if (document.getElementById("af-header-164720178")) {
                      document.getElementById("af-header-164720178").className = "af-header af-quirksMode";
                  }
                  if (document.getElementById("af-footer-164720178")) {
                      document.getElementById("af-footer-164720178").className = "af-footer af-quirksMode";
                  }
              }
          })();`);

      // Special handling for in-app browsers that don't always support new windows
      let inlineScript2 = document.createTextNode(` (function() {
            function browserSupportsNewWindows(userAgent) {
                var rules = [
                    'FBIOS',
                    'Twitter for iPhone',
                    'WebView',
                    '(iPhone|iPod|iPad)(?!.*Safari\/)',
                    'Android.*(wv|\.0\.0\.0)'
                ];
                var pattern = new RegExp('(' + rules.join('|') + ')', 'ig');
                return !pattern.test(userAgent);
            }

            if (!browserSupportsNewWindows(navigator.userAgent || navigator.vendor || window.opera)) {
                document.getElementById('af-form-164720178').parentElement.removeAttribute('target');
            }
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
#af-form-164720178 .af-body input.text, #af-form-164720178 .af-body textarea{background-color:#EBF0F2;border-color:#D6DEE3;border-width:2px;border-style:solid;color:#444444;text-decoration:none;font-style:normal;font-weight:normal;font-size:16px;font-family:Trebuchet MS, sans-serif;}
#af-form-164720178 .af-body input.text:focus, #af-form-164720178 .af-body textarea:focus{background-color:#ABDAEF;border-color:#D6DEE3;border-width:1px;border-style:solid;}
#af-form-164720178 .af-body label.previewLabel{display:block;float:none;text-align:left;width:auto;color:#444444;text-decoration:none;font-style:normal;font-weight:bold;font-size:16px;font-family:Helvetica, sans-serif;}
#af-form-164720178 .af-body{padding-bottom:10px;padding-top:10px;background-repeat:no-repeat;background-position:inherit;background-image:none;color:#444444;font-size:16px;font-family:Helvetica, sans-serif;}
#af-form-164720178 .af-quirksMode{padding-right:20px;padding-left:20px;}
#af-form-164720178 .af-standards .af-element{padding-right:20px;padding-left:20px;}
#af-form-164720178 .buttonContainer input.submit{background-image:none;background-color:#FF4265;color:#FFFFFF;text-decoration:none;font-style:normal;font-weight:normal;font-size:18px;font-family:Helvetica, sans-serif;}
#af-form-164720178 .buttonContainer input.submit{width:auto;}
#af-form-164720178 .buttonContainer{text-align:center;}
#af-form-164720178 button,#af-form-164720178 input,#af-form-164720178 submit,#af-form-164720178 textarea,#af-form-164720178 select,#af-form-164720178 label,#af-form-164720178 optgroup,#af-form-164720178 option{float:none;position:static;margin:0;}
#af-form-164720178 div{margin:0;}
#af-form-164720178 form,#af-form-164720178 textarea,.af-form-wrapper,.af-form-close-button,#af-form-164720178 img{float:none;color:inherit;position:static;background-color:none;border:none;margin:0;padding:0;}
#af-form-164720178 input,#af-form-164720178 button,#af-form-164720178 textarea,#af-form-164720178 select{font-size:100%;}
#af-form-164720178 select,#af-form-164720178 label,#af-form-164720178 optgroup,#af-form-164720178 option{padding:0;}
#af-form-164720178,#af-form-164720178 .quirksMode{width:100%;max-width:418px;}
#af-form-164720178.af-quirksMode{overflow-x:hidden;}
#af-form-164720178{background-color:transparent;border-color:transparent;border-width:1px;border-style:none;}
#af-form-164720178{display:block;}
#af-form-164720178{overflow:hidden;}
.af-body .af-textWrap{text-align:left;}
.af-body input.image{border:none!important;}
.af-body input.submit,.af-body input.image,.af-form .af-element input.button{float:none!important;}
.af-body input.submit{white-space:inherit;}
.af-body input.text{width:100%;float:none;padding:2px!important;}
.af-body.af-standards input.submit{padding:4px 12px;}
.af-clear{clear:both;}
.af-element label{text-align:left;display:block;float:left;}
.af-element{padding-bottom:5px;padding-top:5px;}
.af-form-wrapper{text-indent:0;}
.af-form{box-sizing:border-box;text-align:left;margin:auto;}
.af-quirksMode .af-element{padding-left:0!important;padding-right:0!important;}
.lbl-right .af-element label{text-align:right;}
body {
}
#af-form-164720178 {
  border-radius: 6px !important;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 2px;
  font-size: 16px;
}
#af-form-164720178 .af-body {

}
#af-form-164720178 .af-body .af-element {
  margin-top: 1rem !important;
  padding-top: 0;
  padding-bottom: 2px;
}
#af-form-164720178 .af-body .af-element:first-child {
  margin-top: 0 !important;
}
#af-form-164720178 .af-body label.previewLabel {
  margin-bottom: 0.25rem !important;
}
#af-form-164720178 .af-body input.text {
  border-bottom: none !important;
  border-left: none !important;
  border-right: none !important;
  border-radius: 3px !important;
  box-sizing: border-box !important;
  margin-top: 0.25rem !important;
  padding: 8px 12px !important;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
}
#af-form-164720178 .af-body input.text:focus {
  outline: none;
}
#af-form-164720178 .af-body select {
  width: 100%;
}
#af-form-164720178 .af-body .af-dateWrap select {
  width: 33%;
}
#af-form-164720178 .choiceList-radio-stacked {
  margin-bottom: 1rem !important;
  width: 100% !important;
}
#af-form-164720178 .af-element-radio {
  margin: 0 !important;
}
#af-form-164720178 .af-element-radio input.radio {
  display: inline;
  height: 0;
  opacity: 0;
  overflow: hidden;
  width: 0;
}
#af-form-164720178 .af-element-radio input.radio:checked ~ label {
  font-weight: 700 !important;
}
#af-form-164720178 .af-element-radio input.radio:focus ~ label {
  box-shadow: inset 0 0 0 2px rgba(25,35,70,.25);
}
#af-form-164720178 .af-element-radio input.radio:checked ~ label:before {
  background-color: #777777;
  border-color: #d6dee3;
}
#af-form-164720178 .af-element-radio label.choice {
  border: 1px solid #d6dee3;
  border-radius: 3px !important;
  display: block !important;
  font-weight: 300 !important;
  margin: 0.5rem 0 !important;
  padding: 1rem 1rem 1rem 2rem !important;
  position: relative;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
}
#af-form-164720178 .af-element-radio label.choice:before {
  background-color: #FFF;
  border: 1px solid #d6dee3;
  border-radius: 50%;
  content: '';
  height: 0.75rem;
  margin-left: -1.3rem;
  position: absolute;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  width: 0.75rem;
}
#af-form-164720178 .buttonContainer {
  box-sizing: border-box !important;
}
#af-form-164720178 .af-footer {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0 6px 6px -6px;
  box-sizing: border-box !important;
}
#af-form-164720178 .af-footer p {
  margin: 0 !important;
}
#af-form-164720178 input.submit,
#af-form-164720178 #webFormSubmitButton {
  background-image: none;
  border: none;
  border-radius: 3px !important;
  margin-top: 0.5rem !important;
  padding: 0.6rem 2.5rem !important;
  -webkit-appearance: none;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  width: 100% !important;
}
#af-form-164720178 input.submit:hover,
#af-form-164720178 #webFormSubmitButton:hover {
  cursor: pointer;
  opacity: 0.9;
}
#af-form-164720178 input.text {
  border-radius: 3px !important;
  margin-top: 0.5rem !important;
  padding: 0.6rem 2.5rem !important;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  width: 100% !important;
}
#af-form-164720178 input.text:hover {
  cursor: pointer;
  opacity: 0.9;
}

.poweredBy a,
.privacyPolicy p {
  font-size: 0.75rem !important;
}

//Aweber Overrides//
    #af-form-164720178 {
      max-width: 100%;

      .af-body {
        text-align: center;
      }

      .af-element {
        display: inline-block;

        input.text {
          width: 400px !important;
          padding-top: 12px !important;
          padding-bottom: 12px !important;
          background-color: $white;
        }

        label.previewLabel {
          font-family: "IBM Plex Mono", monospace;
          color: $grey-med;
          position: relative;
          top: 60px;
          left: 20px;
        }

        input[type="submit"] {
          font-family: "IBM Plex Mono", monospace;
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
          &:hover {
            color: $base-color;
            background-color: transparent;
          }
        }

        &.privacyPolicy {
          width: 100%;
          display: block;
          margin-left: 220px;
        }
      }
    }

/* MEDIA QUERIES */

@media (max-width:1100px) {
  footer{
    .imp-section {
      .inner {
       font-size: 1.6rem;
        line-height: 1.7rem;
      }
   }
  }

}

@media (max-width: 600px) {
  footer {
    .footer-bottom{
      margin-top: 40px;
      :first-of-type{
        text-align: justify;
      }
    }
    .copy {
      text-align: center;
      padding: 0;
      margin-top: 20px;
    }

    .imp-section {
      .inner {
        padding: 20px;

      }
    }
  }

  #go-top {
    right: 10px;
  }

  #af-form-164720178 .af-standards .af-element {
   padding-right: 0;
   padding-left: 0;
  }

  #af-form-164720178 .af-element.privacyPolicy {
    margin-left: 0;
  }
}
</style>
