<template>
  <div>
    <!--HEADER-->
    <div class="container-fuid waves" id="header">
      <div
        class="d-flex align-items-center justify-content-center  inner-wrapper"
      >
        <!-- to give it another width that the default 200px use
            <blob :style="{ width: '100px' }"/>  -->
        <div class="header-msg">
          <p class="greeting">
            <blob class="blob" />
            {{ $t("header.greeting-hello") }} <br />
            <span class="smaller" v-html="$t('header.greeting-do')"> </span>
          </p>

          <p class="message">
            <span v-html="$t('header.message[0]')"> </span>
            <span v-html="$t('header.message[1]')"> </span>
            <span v-html="$t('header.message[2]')"> </span>
          </p>

          <div class="d-flex justify-content-center bottom-box">
            <a class="btn button--default" href="mailto:yoxxxrexxxmail@xxwxxhaxxxtevxxer.dev" onmouseover="this.href=this.href.replace(/x/g,'')">
                {{ $t("header.button") }}
            </a>
          </div>
        </div>
      </div>

      <svg class="svg-waves" viewBox="0 24 150 28 " preserveAspectRatio="none">
        <defs>
          <path
            id="wave"
            d="M-160 44c30 0
        58-18 88-18s
        58 18 88 18
        58-18 88-18
        58 18 88 18
        v44h-352z"
          />
        </defs>
        <g class="wave-one">
          <use xlink:href="#wave" x="50" y="0" fill="#ff4265" />
        </g>

        <g class="wave-two">
          <use xlink:href="#wave" x="50" y="4" fill="#fff" />
        </g>
      </svg>
    </div>

    <!--ME-->
    <div class="container-fluid" id="me">
      <div class="row wrap">
        <div class="col-xl-7  me-text">
          <h2>
            <blob class="blob" />
            <span class="blob-text">
              {{ $t("meTitle") }}
            </span>
          </h2>

          <p v-html="$t('me[0]')"></p>
          <p v-html="$t('me[1]')"></p>
          <p>
            <span v-html="$t('me[2]')"></span>
            <span v-html="$t('me[3]')"></span>
          </p>
          <p>
            <span v-html="$t('me[4]')"></span>
            <span v-html="$t('me[5]')"></span>
          </p>

          <p class="image-pp">
            <span v-html="$t('me[6]')"></span>
            <span v-html="$t('me[7]')"></span>
            <span v-html="$t('me[8]')"></span>
          </p>
          <p class="image-pp ">
            <span v-html="$t('me[9]')"></span>
            <span v-html="$t('me[10]')"></span>
          </p>
          <p v-html="$t('me[11]')" class="image-p image-ppp"></p>
          <p class="image-p">
            <span v-html="$t('me[12]')"></span>
            <span v-html="$t('me[13]')"></span>
            <span v-html="$t('me[14]')"></span>
          </p>
          <img src="~/assets/images/sonia-sm.png" class="me-image  d-xl-none" />
        </div>
      </div>
    </div>

    <div class="container-fluid imp-section">
      <div class="inner">
        <p>
          <span class="underline text-uppercase"> {{ $t("goals.goal") }} </span>:  {{ $t("goals.goalText") }}
        </p>
        <p>
          <span class="underline text-uppercase">  {{ $t("goals.tools") }} </span>:  {{ $t("goals.toolsText") }}
        </p>
        <p>
          <span class="underline text-uppercase">  {{ $t("goals.motivation") }} </span>:  {{ $t("goals.motivationText") }}
        </p>

        <div class="d-flex justify-content-center bottom-box">
               <a class="btn button--default"  href="mailto:yoxxxrexxxmail@xxwxxhaxxxtevxxer.dev" onmouseover="this.href=this.href.replace(/x/g,'')">
                {{ $t("header.button") }}
            </a>
        </div>
      </div>
    </div>

    <!--SERVICES -->
    <div class="container-fluid" id="services">
      <div class="row wrap">
        <div class="col-12  services-text  ">
          <h2>
            <blob class="blob" />
            <span class="blob-text">
               {{ $t("services.title") }}
            </span>

            <p class="subheading">
              {{ $t("services.subtitle") }}
            </p>
          </h2>
        </div>



        <div class="col-lg-6  services-text  ">
          <div class="service-box">
            <div class="inner">
              <h3>
                {{ $t("services.webApp.title") }}
              </h3>
              <p>
                 <span v-html="$t('services.webApp.text[0]')"></span>
                 <br>
                 <span v-html="$t('services.webApp.text[1]')"></span>
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-6  services-text ">
          <div class="service-box">
             <div class="inner">
              <h3>
                  {{ $t("services.mobileApp.title") }}
              </h3>
              <p>
               <span v-html="$t('services.mobileApp.text[0]')"></span>
                 <br>
                 <span v-html="$t('services.mobileApp.text[1]')"></span>
              </p>
            </div>
          </div>
        </div>

          <div class="col-lg-6  services-text ">
           <div class="service-box">
              <div class="inner">
                <h3>
                  {{ $t("services.web.title") }}
              </h3>
              <p>
               <span v-html="$t('services.web.text[0]')"></span>
                 <br>
                <span v-html="$t('services.web.text[1]')"></span>
              </p>
              </div>
           </div>
        </div>

        <div class="col-lg-6  services-text">
           <div class="service-box">
              <div class="inner">
                <h3>
                  {{ $t("services.software.title") }}
                </h3>
                <p>
                <span v-html="$t('services.software.text[0]')"></span>
                 <br>
                <span v-html="$t('services.software.text[1]')"></span>
                </p>
              </div>
           </div>
        </div>

        <div class="col-12  services-text margin-b-md ">
          <p v-html="$t('stack[0]')"></p>
          <p v-html="$t('stack[1]')"></p>
          <p>
            <span v-html="$t('stack[2]')"></span> <br />
            <span class="underline" v-html="$t('stack[3]')"> </span>
          </p>
          <p>
             <span v-html="$t('stack[4]')"></span> <br />
            <span class="underline" v-html="$t('stack[5]')"></span>
          </p>
        </div>

      </div>
    </div>

    <div class = "container-fluid imp-section">
      <div class="inner">
        <p class="smaller-imp-text">
            <span v-html="$t('workWith[0]')"></span> <br />
            <span class="font-weight-bold" v-html="$t('workWith[1]')"></span>
            <span v-html="$t('workWith[2]')"></span> <br />
            <span class="font-weight-bold" v-html="$t('workWith[3]')"></span>
            <span v-html="$t('workWith[4]')"></span> <br />
        </p>


        <div class="margin-md">
          <p class="underline" v-html="$t('workWith[5]')"><p>
            <div class="d-flex justify-content-center bottom-box">
                <a class="btn button--default"  href="mailto:yoxxxrexxxmail@xxwxxhaxxxtevxxer.dev"  onmouseover="this.href=this.href.replace(/x/g,'')">
                 {{$t('workWithCTA')}}
                </a>
            </div>
        </div>
      </div>
    </div>

    <!--PORTFOLIO-->
   <div class="container-fluid" id="portfolio">
      <div class="row wrap">
        <div class="col-xl-12 portfolio-text">
          <h2>
            <blob class="blob" />
            <span class="blob-text">
               {{$t('porfolio.title')}}
            </span>
          </h2>

          <p>
            <span  v-html="$t('porfolio.text[0]')"></span>
            <span  v-html="$t('porfolio.text[1]')"></span>
            <span class="underline" v-html="$t('porfolio.text[2]')"></span>
              <span  v-html="$t('porfolio.text[3]')"></span>
          </p>
        </div>

        <div class="col-xl-4 reviews-text">
           <div class="review-box">
             <div class="inner">
              <h3>
               Mario Perez  <br>
               <a href=" http://www.solucionesdelavado.com/">Simfonia Liquida SL</a>
              </h3>
              <p>
                 <span  v-html="$t('reviews.mario[0]')"></span>
                 <span  v-html="$t('reviews.mario[1]')"></span>
                 <br>
                 <span  v-html="$t('reviews.mario[2]')"></span>
              </p>
            </div>
          </div>
        </div>

        <div class="col-xl-4 reviews-text">
           <div class="review-box">
             <div class="inner">
              <h3>
               Almudena Almagro <br>
                <a href=" http://www.egar365.es/">Egar365, SL</a>
              </h3>
              <p>
                 <span  v-html="$t('reviews.almudena[0]')"></span>
                 <span  v-html="$t('reviews.almudena[1]')"></span>
                 <br>
                 <span  v-html="$t('reviews.almudena[2]')"></span>
              </p>
            </div>
          </div>
        </div>

        <div class="col-xl-4 reviews-text">
           <div class="review-box">
             <div class="inner">
              <h3>
                Jose Luis Alfonso <br>
                 <a href=" http://www.ikrut.com/">Zodo Ltd</a>-
              </h3>
              <p>
                <span  v-html="$t('reviews.jose[0]')"></span>
                <br>
                <span  v-html="$t('reviews.jose[1]')"></span>
              </p>
            </div>
          </div>
        </div>

      </div>
   </div>

   <!--CONTACT-->
    <div class="container-fluid imp-section" id="contact">
        <div class="inner">
          <div class="d-flex flex-column justify-content-center">
            <h2 class="underline text-center">
                 {{$t('contact.title')}}
            </h2>

            <p class="text-center margin-t-md">
               <span  v-html="$t('contact.cta[0]')"></span> <br />
               <span  v-html="$t('contact.cta[1]')"></span>
            </p>

            <div class="d-flex justify-content-center bottom-box">
             <a class="btn button--default"  href="mailto:yoxxxrexxxmail@xxwxxhaxxxtevxxer.dev" onmouseover="this.href=this.href.replace(/x/g,'')">
                {{ $t("contact.button") }}
             </a>
            </div>
          </div>

        </div>
    </div>

  </div>
