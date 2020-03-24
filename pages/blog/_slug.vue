<template>
  <div>
    <div class="container-fuid waves" id="post-header">
          <div class="d-flex align-items-center justify-content-center  inner-wrapper">
            <div class="header-msg">
              <h1 class="heading">
                <!-- <blob class="blob" /> -->
                <h1>{{title}}</h1>
                <br>
                <p class="smaller"> {{description}} </p>
                <br>
                <p class="meta">{{$t('blog.published')}} {{date}}</p>
              </h1>
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

    <div class="container-fluid" id="post">
        <div class="row">
          <div class="col" v-html="content">
          </div>
        </div>
    </div>

  </div>
</template>

<script>
  import { eventBus } from '../../plugins/eventbus';
  import Prism from '../../plugins/prism';


  //const fm = require('front-matter')
  const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true
  })



  export default {
    layout: 'blog',

    async asyncData({ params, app }) {
      try {
        // import the markdown file
        // markdown will convert the file content into an object
       const postContent = await import(`~/content/blog/${app.i18n.locale.toUpperCase()}/${params.slug}.md`);
        // that object has a "attributes" property that stores an object with all the attributes defined in th markdown file
        const attr = postContent.attributes;

 //let res = fm(postContent.default)
        // inspect what we get in the console
        // This is want we want to make available in our template
         return {
            slug: attr.id,
            name: params.slug,
            title: attr.title,
            date: attr.date,
            description: attr.description,
           // content: postContent.html,
  content: md.render(postContent.html),
            slugTrans: attr.slugTrans
          }
      } catch(err) {
        console.debug(err)
        return false
      }
   },

   created(){
      // Event emit passing the data we want to send to the receiver
      this.$eventBus.$emit('inPost', this.slugTrans);
  },

  mounted() {
    Prism.highlightAll()
  }


}

</script>

<style lang="scss">
  @import "../../assets/styles/main.scss";

  #post{

   /deep/ img{
     margin: 40px auto ;
     display: block;
   }

   /deep/ h2{
       font-family: "IBM Plex Mono", monospace;
       text-transform: uppercase;
       margin-top: 80px;
       margin-bottom: 20px;
    }

   /deep/   h3{
       font-family: "IBM Plex Mono", monospace;
       text-transform: capitalize;
       margin-top: 60px;
       font-size: 1.50rem;
       margin-bottom: 20px;

    }

      /deep/   h4{
       font-family: "IBM Plex Mono", monospace;
       text-transform: capitalize;
       margin-top: 40px;
       font-size: 1.20rem;
       margin-bottom: 20px;

    }

    /deep/  p{
      text-align: justify;
    }

     /deep/  li{
      text-align: justify;
      margin-bottom:5px;
    }
  }


    #post-header {
      background-color: $black;
      // min-height: 100vh;
      padding-top: 150px;
      padding-bottom: 150px;

      & .inner-wrapper {
        padding: 0 15%;
        //min-height: 100%;
        & .header-msg {
          margin-bottom: 40px;
          font-family: "IBM Plex Mono", monospace;
          color: $white;
          & .heading {
            position: relative;
            h1{
               font-size: 3rem;
               line-height: 3rem;
            }

            color: $base-color;
            text-transform: uppercase;
            z-index: 5;
            .smaller {
              font-size: 1.6rem;
              line-height: 1.6rem;
              color: $white;
              text-transform: none;
            }
            .special {
              color: $base-color;
            }

            .meta{
              font-size: 1.3rem;
              line-height: 1.3rem;
              color: $grey-med;
              margin-top:30px;
              text-transform: none;
              display: inline-block;
            }
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


  #post.container-fluid{
    padding: 60px 15%;
  }

   /deep/ pre {
    margin: 40px 0;
   }




 /* MEDIA QUERIES */


@media (max-width:767px) {

  #post.container-fluid{
    padding: 60px 15px;
  }

  .wrap {
    padding: 70px 10px 40px 10px;
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


  #post-header {
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 20px;

    & .inner-wrapper {
      padding: 0 20px;
      & .header-msg {
        & .heading {

          h1{
              font-size: 2rem;
              line-height: 2rem;
            }
            .smaller {
              font-size: 1.4rem;
              line-height: 1.4rem;
            }
            .meta{
              font-size: 1.1rem;
              line-height: 1.1rem;
            }

          }
        }
      }
    }
}




</style>
