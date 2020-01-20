
<template>
    <div>
        <h1>Posts</h1>
        <ul>
              <li v-for="post in posts" :key="post.attributes.slug">
                   <nuxt-link :to="`/blog/${post.attributes.slug}`">
                       {{post.attributes.title}}</nuxt-link>
             </li>
        </ul>
    </div>
</template>
<script>
  export default {
    async asyncData() {

      let postsContent = require.context("~/content/blog/EN/", true, /\.md$/);
      console.log("****postsContent: " + postsContent);
      // require.context does not returns tehe content of the
      // modules(the md files) directly.
      //It returns a function to which we can require.
      // It provides a keys() method to retrieving the contents of the context.

      const imports = postsContent.keys().map((key) => {
      console.log("****key: " + key); // ./first-post.md
      console.log("***match: " + key.match(/\/(.+)\.md$/));

       // with const [, slug] we are taking the second value from the array
       // returned by key.match and assigning it to the variable slug
      const [, slug] = key.match(/\/(.+)\.md$/);

       // now we can retrieve the content form the postsContent by passing the key
       console.log("*****postsContent(key) " + JSON.stringify(postsContent(key)));
       return postsContent(key);
      });

      console.log( imports);

      return {
        posts: imports
      }
    },
  }
</script>