</template>

<script>
import Blob from "~/components/Blob.vue";

export default {
  components: {
    Blob
  }
};
</script>

<style  lang="scss">
@import "../assets/styles/main.scss";

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

.smaller-imp-text{
  font-size: 30px;
  font-weight: normal
}

.margin-md{
  margin-top: 40px;
}

.margin-b-md{
  margin-top: 40px;
}

.margin-t-md{
  margin-top: 40px;
}

#header {
  background-color: $black;
  min-height: 100vh;
  padding-top: 100px;

  & .inner-wrapper {
    padding: 0 10%;
    min-height: 100%;
    & .header-msg {
      margin-bottom: 40px;
      font-family: "IBM Plex Mono", monospace;
      color: $white;
      & .greeting {
        position: relative;
        font-size: 3.5rem;
        line-height: 3.5rem;
        z-index: 5;
        .smaller {
          font-size: 2.5rem;
          line-height: 2.5rem;
        }
        .special {
          color: $base-color;
        }
      }

      & .message {
        font-family: "IBM Plex Mono", monospace;
        color: $white;
        font-size: 1.8rem;
        line-height: 2rem;
        margin-top: 50px;
      }

      & .blob {
        position: absolute;
        top: -15px;
        z-index: -1;
        left: -95px;
      }
    }
    & .bottom-box {
      margin-bottom: 40px;
    }
  }
}

