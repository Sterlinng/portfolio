<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="closeModal"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <!-- Modal Content -->
        <div
          class="relative bg-base-100 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="sticky top-4 right-4 float-right z-10 w-10 h-10 rounded-full bg-base-200 hover:bg-base-300 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Content -->
          <div class="p-8 sm:p-12">
            <!-- Header -->
            <div class="mb-8">
              <div class="flex items-center gap-3 mb-4 text-sm text-secondary">
                <span>{{ project.year }}</span>
                <span class="w-1 h-1 rounded-full bg-secondary"></span>
                <span>{{ project.client }}</span>
              </div>

              <h2 class="text-4xl font-bold text-primary mb-4">
                {{ $t(project.title) }}
              </h2>

              <p class="text-lg text-secondary mb-6">
                {{ $t(project.shortDescription) }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, i) in project.technos"
                  :key="i"
                  class="text-sm px-3 py-1 rounded-full bg-base-200 text-secondary font-medium"
                >
                  {{ tech.name }}
                </span>
              </div>
            </div>

            <!-- Case Study Sections -->
            <div class="space-y-8">
              <!-- Overview -->
              <section v-if="project.caseStudy.overview">
                <h3 class="text-sm uppercase tracking-wider text-secondary font-semibold mb-3">
                  Overview
                </h3>
                <p class="text-base text-secondary leading-relaxed">
                  {{ $t(project.caseStudy.overview) }}
                </p>
              </section>

              <!-- Context -->
              <section v-if="project.caseStudy.context">
                <h3 class="text-sm uppercase tracking-wider text-secondary font-semibold mb-3">
                  Context
                </h3>
                <p class="text-base text-secondary leading-relaxed">
                  {{ $t(project.caseStudy.context) }}
                </p>
              </section>

              <!-- Challenge -->
              <section v-if="project.caseStudy.challenge">
                <h3 class="text-sm uppercase tracking-wider text-secondary font-semibold mb-3">
                  Challenge
                </h3>
                <p class="text-base text-secondary leading-relaxed">
                  {{ $t(project.caseStudy.challenge) }}
                </p>
              </section>

              <!-- Solution -->
              <section v-if="project.caseStudy.solution">
                <h3 class="text-sm uppercase tracking-wider text-secondary font-semibold mb-3">
                  Solution
                </h3>
                <p class="text-base text-secondary leading-relaxed">
                  {{ $t(project.caseStudy.solution) }}
                </p>
              </section>

              <!-- Results -->
              <section v-if="project.caseStudy.results">
                <h3 class="text-sm uppercase tracking-wider text-secondary font-semibold mb-3">
                  Results
                </h3>
                <p class="text-base text-secondary leading-relaxed">
                  {{ $t(project.caseStudy.results) }}
                </p>
              </section>

              <!-- Images Gallery -->
              <section v-if="project.caseStudy.images && project.caseStudy.images.length > 0">
                <h3 class="text-sm uppercase tracking-wider text-secondary font-semibold mb-6">
                  Gallery
                </h3>
                <div class="flex flex-col gap-6">
                  <div
                    v-for="(image, index) in project.caseStudy.images"
                    :key="index"
                    class="group relative overflow-hidden rounded-lg bg-base-200"
                  >
                    <img
                      :src="image.src"
                      :alt="image.caption || `Screenshot ${index + 1}`"
                      class="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div
                      v-if="image.caption"
                      class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <p class="text-sm text-white">{{ image.caption }}</p>
                    </div>
                  </div>
                </div>
              </section>

              <!-- External Link -->
              <section v-if="project.link && project.link !== '#'" class="pt-4">
                <a
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-accent hover:bg-accent/90 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Visit Project
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};

// Close on Escape key
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
  } else {
    document.removeEventListener('keydown', handleEscape);
    document.body.style.overflow = '';
  }
});

const handleEscape = (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-base-100,
.modal-leave-active .bg-base-100 {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-base-100,
.modal-leave-to .bg-base-100 {
  transform: scale(0.95);
}
</style>
