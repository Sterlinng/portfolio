<template>
  <div class="layout">
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

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Utilise toute la hauteur de l'écran */
}

.content {
  flex: 1; /* Prend tout l'espace disponible entre header et footer */
}
</style>
