<template>
  <div>
    <!--HEADER-->
    <div class="container-fuid waves" id="header" >
      <div class="d-flex align-items-center justify-content-center h-100 inner-wrapper">
        <!-- to give it another width that the default 200px use
            <blob :style="{ width: '100px' }"/>  -->
          <div class="header-msg">
            <p class="greeting">
                <blob class="blob" />
                {{ $t('header.greeting-hello') }} <br>
                <span class="smaller" v-html="$t('header.greeting-do')">
                </span>
              </p>

                <p class="message" >
                  <span v-html="$t('header.message[0]')"> </span>
                  <span v-html="$t('header.message[1]')"> </span>
                  <span v-html="$t('header.message[2]')"> </span>
              </p>

              <div class="d-flex justify-content-center">
                  <button type="button" class="btn button--default"> {{ $t('header.button') }}</button>
              </div>
          </div>
      </div>

      <svg class="svg-waves"
      viewBox="0 24 150 28 "
      preserveAspectRatio="none">
      <defs>
      <path id="wave"
      d="M-160 44c30 0
        58-18 88-18s
        58 18 88 18
        58-18 88-18
        58 18 88 18
        v44h-352z" />
        </defs>
          <g class="wave-one">
              <use xlink:href="#wave" x="50" y="0" fill="#ff4265"/>
          </g>

          <g class="wave-two">
                <use xlink:href="#wave" x="50" y="4" fill="#ecf0f1"/>
          </g>
      </svg>



    </div>

  </div>



</template>

<script>
import Blob from '~/components/Blob.vue'

export default {
  components: {
    Blob
  }
}
</script>

<style scoped lang = "scss">
 @import '../assets/styles/main.scss';

#header{
    background-color: $black;
    height: 100vh;
    padding-top: 80px;

   & .inner-wrapper {
     padding: 0 15%;
     & .header-msg {
      margin-bottom: 70px;
      font-family: 'IBM Plex Mono', monospace;
      color: $white;
       & .greeting{
        position: relative;
        font-size: 4rem;
        line-height: 4rem;
        z-index: 5;
        .smaller {
          font-size: 3rem;
          line-height: 3rem;
        }
        .special {
          color: $base-color;
        }
      }

      & .message {
        font-family: 'IBM Plex Mono', monospace;
        color: $white;
        font-size: 2rem;
        line-height: 2.2rem;
        margin-top: 50px;
      }

       & .blob {
        position: absolute;
        top: -25px;
        z-index: -1;
        left: -95px;
      }
   }
   }
}


.underline{
  text-decoration: underline;
   text-decoration-color: $base-color;
}

.waves{
  display:block;
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);
  background: $black;
  & > .svg-waves{
  display: block;
    width: 100%;
    height: 60px;
    max-height: 60px;
    margin: 0;
    z-index:5;
    bottom:0;
    position:absolute;
    left:0px;
    float:left;
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

/* MEDIA QUERIES */
@media (max-width: 500px) {
  #header{
    & .inner-wrapper {
      padding: 0 10px;
      & .header-msg {
          margin-bottom: 100px;
         & .greeting{
          font-size: 2.1rem;
          line-height: 2.1rem;

          .smaller {
            font-size: 1.9rem;
            line-height: 1.9rem;

          }
         }

        & .message {
          font-size: 1.4rem;
          line-height: 1.5rem;
          margin-top: 30px;
        }

        & .blob {
            top: -35px;
            left: -33px;
            width: 150px;
        }
      }
    }
  }

  .waves{
      height: auto;
  }
}


@media (max-width: 991.98px) {
  #header{
    height: auto;
    & .inner-wrapper {
      padding: 25px 10%;
        & .header-msg {

          & .greeting{
            font-size: 3.5rem;
            line-height: 3.5rem;

            .smaller {
              font-size: 3rem;
              line-height: 3rem;
            }
          }


        & .blob {
           left: -55px;
           top: -30px;
        }
      }
    }
  }
  .waves{
      height: auto;
  }

}



</style>
