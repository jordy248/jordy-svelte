<script>
  const emoji = Math.floor(Math.random() * 3)
</script>

<div class="w-full min-h-screen	text-left margin-auto">
  <h1 class="text-center text-3xl py-3 sm:text-4xl sm:py-4">
    Hi, I'm Jordy
    {#if emoji === 0}
       <span class="inline-block cursor-default origin-[67%_67%] hover:animate-wave">👋</span>
    {:else if  emoji === 1}
       <span class="inline-block cursor-default origin-[50%_80%] hover:animate-peace">✌️</span>
    {:else}
       <span class="inline-block cursor-default origin-[50%_80%] hover:animate-horns">🤘</span>
    {/if}
    <!-- <span class="inline-block cursor-default origin-[75%_90%] hover:animate-fingerguns">👈</span> -->
  </h1>
  <p>
    A scrappy, curious, and data-driven marketing enablement professional adept at blending the quantitative and the creative with emerging technologies to drive constituent action. Versed in front-end dev, digital analytics, optimization testing, and Bayesian prob. I also make a mean custom Slack emoji.
  </p>
</div>
