<template>
  <div class="bg-white h-screen">
    <NavBar />
    <Home />
    <AboutUs />
    <Programs />
    <Contact />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

onMounted(() => {
  let sections = gsap.utils.toArray(".section-content");
  ScrollTrigger.create({
    trigger: "#home",
    start: "top top",
    endTrigger: "#contact",
    end: "bottom bottom",
    snap: {
      snapTo: 1 / (sections.length - 1),
    },
  });
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((element) => element.kill());
});
</script>
