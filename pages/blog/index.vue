
<template>
    <div>
       <div class="container-fuid waves" id="blog-header">
          <div class="d-flex align-items-center justify-content-center  inner-wrapper">
            <div class="header-msg">
              <h1 class="heading">
                <blob class="blob" />
                <span v-html="$t('blog.header')"></span>
                <br>
                <span class="smaller" v-html="$t('blog.tagline')"> </span>
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

       <div id="top-bar" class="container-fuid">
        <div class="row">
            <div class="col-md-12 search-box">
              <label class="search" for="search-input" v-bind:class="{ active: searching }">
                 <input type="text"
                  id="search-input"
                  v-on:change="clearTags"
                  v-on:focus="onSearchFocus"
                  class="search"
                  v-model="search"/>
              </label>
              <button type="reset" id="close-btn"
                v-bind:class="{ active: searching }"
                v-on:click="onSearchClose">
                <font-awesome-icon :icon="['fas', 'times']"/>
              </button>

              <div id="tag-filter" class="d-inline-block">
                <div class="filter"  v-bind:class="{ active: filtering }"
                     v-on:click="onFilterOpen" >
                    <font-awesome-icon :icon="['fas', 'filter']"/>
                </div>

                <div id="tags-box" v-bind:class="{ active: filtering }">
                    <b-form-group  >
                      <b-form-checkbox-group
                        id="tags-filter"
                        v-model="selectedTags"
                        :options="tagsEN"
                        name="tags"
                        class="tags-check"
                        v-on:change="clearSearch"
                      ></b-form-checkbox-group>
                      <button type="reset" id="close-btn-filter"
                        v-on:click="onFilterClose">
                        <font-awesome-icon :icon="['fas', 'times']"/>
                      </button>
                    </b-form-group>
                </div>
              </div>
            </div>
        </div>
       </div>
       
       <div class="container-fluid" id="posts">
         <div class="row">
           <div class="col-lg-4 col-md-6 post-box-wrapper"  v-for="post in filteredPosts" :key="post.attributes.slug">
              <div class= "post-box">
                <div class="inner">
                    <nuxt-link
                      :to="localePath({ name: 'blog-slug', params: { slug: post.attributes.slug } })">
                      {{ post.attributes.title }}
                    </nuxt-link>

                    <div class="meta">
                      <span>{{ post.attributes.date }} | </span>
                      <ul>
                        <li v-for="tag in post.attributes.tags" :key="tag">
                            {{ tag  }}
                        </li>
                      </ul>
                    </div>

                    <p>{{post.attributes.description}}</p>
                  </div>
              </div>     
           </div>                 
         </div>
       </div>
    </div>
</template>

<script>
  export default {
    layout: 'blog',

  data: function () {
    return {
      search: '',
      tagsES: ['uno', 'dos', 'tres'],
      tagsEN: ['one', 'two', 'three'],
      selectedTags:[],
      searching: false,
      filtering: false
    }
  },

    async asyncData({app}) {
       let postsContent;

       switch (app.i18n.locale) {
           case 'en':
             postsContent = require.context("~/content/blog/EN/", true, /\.md$/)
             break;
            case 'es':
              postsContent = require.context("~/content/blog/ES/", true, /\.md$/)
             break;
         }

        // require.context does not returns tehe content of the
        // modules(the md files) directly.
        //It returns a function to which we can require.
        // It provides a keys() method to retrieving the contents of the context.

        const imports = postsContent.keys().map((key) => {
            // console.log("****key: " + key); // ./first-post.md
            // console.log("***match: " + key.match(/\/(.+)\.md$/));

            // with const [, slug] we are taking the second value from the array
            // returned by key.match and assigning it to the variable slug
            const [, slug] = key.match(/\/(.+)\.md$/);

            // now we can retrieve the content form the postsContent by passing the key
            // console.log("*****postsContent(key) " + JSON.stringify(postsContent(key)));
            return postsContent(key);
        });

         // console.log( imports);

        return {
          posts: imports
       }
    },


    computed: {
        filteredPosts() {
           const fromTagFilter = this.selectedTags.length > 0 ? true : false
           return this.posts.filter(post => {
              return  fromTagFilter ? post.attributes.tags.some(t => this.selectedTags.includes(t))
              : post.attributes.title.toLowerCase().includes(this.search.toLowerCase())
           })
        }
    },

    methods: {
      clearTags() {
        this.selectedTags = [];
      },
      clearSearch() {
        this.search ='';
      },

      onSearchFocus(){
       this.searching = true;
      },
      onSearchClose(){
       this.searching = false;
       this.search ='';
      },
      onFilterOpen(){
       this.filtering = true;
      },
      onFilterClose(){
       this.filtering = false;
       this.selectedTags = [];
      }
    }



  }
</script>

