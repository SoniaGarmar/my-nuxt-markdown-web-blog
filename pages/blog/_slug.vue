<template>
  <div>
    <div class="post-title">
       <h1>TITLLE: {{title}}</h1>
    </div>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
  import { eventBus } from '../../plugins/eventbus';

  export default {
    async asyncData({ params, app }) {
      try {
        // import the markdown file
        // markdown will convert the file content into an object
       const postContent = await import(`~/content/blog/${app.i18n.locale.toUpperCase()}/${params.slug}.md`);
        // that object has a "attributes" property that stores an object with all the attributes defined in th markdown file
        const attr = postContent.attributes;
        // inspect what we get in the console
        // This is want we want to make available in our template
         return {
            slug: attr.id,
            name: params.slug,
            title: attr.title,
            date: attr.date,
            description: attr.description,
            content: postContent.html,
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
  }


}

</script>

