<template>
  <div>
    <section
      id="home"
      class="h-screen px-4 sm:px-8 md:px-12 flex items-center justify-start border bg-[#FFFDFA] section"
    >
      <div class="w-full sm:w-2/3 md:w-1/2 lg:w-1/4">
        <h1
          class="text-start text-black text-2xl sm:text-3xl md:text-4xl font-semibold break-words leading-relaxed"
        >
          Nice Home
        </h1>
        <p class="text-black mt-2 sm:mt-4 text-sm sm:text-base md:text-lg">
          Description Home
        </p>
      </div>
    </section>

    <!-- About Us Section -->
    <section
      id="about-us"
      class="h-screen bg-gray-100 px-4 sm:px-8 md:px-12 py-12 md:py-20 border section"
    >
      <h2 class="text-black text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
        About Us
      </h2>
      <p class="text-black text-sm sm:text-base md:text-lg">
        Information about the organization, mission, vision, and values.
      </p>
    </section>

    <!-- Programs Section -->
    <section
      id="programs"
      class="h-screen bg-white px-4 sm:px-8 md:px-12 py-12 md:py-20 border section"
    >
      <h2 class="text-black text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
        Programs & Services
      </h2>
      <p class="text-black text-sm sm:text-base md:text-lg">
        Details about programs and services offered by the organization.
      </p>
    </section>

    <!-- Contact Section -->
    <section
      id="contact"
      class="h-screen bg-gray-100 px-4 sm:px-8 md:px-12 py-12 md:py-20 border section"
    >
      <h2 class="text-black text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
        Contact Us
      </h2>
      <p class="text-black text-sm sm:text-base md:text-lg">
        Contact information, email, address, and other details.
      </p>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
import { onMounted, onUnmounted } from "vue";
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

onMounted(() => {
  let sections = gsap.utils.toArray(".section");

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
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up triggers on unmount
});
</script>
