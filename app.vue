<template>
  <div class="layout">
    <!-- Page Loader -->
    <PageLoader />

    <!-- Main content - hidden while loading -->
    <div v-show="!isPageLoading" class="page-wrapper">
      <!-- Global dot pattern background -->
      <div class="dot-pattern-background"></div>

      <Header />
      <main class="content">
        <NuxtPage />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from "../components/shared/Header.vue";
import Footer from "../components/shared/Footer.vue";
import PageLoader from "../components/ui/PageLoader.vue";

const isPageLoading = ref(true);
let loadingTimeout = null;

onMounted(() => {
  // Hide loader after initial page load
  setTimeout(() => {
    isPageLoading.value = false;
  }, 300);
});

// Listen to Nuxt page loading events
if (process.client) {
  const nuxtApp = useNuxtApp();

  nuxtApp.hook('page:start', () => {
    if (loadingTimeout) {
      clearTimeout(loadingTimeout);
    }
    isPageLoading.value = true;
  });

  nuxtApp.hook('page:finish', () => {
    loadingTimeout = setTimeout(() => {
      isPageLoading.value = false;
    }, 300);
  });

  // Also listen to route changes
  const router = useRouter();

  router.beforeEach((to, from) => {
    if (to.path !== from.path) {
      if (loadingTimeout) {
        clearTimeout(loadingTimeout);
      }
      isPageLoading.value = true;
    }
  });

  router.afterEach(() => {
    loadingTimeout = setTimeout(() => {
      isPageLoading.value = false;
    }, 300);
  });
}
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
