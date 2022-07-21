<script>

  const headerLinks = [
    {
      text: "Home",
      link: "/home"
    },
    {
      text: "Writing",
      link: "/writing"
    },
    {
      text: "About",
      link: "/about"
    }
  ];
</script>

<header class="flex flex-col justify-center items-center sm:flex-row sm:sticky top-0 z-[2147483647] w-full px-8 py-4 border-b border-zinc-600 brightness-90 backdrop-blur-md text-zinc-50">
  <div class="[flex: 2 1 auto] flex flex-row justify-center items-center text-center text-5xl font-Neonderthaw">
    <span class="glow-red">jordy</span><span class="animate-flicker">n</span><span class="glow-red">elson</span>
  </div>

  <!-- <nav class="flex-auto flex flex-row flex-wrap justify-center items-center sm:justify-end py-2"> -->
  <nav class="flex-auto flex flex-col justify-center sm:flex-row sm:flex-nowrap sm:justify-end py-4 sm:py-2">
    {#each headerLinks as headerLink}
      <a href={headerLink.link} class="block [flex: 1 1 100%] sm:[flex: 1 1 auto] px-4 py-2 my-2 sm:my-2 font-medium hover:glow-blue hover:text-sky-200">{headerLink.text}</a>
    {/each}
  </nav>
</header>

<style lang="scss">
</style>
