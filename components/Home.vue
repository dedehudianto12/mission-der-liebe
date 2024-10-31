<template>
  <section
    id="home"
    class="h-screen px-4 sm:px-8 md:px-12 flex items-center justify-start border bg-[#FDF7EE] section-content"
  >
    <div class="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 flex flex-col items-center">
      <h2
        class="text-start text-black text-lg sm:text-xl md:text-2xl font-semibold break-words text-[#A29C95] leading-relaxed w-1/2"
      >
        Empowering Orphans: A Brighter Future
      </h2>
      <h1
        class="text-start text-black text-2xl sm:text-3xl md:text-6xl font-semibold break-words leading-relaxed w-1/2"
      >
        Transforming <br />
        Lives <br />
        Together
      </h1>
      <p
        class="text-[#86807C] mt-4 sm:mt-4 text-sm sm:text-base md:text-lg w-1/2"
      >
        At our foundation, we believe every child deserves a nurturing
        evironment. Join us in our mission to provide support and oppurtunities
        for orphans in need.
      </p>
      <div class="flex flex-row w-1/2 mt-4 gap-2">
        <Button>Donate</Button>
        <Button>Learn More</Button>
      </div>
    </div>
    <div class="w-1/2 sm:w-2/3 md:w-1/2 lg:w-1/2 items-center">
      <NuxtImg src="/orphan1.jpg" width="500" height="300" />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
