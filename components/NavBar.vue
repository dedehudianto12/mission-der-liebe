<template>
  <div
    class="fixed top-0 w-full flex flex-col md:flex-row justify-between px-12 py-4"
  >
    <div class="basis-1/6 flex justify-between items-center w-full md:w-auto">
      <p class="font-bold text-xl md:text-2xl">Mission der Liebe</p>

      <!-- Mobile menu button (hamburger icon) -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden text-2xl focus:outline-none"
      >
        ☰
      </button>
    </div>

    <!-- Desktop Menu -->
    <div
      class="baisi-1/2 hidden md:flex w-full md:w-auto flex-row justify-center gap-6 text-[#989798]"
    >
      <div
        @click="scrollToSection('home')"
        class="font-semibold cursor-pointer"
      >
        Home
      </div>
      <div
        @click="scrollToSection('about-us')"
        class="font-semibold cursor-pointer"
      >
        About Us
      </div>
      <div
        @click="scrollToSection('programs')"
        class="font-semibold cursor-pointer"
      >
        Programs
      </div>
      <div
        @click="scrollToSection('contact')"
        class="font-semibold cursor-pointer"
      >
        Contact
      </div>
    </div>

    <!-- Desktop Language and Donate Buttons -->
    <div class="basis-1/6 hidden md:flex w-full md:w-auto justify-end gap-4">
      <Button variant="secondary">Donate</Button>
    </div>

    <!-- Mobile Slide-In Menu -->
    <transition name="slide-right">
      <div
        v-if="isMenuOpen"
        class="fixed inset-y-0 right-0 w-3/4 max-w-xs bg-white shadow-lg z-50 p-6 md:hidden"
      >
        <!-- Close Button -->
        <button
          @click="isMenuOpen = false"
          class="text-xl mb-4 focus:outline-none"
        >
          ✕
        </button>

        <!-- Mobile Menu Items -->
        <div class="flex flex-col gap-6 text-[#989798]">
          <div
            @click="scrollToSection('home')"
            class="font-semibold cursor-pointer"
          >
            Home
          </div>
          <div
            @click="scrollToSection('about-us')"
            class="font-semibold cursor-pointer"
          >
            About Us
          </div>
          <div
            @click="scrollToSection('programs')"
            class="font-semibold cursor-pointer"
          >
            Programs
          </div>
          <div
            @click="scrollToSection('contact')"
            class="font-semibold cursor-pointer"
          >
            Contact
          </div>

          <!-- Language Selector and Donate Button -->
          <div class="flex flex-col gap-4 mt-6">
            <Button variant="secondary">Donate</Button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isMenuOpen = ref(false);

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  } else {
    console.warn(`Section with ID '${sectionId}' not found.`);
  }
};
</script>

<style>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
