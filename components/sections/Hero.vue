<template>
  <div class="hero min-h-[75vh] relative overflow-hidden">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <div @mousemove="updateImagePosition">
          <h1 class="text-6xl font-bold text-blue-600">Hello there! 👋🏽</h1>
          <p class="py-6 text-3xl">
            I'm a software engineer based in
            <strong
              @mouseenter="showImage"
              @mouseleave="hideImage"
              id="bordeaux"
            >
              Bordeaux </strong
            >, <strong>France</strong>.
          </p>

          <img
            v-if="isImageVisible"
            :src="imageSrc"
            alt="Bordeaux > Toulouse"
            class="absolute w-32 h-32"
            :style="{
              left: imagePosition.x + 'px',
              top: imagePosition.y + 'px',
              pointerEvents: 'none',
            }"
          />
        </div>

        <button
          @mouseover="showDuck"
          @mouseleave="hideDuck"
          class="btn btn-primary"
          @click="scrollToContact"
        >
          Say Hi
        </button>

        <img
          src="/images/hello.gif"
          alt="Duck"
          class="fixed top-1/2 transform -translate-y-1/2 transition-transform duration-500 ease-out rotate-90"
          :class="{
            'translate-x-[-150%]': !showingDuck,
            'translate-x-[-55%]': showingDuck,
          }"
          style="left: 100px"
        />
      </div>
    </div>
    <div
      class="arrow-container absolute left-1/2 bottom-10 transform -translate-x-1/2"
    >
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showingDuck = ref(false);
const imageSrc = "/images/rose.gif";
const isImageVisible = ref(false);
const imagePosition = ref({ x: 0, y: 0 });

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const showDuck = () => {
  showingDuck.value = true;
};

const hideDuck = () => {
  showingDuck.value = false;
};

const showImage = () => {
  isImageVisible.value = true;
};

const hideImage = () => {
  isImageVisible.value = false;
};

const updateImagePosition = (event) => {
  if (isImageVisible.value) {
    imagePosition.value.x = event.pageX - 100;
    imagePosition.value.y = event.pageY - 100;
  }
};
</script>
