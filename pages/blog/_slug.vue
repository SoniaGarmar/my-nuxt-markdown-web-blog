<template>
  <div>
    <div class="post-title">
       <h1>TITLLE: {{title}}</h1>
    </div>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
  export default {
    async asyncData({ params }) {
      try {
        // import the markdown file
        // markdown will convert the file content into an object.
        const postContent = await import(`~/content/blog/EN/${params.slug}.md`);
        // that object has a "attributes" property that stores an object with all the attributes defined in th markdown file
        const attr = postContent.attributes;
        // inspect what we get in the console
        console.log(postContent)
        // This is want we want to make available in our template
         return {
            slug: attr.id,
            name: params.slug,
            title: attr.title,
            date: attr.date,
            description: attr.description,
            content: postContent.html,
          }
      } catch(err) {
        console.debug(err)
        return false
      }
    }
  }
</script>

