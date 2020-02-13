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
            <button type="button" class="btn button--default">
              {{ $t("header.button") }}
            </button>
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
    <div class="container-fluid  " id="me">
      <div class="row wrap">
        <div class="col-xl-7  me-text">
          <h2>
            <blob class="blob" />
            <span class="blob-text">
              ME
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
          <span class="underline"> MY GOAL </span>: To help you turn your ideas
          into a reality using the magic of code.
        </p>
        <p><span class="underline"> MY TOOLS </span>: Knowledge and passion.</p>
        <p>
          <span class="underline">MY MOTIVATION</span>: Happiness. A happy
          customer makes me a happy developer.
        </p>

        <div class="d-flex justify-content-center bottom-box">
          <button type="button" class="btn button--default">
            {{ $t("header.button") }}
          </button>
        </div>
      </div>
    </div>

    <!--SERVICES -->
    <div class="container-fluid  " id="services">
      <div class="row wrap">
        <div class="col-12  services-text  ">
          <h2>
            <blob class="blob" />
            <span class="blob-text">
              WHAT I DO
            </span>

            <p class="subheading">
              I do a bunch of different things and most of them live on the
              Internet.
            </p>
          </h2>
        </div>

        <div class="col-lg-6  services-text ">
           <div class="service-box">
              <div class="inner">
                <h3>
                CUSTOM WEB SITES
              </h3>
              <p>
                I create HAND-CRAFTED websites to make you stand out from the crowd.
                If you only need to implement an already done design, my left brain
                will code it for you. If you also need the design, I can also do it
                for you.
              </p>
              </div>
           </div>
        </div>

        <div class="col-lg-6  services-text  ">
          <div class="service-box">
            <div class="inner">
              <h3>
                WEB APPLICATIONS
              </h3>
              <p>
                If you need a website with extra functionality and server-side
                programming, No problem. I can take care of both back-end and
                front-end. Tell me what you need and I will design and code it for
                you. I will work side by side with you to design, prototype and
                finally build your custom web application.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-6  services-text ">
          <div class="service-box">
             <div class="inner">
              <h3>
                MOBILE APPS
              </h3>
              <p>
                A game? a rewards system for your retail business? a location based
                app? Whatever you need. Let me know what's in your mind and I will
                find the best way of doing it. If you already have the design and
                just need someone to code it, no problem, I will bring your project
                to live.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-6  services-text">
           <div class="service-box">
              <div class="inner">
                <h3>
                  CUSTOM SOFTWARE
                </h3>
                <p>
                  Need a custom piece of software to increase the productivity of your
                  business, improve your organization or any other purpose? I'll think
                  about the best way of doing it and develop the software solution
                  that better solve your problems
                </p>
              </div>
           </div>
        </div>

        <div class="col-12  services-text  ">
          <p>
            I work comfortably on both FRONT-END and BACK-END systems alike.
          </p>

           <p>
            Here are a few technologies I've been working with recently: <br />
            <span class="underline">
              JavaScript (ES6+), HTML & (S)CSS, Vue / Nuxt, Angular, Node.js /
              Express, .NET
            </span>
          </p>
          <p>
            Other technologies I know: <br />
            <span class="underline">
              Ruby on Rails, PHP / Laravel, Java, Ionic, React / React Native
            </span>
          </p>
        </div>
      </div>
    </div>

  <div class = "container-fluid imp-section">
    <div class="inner">

      <p class="smaller-imp-text">
          <span > Currently I WORK WITH: </span> <br />
          <span class="font-weight-bold">Business and individuals</span> in need of a
          website, a web application, a mobile app or any other digital
          creation. <br />
          <span class="font-weight-bold">Agencies and teams</span> in need of a pair of
          digital hands to help them out. <br />
      </p>


      <div class="margin-md">
        <p class="underline">If you have a project in mind, I’m currently available for freelance work.<p>
          <div class="d-flex justify-content-center bottom-box">
                <button type="button" class="btn button--default">
                LET'S CREATE SOMETHING AWESOME!
                </button>
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

<style scoped lang="scss">
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
  }
}

.smaller-imp-text{
  font-size: 30px;
  font-weight: normal
}

.margin-md{
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
        font-size: 3.9rem;
        line-height: 3.9rem;
        z-index: 5;
        .smaller {
          font-size: 2.9rem;
          line-height: 2.9rem;
        }
        .special {
          color: $base-color;
        }
      }

      & .message {
        font-family: "IBM Plex Mono", monospace;
        color: $white;
        font-size: 2rem;
        line-height: 2.2rem;
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
      margin-bottom: 80px;
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
  animation: move-forever2 8s linear infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
}

.wave-two > use {
  animation: move-forever4 4s linear infinite;
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
          color: $base-color
        }

      }
  }

}

/* MEDIA QUERIES */

@media (max-width: 1800px) {
  .wrap {
    padding: 70px 0 40px 10%;
  }

  #me {
    background: #ffffff url("~@/assets/images/sonia.png") no-repeat 115% bottom;
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
        bottom: 0;
        right: -20%;
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
    padding: 70px 10% 10px 10%;
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
        bottom: 0;
        right: -25%;
      }
    }
  }
}

@media (max-width: 500px) {
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
    padding: 50px 10px;
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
}
</style>
