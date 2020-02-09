<template>
    <div class="lang-switcher" >
      <button class="btn btn-lang"
              v-bind:class="{'selected-lang': lang.code === $i18n.locale }"
              v-for="(lang, i) in $i18n.locales" :key="`Lang${i}`"
              @click="changeLanguage(lang.code)">{{lang.name}}
      </button>
    </div>
</template>

<script>
import { eventBus } from '../plugins/eventbus';

export default {
  data () {
    return {
        slugTrans:''
    }
  },


  created( ) {
        this.$eventBus.$on("inPost", (slugTrans) => {
          console.log("I have been notified that the slug changed: " + slugTrans);
          this.slugTrans = slugTrans
        });
  },


  methods: {
    changeLanguage(lang) {
      if(this.$route.path.includes('/blog/')){
          // if in blog, change the locale manually and the navigate to the new route
        this.$i18n.locale = lang;
        this.$router.push(this.localePath({ name: 'blog-slug',  params: { slug: this.slugTrans } }));
      } else{
       this.$router.push(this.switchLocalePath(lang));
      }
    }
  }

};
</script>

<style scoped lang="scss">
  @import '../assets/styles/main.scss';

  .lang-switcher {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .btn-lang {
      font-family: 'IBM Plex Mono', monospace;
      display: inline-block;
      border-radius: 0px;
      text-decoration: none;
      margin-top:5px;
      padding: 0 5px;
      color:$grey-med;

      font-size: 14px;
      text-transform: none;
      letter-spacing: 2px;
  }

   .selected-lang {
     color:$base-color;
  }
</style>
