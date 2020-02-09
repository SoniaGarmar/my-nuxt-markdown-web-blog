<template>
  <nav class="navbar navbar navbar-expand-lg navbar-dark default-color fixed-top">
      <button class="navbar-toggler" type="button"
        aria-expanded="false" aria-label="Toggle navigation"
        v-bind:class=" { 'navbarOpen': show }"
         v-on:click="toggleNavbar">
        <span class="navbar-toggler-icon" v-bind:class="{ 'opened': show }">
          <span></span>
        </span>
      </button>
      <div class="collapse navbar-collapse"
         v-bind:class="{ 'show': show }">
        <ul class="navbar-nav mr-auto main-items">
          <li class="nav-item active">
             <nuxt-link :to="localePath('index')" class="nav-link">
                  {{ $t('navbar.home') }}
              </nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> {{ $t('navbar.me') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> {{ $t('navbar.services') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> {{ $t('navbar.portfolio') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> {{ $t('navbar.contact') }}</a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto nav-flex-icons secondary-items">
          <li class="nav-item">
             <nuxt-link :to="localePath('blog')" class="nav-link">
                  Blog
              </nuxt-link>
          </li>

          <li class="nav-item">
            <a class="nav-link waves-effect waves-light">
              <font-awesome-icon :icon="['fab', 'linkedin']"/>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link waves-effect waves-light">
              <font-awesome-icon :icon="['fab', 'youtube']"/>
            </a>
          </li>

           <li class="nav-item">
            <a class="nav-link waves-effect waves-light">
             <font-awesome-icon :icon="['fab', 'twitter']"/>
            </a>
          </li>
        </ul>

        <LangSwitcher/>
      </div>
  </nav>
</template>

<script>
  import LangSwitcher from '@/components/LangSwitcher'

  export default {
    components: {
      LangSwitcher
    },


    data() {
      return {
        show: false
      }
    },

    methods: {
      toggleNavbar() {
        this.show = !this.show;
      }
    }
  }


</script>

<style scoped lang="scss">
  @import '../assets/styles/main.scss';

  nav {
     background-color:$black;
     font-family: 'IBM Plex Mono', monospace;
     font-size: 18px;
     text-transform: uppercase;
     letter-spacing: 2px;
     border-bottom: 1px dashed #1f1f1f;

    .navbar-toggler-icon {
        background-image: none!important;
        margin: 1em;
        width: 40px;
        margin: 10px;
        &::after, &::before, span{
                background-color: #fff;
                border-radius: 3px;
                content: '';
                display: block;
                height: 2px;
                margin: 7px 0;
                transition: all .2s ease-in-out;
      }

      &.opened::before{
        transform: translateY(9px) rotate(135deg);
      }

      &.opened::after{
          transform: translateY(-9px) rotate(-135deg);
      }

      &.opened{
        span {
          transform: scale(0);
        }
      }
    }

    .navbar-toggler{
      border: none;
      outline: none;
      .navbar-toggler-icon{
        color: $white!important;
        &:hover {
           color: $base-color!important;
        }
      }
  }

  .nav-item{
        a{
           color: $white!important;
            display: inline-block;
            &:hover {
              color: $base-color!important;
            }
        }
      }

      .main-items{
        .nav-item:not(:last-child){
            color: $white!important;
            &::after {
                  content: ".";
                }
        }
      }

      .secondary-items{
         &::after {
            content: " . ";
            color: $white;
            margin: 8px;
        }
      }

  }


  // MEDIA QUERIES //

 @media (max-width: 991.98px) {
  .navbar{
    padding:0!important;


     .navbar-collapse{
       height: 100vh;
       .main-items, .secondary-items{
          text-align: center;
       }
     }

  }
 }




</style>
