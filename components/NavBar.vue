<template>
  <div class="w-full bg-[#FFFDFA] text-black py-4 px-6 md:px-12 fixed top-0">
    <!-- Flex container for larger screens and stacked layout for small screens -->
    <div class="flex flex-col md:flex-row items-center justify-between">
      <!-- Logo section -->
      <div class="flex justify-between items-center w-full md:w-auto">
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
        class="hidden md:flex w-full md:w-auto flex-row justify-center gap-6 text-[#989798]"
      >
        <div
          @click="scrollToSection('home')"
          class="font-semibold cursor-pointer"
        >
          {{ $t("navbar_home") }}
        </div>
        <div
          @click="scrollToSection('about-us')"
          class="font-semibold cursor-pointer"
        >
          {{ $t("navbar_about_us") }}
        </div>
        <div
          @click="scrollToSection('programs')"
          class="font-semibold cursor-pointer"
        >
          {{ $t("navbar_programs") }}
        </div>
        <div
          @click="scrollToSection('contact')"
          class="font-semibold cursor-pointer"
        >
          {{ $t("navbar_contact") }}
        </div>
      </div>

      <!-- Desktop Language and Donate Buttons -->
      <div class="hidden md:flex w-full md:w-auto justify-end gap-4">
        <SelectForm
          :locales="locales"
          :locale="locale"
          @localeChange="handleLanguageChange"
        />
        <Button variant="secondary">Donate</Button>
      </div>
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
            {{ $t("navbar_home") }}
          </div>
          <div
            @click="scrollToSection('about-us')"
            class="font-semibold cursor-pointer"
          >
            {{ $t("navbar_about_us") }}
          </div>
          <div
            @click="scrollToSection('programs')"
            class="font-semibold cursor-pointer"
          >
            {{ $t("navbar_programs") }}
          </div>
          <div
            @click="scrollToSection('contact')"
            class="font-semibold cursor-pointer"
          >
            {{ $t("navbar_contact") }}
          </div>

          <!-- Language Selector and Donate Button -->
          <div class="flex flex-col gap-4 mt-6">
            <SelectForm
              :locales="locales"
              :locale="locale"
              @localeChange="handleLanguageChange"
            />
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
const { locales, locale, setLocale } = useI18n();
const handleLanguageChange = (newLocale: string) => {
  setLocale(newLocale);
};

setLocale("en-US");
</script>

<style></style>
