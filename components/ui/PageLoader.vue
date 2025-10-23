<template>
  <Transition name="loader-fade">
    <div v-if="isLoading" class="page-loader">
      <!-- Animated background -->
      <div class="loader-bg">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
      </div>

      <!-- Main loader content -->
      <div class="loader-content">
        <!-- Spinning logo/icon -->
        <div class="loader-icon">
          <div class="loader-ring"></div>
          <div class="loader-ring-2"></div>
          <div class="loader-center">
            <span class="loader-text">A</span>
          </div>
        </div>

        <!-- Loading text with dots animation -->
        <div class="loader-message">
          <span class="loading-text">Loading</span>
          <span class="dots">
            <span class="dot">.</span>
            <span class="dot">.</span>
            <span class="dot">.</span>
          </span>
        </div>

        <!-- Progress bar -->
        <div class="progress-container">
          <div class="progress-bar"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isLoading = ref(true); // Start with true to show on initial load
let loadingTimeout = null;

onMounted(() => {
  // Hide loader after initial page load (300ms)
  setTimeout(() => {
    isLoading.value = false;
  }, 300);
});

// Listen to Nuxt page loading events
if (process.client) {
  const nuxtApp = useNuxtApp();

  nuxtApp.hook('page:start', () => {
    // Clear any existing timeout
    if (loadingTimeout) {
      clearTimeout(loadingTimeout);
    }

    isLoading.value = true;
  });

  nuxtApp.hook('page:finish', () => {
    // Minimum display time of 300ms for smooth effect
    loadingTimeout = setTimeout(() => {
      isLoading.value = false;
    }, 300);
  });

  // Also listen to route changes
  const router = useRouter();

  router.beforeEach((to, from) => {
    if (to.path !== from.path) {
      if (loadingTimeout) {
        clearTimeout(loadingTimeout);
      }
      isLoading.value = true;
    }
  });

  router.afterEach(() => {
    loadingTimeout = setTimeout(() => {
      isLoading.value = false;
    }, 300);
  });
}
</script>

<style scoped>
/* ========================================
   PAGE LOADER CONTAINER
   ======================================== */
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: hsl(var(--b1));
  opacity: 1;
}

/* ========================================
   ANIMATED BACKGROUND BLOBS
   ======================================== */
.loader-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.3;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  animation: blob-float 8s ease-in-out infinite;
}

.blob-1 {
  width: 300px;
  height: 300px;
  background: hsl(var(--p));
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.blob-2 {
  width: 250px;
  height: 250px;
  background: hsl(var(--s));
  bottom: -100px;
  right: -100px;
  animation-delay: 2s;
}

.blob-3 {
  width: 200px;
  height: 200px;
  background: hsl(var(--a));
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 4s;
}

@keyframes blob-float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(30px, -30px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 30px) scale(0.9);
  }
  75% {
    transform: translate(40px, 20px) scale(1.05);
  }
}

/* ========================================
   LOADER CONTENT
   ======================================== */
.loader-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

/* ========================================
   SPINNING LOADER ICON
   ======================================== */
.loader-icon {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top-color: hsl(var(--p));
  border-right-color: hsl(var(--p));
  border-radius: 50%;
  animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}

.loader-ring-2 {
  position: absolute;
  width: 80%;
  height: 80%;
  border: 3px solid transparent;
  border-bottom-color: hsl(var(--s));
  border-left-color: hsl(var(--s));
  border-radius: 50%;
  animation: spin-reverse 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}

.loader-center {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, hsl(var(--p)) 0%, hsl(var(--s)) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(147, 51, 234, 0.3);
  animation: pulse-glow 2s ease-in-out infinite;
}

.loader-text {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  animation: text-bounce 1s ease-in-out infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 30px rgba(147, 51, 234, 0.3);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 50px rgba(147, 51, 234, 0.6);
    transform: scale(1.05);
  }
}

@keyframes text-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* ========================================
   LOADING MESSAGE
   ======================================== */
.loader-message {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(var(--bc));
}

.loading-text {
  background: linear-gradient(135deg, hsl(var(--p)) 0%, hsl(var(--s)) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease infinite;
  background-size: 200% 200%;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.dots {
  display: flex;
  gap: 0.125rem;
}

.dot {
  animation: dot-bounce 1.4s infinite;
  color: hsl(var(--p));
}

.dot:nth-child(1) {
  animation-delay: 0s;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes dot-bounce {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  30% {
    transform: translateY(-10px);
    opacity: 0.7;
  }
}

/* ========================================
   PROGRESS BAR
   ======================================== */
.progress-container {
  width: 200px;
  height: 4px;
  background: hsl(var(--b3));
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, hsl(var(--p)) 0%, hsl(var(--s)) 50%, hsl(var(--a)) 100%);
  background-size: 200% 100%;
  animation: progress-flow 1.5s ease-in-out infinite;
  border-radius: 2px;
}

@keyframes progress-flow {
  0% {
    width: 0%;
    background-position: 0% 0%;
  }
  50% {
    width: 70%;
    background-position: 100% 0%;
  }
  100% {
    width: 100%;
    background-position: 200% 0%;
  }
}

/* ========================================
   FADE TRANSITIONS
   ======================================== */
.loader-fade-enter-active {
  transition: opacity 0.3s ease-out;
}

.loader-fade-leave-active {
  transition: opacity 0.4s ease-in;
}

.loader-fade-enter-from,
.loader-fade-leave-to {
  opacity: 0;
}

/* ========================================
   RESPONSIVE
   ======================================== */
@media (max-width: 640px) {
  .loader-icon {
    width: 100px;
    height: 100px;
  }

  .loader-center {
    width: 50px;
    height: 50px;
  }

  .loader-text {
    font-size: 1.5rem;
  }

  .loader-message {
    font-size: 1rem;
  }

  .progress-container {
    width: 150px;
  }
}
</style>
