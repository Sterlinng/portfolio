<template>
  <div
    class="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 py-12 w-full max-w-full"
  >
    <!-- Animated gradient orbs background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-1/2 -left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-accent/15 sm:bg-accent/20 rounded-full blur-3xl animate-blob"></div>
      <div class="absolute -bottom-1/2 -right-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-info/15 sm:bg-info/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="w-64 h-64 sm:w-96 sm:h-96 bg-accent/8 sm:bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </div>

    <!-- Main content container -->
    <div class="max-w-5xl mx-auto text-center space-y-6 relative z-10">
      <!-- Animated badge -->
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 border border-base-300 backdrop-blur-sm animate-fade-in-down"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-2 w-2 bg-accent"
          ></span>
        </span>
        <span class="text-sm font-medium text-secondary">{{
          $t("hero.badge")
        }}</span>
      </div>

      <!-- Main heading with gradient and hover effect -->
      <div class="space-y-3">
        <div>
          <h1
            class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            <span class="block text-primary animate-fade-in-up">{{ $t("hero.greeting") }}</span>
            <span
              class="block bg-gradient-to-r from-accent via-info to-accent sm:bg-gradient-to-r sm:from-accent sm:via-info sm:to-accent bg-clip-text text-transparent animate-gradient hover:scale-105 transition-transform duration-300 inline-block cursor-default"
            >
              {{ $t("hero.name") }}
            </span>
          </h1>
          <p class="text-2xl sm:text-3xl font-semibold text-secondary mt-3 animate-fade-in-up animation-delay-200">
            {{ $t("hero.title") }}
          </p>
        </div>

        <!-- Company & Location with icons -->
        <div
          class="flex items-center justify-center gap-6 text-base sm:text-lg text-secondary flex-wrap mt-6"
        >
          <div class="flex items-center gap-2">
            <svg
              class="w-5 h-5 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span>{{ $t("hero.company") }}</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              class="w-5 h-5 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{{ $t("hero.location") }}</span>
          </div>
        </div>
      </div>

      <!-- CTA Buttons with magnetic effect -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up animation-delay-400"
      >
        <button
          @click="scrollToContact"
          class="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-base-100 bg-primary dark:bg-accent dark:text-primary rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1"
        >
          <span class="absolute inset-0 bg-gradient-to-r from-accent to-info opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span class="relative z-10 flex items-center gap-2">
            {{ $t("hero.cta.primary") }}
            <svg
              class="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </button>

        <button
          @click="scrollToProjects"
          class="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary bg-base-200 hover:bg-base-300 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <span class="flex items-center gap-2">
            {{ $t("hero.cta.secondary") }}
            <svg
              class="w-5 h-5 transition-transform group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </span>
        </button>
      </div>

      <!-- Social links with stagger animation -->
      <div class="flex items-center justify-center gap-6 pt-4 animate-fade-in-up animation-delay-600">
        <a
          href="https://github.com/Sterlinng"
          target="_blank"
          rel="noopener noreferrer"
          class="text-secondary hover:text-accent transition-all duration-300 hover:scale-125 hover:-translate-y-1"
          :aria-label="$t('hero.social.github')"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/amine-fodil-cherif-961805206/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-secondary hover:text-accent transition-all duration-300 hover:scale-125 hover:-translate-y-1"
          :aria-label="$t('hero.social.linkedin')"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg
        class="w-6 h-6 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToProjects = () => {
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
/* Floating blob animation */
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -50px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% {
    transform: translate(50px, 50px) scale(1.05);
  }
}

.animate-blob {
  animation: blob 20s infinite ease-in-out;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Fade in down animation */
@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade in up animation */
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Gradient animation */
@keyframes gradient {
  0%,
  100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.6s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out;
}

.animation-delay-200 {
  animation-delay: 0.2s;
  animation-fill-mode: both;
}

.animation-delay-400 {
  animation-delay: 0.4s;
  animation-fill-mode: both;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  animation-fill-mode: both;
}

.animate-gradient {
  animation: gradient 8s ease infinite;
}
</style>