/* because we are using this class in a v-html attribute, where the scoped styles are not rendered */
/* /deep/ .underline{
    text-decoration: underline;
   text-decoration-color: $base-color;
} MOVED TO ANOT SCOPED STYLE*/

.waves {
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  background: $black;
  & > .svg-waves {
    display: block;
    width: 100%;
    height: 60px;
    max-height: 60px;
    margin: 0;
    z-index: 5;
    bottom: 0;
    position: absolute;
    left: 0px;
    float: left;
  }
}

.wave-one > use {
  animation: move-forever2 16s linear infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
}

.wave-two > use {
  animation: move-forever4 10s linear infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
}

@keyframes move-forever4 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}

@keyframes move-forever2 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}

.wrap {
  padding: 70px 10% 40px 10%;
  text-align: justify;
  h2 {
    font-size: 60px;
    letter-spacing: 4px;
    margin-bottom: 20px;
    font-family: "IBM Plex Mono", monospace;
    text-transform: uppercase;
  }

  h3 {
    font-size: 40px;
    letter-spacing: 4px;
    margin-bottom: 20px;
    font-family: "IBM Plex Mono", monospace;
    text-transform: uppercase;
  }
}

#me {
  background: #ffffff url("~@/assets/images/sonia.png") no-repeat right bottom;
  background-size: auto 100%;
  .me-text {
    /* background: url("~/assets/images/sonia.png"); */
    .blob {
      position: absolute;
      top: -25px;
      z-index: 0;
      left: -65px;
    }
    .blob-text {
      z-index: 5;
      position: relative;
    }
  }
}

