<script context="module">
  export async function load({ params }) {
    try {
      const Post = (await import(`../../../lib/posts/${params.slug}.md`));
      return {
        props: {
          Post: Post.default
        }
      };
    } catch(e) {
      console.log(e);
      // return {
      //   status: 303,
      //   redirect: '/posts',
      // };

      return {
        status: 404,
        error: 'Post not found',
      }
    }
  }
</script>

<script>
  export let Post;
</script>

<!-- <Post /> -->
 <svelte:component this={Post}/>