<style scoped lang="scss">
  @import "../../assets/styles/main.scss";

  #blog-header {
    background-color: $black;
    // min-height: 100vh;
    padding-top: 150px;
    padding-bottom: 150px;

    & .inner-wrapper {
      padding: 0 10%;
      //min-height: 100%;
      & .header-msg {
        margin-bottom: 40px;
        font-family: "IBM Plex Mono", monospace;
        color: $white;
        & .heading {
          position: relative;
          font-size: 4.3rem;
          line-height: 4.3rem;
          color: $base-color;
          text-transform: uppercase;
          z-index: 5;
          .smaller {
            font-size: 2.8rem;
            line-height: 2.8rem;
            color: $white;
            text-transform: none;
          }
          .special {
            color: $base-color;
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

  #posts.container-fluid{
    padding: 20px 10% 60px 10%;
  }

  .post-box-wrapper{
    &:nth-child(even) .post-box{
      background-color:$base-color;
    }

    &:nth-child(odd) .post-box{
        background-color: $black;

    }
  .post-box {
      padding: 15px;
      margin-top:30px;
        .inner {
          border: 2px solid $white;
          padding: 15px;
          font-family: "IBM Plex Mono", monospace;
          color: $white;
          font-size:18px;
          line-height:20px;
          min-height: 350px;

          a{
            color:$white;
            text-transform: uppercase;
              font-size: 26px;
              line-height:28px;

          }

          .meta{
            font-size: 14px;
            line-height:16px;
            margin: 5px 0 10px 0;
            padding-bottom: 10px;
            border-bottom: 1px dashed white;
              ul{
              display: inline;
              list-style: none;
              padding: 0;
              li{
                display: inline;
                &:not(:last-child):after{
                    content:"-"
                }
              }
              }
          }

          p{
              font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
              margin-top: 15px;
          }

        }
      }
  }

  #top-bar{
    padding: 40px 10% 0 10%;

    .search {
      display: inline-block;
      position: relative;
      height: 35px;
      width: 35px;
      border: 3px solid $base-color;
      border-radius: 50%;
      -webkit-transition: all 500ms ease;
      transition: all 500ms ease;
      cursor: text;
      &:after {
        content: "";
        position: absolute;
        width: 3px;
        height: 20px;
        right: -7px;
        top: 20px;
        background: red;
        border-radius: 3px;
        -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
        -webkit-transition: all 300ms ease;
        transition: all 300ms ease;
      }

      &.active,
      &:hover {
          margin-right: 0px;
          border-radius: 1px;
          width: 400px;
          &:after {
            height: 0px;
          }
      }
      &.active{
        height: 45px;
        padding-right:40px;
        padding-left:10px;
      }

       input {
          width: 100%;
          border: none;
          border-radius: 0;
          background: transparent;
          outline: none;
          font-family: "IBM Plex Mono", monospace;
          font-size: 16px;
          color:$grey-med;
          margin-top:2px;
        }
    }

    #close-btn{
      border: none;
      background-color: transparent;
      color: $base-color;
      outline:none;
      right: 40px;
      top: 4px;
      position: relative;
      height: 45px;
      display: none;
      font-size: 26px;
      &.active{
          display:inline-block
      }
    }

    #tag-filter{
      margin-left: 40px;
      .filter {
        display: inline-block;
        position: relative;
        border: none;
        background-color: transparent;
        color: $base-color;
        outline:none;
        height: 45px;
        width: 45px;
        font-size: 30px;
        &.active{
          //display: none;
        }
        &:hover {
         &+#tags-box{
            // display:inline-block;
             visibility: visible;
              opacity: 1;
         }

        }
      }

      #tags-box{
          visibility: hidden;
          opacity: 0;
          transition: visibility 0s, opacity 500ms ease;
          display: inline-block;
          position: relative;
          visibility: hidden;
          opacity: 0;
          &.active{
            //display: inline-block;
             visibility: visible;
            opacity: 1;

          }

          #close-btn-filter{
            background-color: transparent;
            border:none;
            color: $base-color;
            right: -25px;
            top: -8px;
            position: absolute;
            height: 45px;
            font-size: 26px;
          }



   /deep/    #tags-filter {
         .custom-control-input:checked ~ .custom-control-label::before {
              color: #fff;
              border-color: $black;
              background-color: $black;
          }
       }


      }




    }

  }



 /* MEDIA QUERIES */

@media (max-width:1100px) {
   #blog-header {
    padding-top: 100px;
    padding-bottom: 40px;

      & .inner-wrapper {
        padding: 0 5%;
        & .header-msg {
          & .heading {
            font-size: 3.2rem;
            line-height: 3.2rem;

              .smaller {
                font-size: 2.3rem;
                line-height: 2.3rem;
              }

            }
          }
        }
      }
}


@media (max-width:767px) {
  .wrap {
    padding: 70px 10px 40px 10px;
  }

  #blog-header {
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: 20px;

    & .inner-wrapper {
      padding: 0 20px;
      & .header-msg {
        & .heading {
          font-size: 2.4rem;
          line-height: 2.4rem;

            .smaller {
              font-size: 1.8rem;
              line-height: 1.8rem;
            }

          }
        }
      }
    }

  .post-box {
    .inner {
        min-height: 150px;
    }
  }

  #top-bar {
    .search{
       &.active,
      &:hover {
       width: 90%;
      }
    }

    #close-btn {
      right: -92%;
      top: -55px;
    }

    #tag-filter {
       margin-left: 0;
    }
  }
}










</style>
