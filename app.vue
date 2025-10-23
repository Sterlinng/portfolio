<template>
  <div class="layout">
    <!-- Global dot pattern background -->
    <div class="dot-pattern-background"></div>

    <Header />
    <main class="content">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/shared/Header.vue";
import Footer from "../components/shared/Footer.vue";
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  max-width: 100vw;
  width: 100%;
  position: relative;
  background-color: var(--fallback-b1, oklch(var(--b1)));
}

/* Global dot pattern - applies to entire page */
.dot-pattern-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--fallback-b1, oklch(var(--b1)));
  background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.04) 1px, transparent 0);
  background-size: 24px 24px;
  pointer-events: none;
  z-index: 0;
}

/* Dark mode dots */
[data-theme="dark"] .dot-pattern-background {
  background-image: radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.06) 1px, transparent 0);
}

.content {
  flex: 1;
  overflow-x: hidden;
  width: 100%;
  position: relative;
  z-index: 1;
}
</style>
