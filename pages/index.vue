<template>
  <div>
    <!--HEADER-->
    <div class="container-fuid waves" id="header" >
      <div class="d-flex align-items-center justify-content-center  inner-wrapper">
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

              <div class="d-flex justify-content-center bottom-box">
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
              <use xlink:href="#wave" x="50" y="0" fill="#ff4265" />
          </g>

          <g class="wave-two">
                <use xlink:href="#wave" x="50" y="4" fill="#fff"/>
          </g>
      </svg>



    </div>

    <!--ME-->
    <div class="container-fluid  " id="me" >
      <div class="row wrap">

        <div class="col-xl-7  me-text">
           <h2 >
                <blob class="blob" />
                <span class="blob-text">
                ME
                </span>
            </h2>

                <p v-html="$t('me[0]')"> </p>
                <p v-html="$t('me[1]')"> </p>
                <p>
                    <span v-html="$t('me[2]')"></span>
                    <span v-html="$t('me[3]')"></span>
                </p>
                <p >
                    <span v-html="$t('me[4]')"></span>
                    <span v-html="$t('me[5]')"></span>
                </p>

                <p class="image-pp">
                    <span v-html="$t('me[6]')"></span>
                    <span v-html="$t('me[7]')"></span>
                    <span v-html="$t('me[8]')"></span>
                </p>
                <p class="image-pp">
                    <span v-html="$t('me[9]')"></span>
                    <span v-html="$t('me[10]')"></span>
                </p>
                <p v-html="$t('me[11]')" class="image-p"> </p>
                <p class="image-p">
                    <span v-html="$t('me[12]')"></span>
                    <span v-html="$t('me[13]')"></span>
                    <span v-html="$t('me[14]')"></span>

                </p>

                   <img src="~/assets/images/sonia-sm.png" class="me-image  d-xl-none">
        </div>

          <!-- <div class="col-lg-6  ">
            <img src="~/assets/images/sonia.png" class="img-responsive">
          </div> -->


      </div>
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
    min-height: 100vh;
    padding-top: 100px;

    & .inner-wrapper {
      padding: 0 10%;
       min-height: 100%;
      & .header-msg {
        margin-bottom: 40px;
        font-family: 'IBM Plex Mono', monospace;
        color: $white;
        & .greeting{
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
          font-family: 'IBM Plex Mono', monospace;
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
      & .bottom-box{
        margin-bottom: 80px;
      }
   }
}

/* because we are using this class in a v-html attribute, where the scoped styles are not rendered */
 /* /deep/ .underline{
    text-decoration: underline;
   text-decoration-color: $base-color;
} MOVED TO ANOT SCOPED STYLE*/

.waves{
  display:block;
  position: relative;
  width: 100%;
   height: auto;
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


.wrap {
  padding: 70px 10% 40px 10%;
  text-align: justify;
  h2 {
    font-size: 60px;
    letter-spacing: 4px;
    margin-bottom: 20px;
    font-family: 'IBM Plex Mono', monospace;
    text-transform: uppercase;

  }
}


#me {
    background: #ffffff url("~@/assets/images/sonia.png") no-repeat right bottom;
    background-size:auto 100%;
    .me-text {
    /* background: url("~/assets/images/sonia.png"); */
    .blob {
      position: absolute;
      top: -25px;
      z-index: 0;
      left: -65px;
    }
    .blob-text{
       z-index: 5;
       position: relative;
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
   #header{
    padding-top: 100px;
    height: auto;
    & .inner-wrapper {
      padding: 25px 10%;
      & .header-msg {

          & .greeting{
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

      & .bottom-box{
        margin-bottom: 40px;
      }
    }
  }
  #me {
    background: #ffffff url("~@/assets/images/sonia.png") no-repeat 135% bottom;
  }
}

@media (max-width: 1025px) {

  #header{
    padding-top: 170px;
  }

  #me {
       background-image: none;
       overflow: hidden;
      .me-text {
        position:relative;

        .image-pp{
                width: 60%;
                z-index:5;
                position: relative;
                text-align: left;
        }

        .image-p{
                width: 60%;
                z-index:5;
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
  #header{
    padding-top: 100px;
    & .inner-wrapper {

      & .header-msg {
          & .greeting{
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
      position:relative;
      padding-bottom: 30px;

      .image-pp{
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
  #header{
    padding-top: 80px;
    & .inner-wrapper {
      padding: 10px 20px;
      & .header-msg {
          margin-bottom: 50px;
         & .greeting{
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
      & .bottom-box{
        margin-bottom: 20px;
      }
    }
  }



  .wrap {
      padding: 50px 10px;
    }
}




</style>