#services {
  .wrap{
    justify-content: stretch;
  }
  /* background: #ffffff url("~@/assets/images/sonia.png") no-repeat right bottom;
    background-size:auto 100%; */
  .services-text {
    align-self: stretch;
    margin-bottom: 15px;
    /* background: url("~/assets/images/sonia.png"); */
    .blob {
      position: absolute;
      top: -25px;
      z-index: 0;
      left: -65px;
    }
    .blob-text {
      z-index: 5;
      position: relative;
    }

    .subheading {
      font-size: 22px;
      z-index: 5;
      position: relative;
      margin-bottom: 50px;
    }
  }

  .service-box {
      background-color: $black;
      padding: 15px;
      margin-bottom:15px;
      height: 100%;

      .inner {
        border: 2px solid $white;
        padding: 40px;
        color: $white;
        height: 100%;

        h3{
          color: $base-color;
          text-align: left;
        }

      }
  }

}


#portfolio {
  .wrap{
    justify-content: stretch;

    .portfolio-text {
        align-self: stretch;
         margin-bottom: 15px;
        /* background: url("~/assets/images/sonia.png"); */
        .blob {
          position: absolute;
          top: -25px;
          z-index: 0;
          left: -65px;
        }
        .blob-text {
          z-index: 5;
          position: relative;
        }

        .subheading {
          font-size: 22px;
          z-index: 5;
          position: relative;
          margin-bottom: 50px;
        }
    }

    .reviews-text {
      align-self: stretch;
      margin-bottom: 15px;
    }

    .review-box {
          background-color: $white;
          padding: 15px;
          margin-bottom:15px;
          height: 100%;

          .inner {
            border: 2px solid $base-color;
            padding: 40px;
            color: $black;
            height: 100%;

            h3{
              font-size: 20px;
               text-align: left;
            }

          }
      }


  }


}

/* MEDIA QUERIES */

@media (max-width: 1800px) {
  .wrap {
    padding: 70px 10% 40px 10%;
  }

  #me {
    background: #ffffff url("~@/assets/images/sonia.png") no-repeat 115% bottom;
    // .wrap {
    //     padding: 70px 10% 40px 10%;
    //   }
  }



}

@media (max-width: 1600px) {
  #me {
    background: #ffffff url("~@/assets/images/sonia.png") no-repeat 125% bottom;
  }
}

