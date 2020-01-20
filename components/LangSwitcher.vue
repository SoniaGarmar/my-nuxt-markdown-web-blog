<template>
    <div class="lang-switcher" >
      <button class="btn btn-default"
              v-bind:class="{'selected-lang': lang.code === $i18n.locale }"
              v-for="(lang, i) in $i18n.locales" :key="`Lang${i}`"
              @click="changeLanguage(lang.code)">{{lang.name}}
      </button>
    </div>
</template>

<script>


export default {
  data () {
    return {

    }
  },

  methods: {
    changeLanguage(lang) {
      console.log("CURRRENT LANG: " + this.$i18n.locale)
      this.$router.push(this.switchLocalePath(lang));
    }
  }
};
</script>

<style scoped lang="scss">
  .lang-switcher {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .selected-lang {
     color: red;
  }
</style>
