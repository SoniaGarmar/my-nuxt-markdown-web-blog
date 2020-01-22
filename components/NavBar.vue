<template>
  <nav class="navbar navbar navbar-expand-lg navbar-dark default-color">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
        aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
             <nuxt-link :to="localePath('index')" class="nav-link">
                  {{ $t('navbar.home') }}
              </nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto nav-flex-icons">
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
      </div>
  </nav>
</template>

<script>

  export default {

  }


</script>

<style scoped lang="scss">
  @import '../assets/styles/main.scss';

  nav {
     background-color:$black;
  }
</style>