@media (max-width: 1400px) {
  #header {
    padding-top: 100px;
    height: auto;
    & .inner-wrapper {
      padding: 25px 10%;
      & .header-msg {
        & .greeting {
          font-size: 3.2rem;
          line-height: 3.2rem;

          .smaller {
            font-size: 2.9rem;
            line-height: 2.9rem;
          }
        }

        & .blob {
          left: -55px;
          top: -30px;
        }
      }

      & .bottom-box {
        margin-bottom: 40px;
      }
    }
  }
  #me {
    background: #ffffff url("~@/assets/images/sonia.png") no-repeat 135% bottom;
  }
}

@media (max-width: 1025px) {
  #header {
    padding-top: 170px;
  }

  #me {
    background-image: none;
    overflow: hidden;
    .me-text {
      position: relative;

      .image-pp {
        width: 60%;
        z-index: 5;
        position: relative;
        text-align: left;
      }

      .image-p {
        width: 60%;
        z-index: 5;
        position: relative;
        text-align: left;
      }

      .me-image {
        width: 80%;
        height: auto;
        position: absolute;
        bottom: -40px;
        right: -20%;
      }
    }
  }

  #services {
    .service-box {
      .inner {
          padding: 25px;
          h3{
            font-size: 32px;
          }
      }
    }
}

}

@media (max-width: 991.98px) {
  #header {
    padding-top: 100px;
    & .inner-wrapper {
      & .header-msg {
        & .greeting {
          font-size: 2.6rem;
          line-height: 2.6rem;

          .smaller {
            font-size: 2.4rem;
            line-height: 2.4rem;
          }
        }

        & .message {
          font-size: 1.5rem;
          line-height: 1.7rem;
          margin-top: 50px;
        }
      }
    }
  }

  .wrap {
    padding: 70px 10% 40px 10%;
  }

  #me {
    .me-text {
      position: relative;
      padding-bottom: 30px;

      .image-pp {
        width: 100%;
        text-align: justify;
      }

      .me-image {
        width: 90%;
        height: auto;
        position: absolute;
        bottom: -40px;
        right: -25%;
      }
    }
  }
}

@media (max-width: 600px) {
  #header {
    padding-top: 80px;
    & .inner-wrapper {
      padding: 10px 20px;
      & .header-msg {
        margin-bottom: 50px;
        & .greeting {
          font-size: 1.6rem;
          line-height: 1.6rem;

          .smaller {
            font-size: 1.5rem;
            line-height: 1.5rem;
          }
        }

        & .message {
          font-size: 1.1rem;
          line-height: 1.2rem;
          margin-top: 30px;
        }

        & .blob {
          top: -40px;
          left: -15px;
          width: 120px;
        }
      }
      & .bottom-box {
        margin-bottom: 20px;
      }
    }
  }

  .wrap {
        padding: 50px 10px 20px 10px;
  }

  .imp-section {
    .inner {
      padding: 20px;
      font-size: 1.2rem;
      line-height: 1.3rem;
    }
  }

  .smaller-imp-text{
    font-size: 1.2rem;
    line-height: 1.3rem;
    font-weight: normal
  }

  #me {
    .me-text {
      padding-bottom: 0;

      .blob {
        top: -30px;
        left: -5px;
        width: 170px;
      }

      .image-ppp {
        width: 100%;
        text-align: justify;
      }
    }
  }


#services {
  margin-top: 40px;
  .services-text {
    .blob {
       top: -30px;
        left: -5px;
        width: 170px;
    }

    h2{
      text-align:left;
    }
  }

  .service-box {
      .inner {
        padding: 20px;
      }
  }
}

#portfolio {
  margin-top: 40px;
  .wrap{
    .portfolio-text {
    .blob {
        top: -30px;
        left: -5px;
        width: 170px;
    }

    h2{
      text-align:left;
    }
  }
  }
}




.wave-one > use {
  animation: move-forever2 12s linear infinite;
  &:nth-child(1) {
    animation-delay: 3s;
  }
}

.wave-two > use {
  animation: move-forever4 18s linear infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
}



}
</style>
