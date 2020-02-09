<template>
  <div class="container-fuid waves" id="header" >
    <div class="d-flex align-items-center justify-content-center h-100 inner-wrapper">
      <!-- to give it another width that the default 200px use
           <blob :style="{ width: '100px' }"/>  -->
        <div class="header-msg">
           <p class="greeting">
              <blob class="blob" />
              Hi, I'm Sonia. <br>
              <span class="smaller">
                I code. <br>
                I design. <br>
                I solve problems. <br>
              </span>
            </p>

            <p class="message">
              I collaborate with companies and teams to create first class web and mobile apps
              that add value to their business.
              <br> <br>
              If what is already in the market doesn't fit your needs, I'll create it for your.
              <br>  <br>
              <span class="underline"> You know what you need, I know how to build it. </span>
            </p>

            <div class="d-flex justify-content-center">
                <button type="button" class="btn button--default">Let's work together</button>
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
</template>

<script>
import Blob from '~/components/Blob.vue'

export default {
  components: {
    Blob
  }
}
</script>

<style lang = "scss">
  @import '../assets/styles/main.scss';

#header{
   background-color: $black;
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

</style>
