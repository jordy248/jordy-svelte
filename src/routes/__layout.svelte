<script>
  import "../app.css";
  import "../styles/css/app.css";

  import Header from "$lib/header/index.svelte";
  import Footer from "$lib/footer/index.svelte";
</script>

<Header />

<div class="container grid-cols-1">
  <slot />
</div>

<Footer />
