<template>
  <div
    class="card bg-base-100 shadow-xl relative w-full lg:w-full mx-auto my-4 p-6 overflow-hidden"
  >
    <!-- Image de fond du projet -->
    <img
      :src="img"
      alt="Project image"
      class="absolute right-[-40px] top-0 h-full object-contain opacity-20"
    />

    <div class="card-body relative z-10">
      <h2 class="card-title text-3xl">{{ title }}</h2>

      <p class="italic text-gray-500 mb-2">{{ company }}</p>

      <p class="text-gray-500">{{ description }}</p>

      <div class="flex items-center justify-between">
        <div class="flex space-x-4">
          <div
            v-for="(tech, index) in technos"
            :key="index"
            class="relative group"
          >
            <i :class="tech.icon" class="tech-icon"></i>
            <div
              class="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style="z-index: 5"
            >
              {{ tech.name }}
            </div>
          </div>
        </div>

        <div class="card-actions">
          <button class="btn btn-primary" @click="openProjectModal">
            View
          </button>
        </div>
      </div>

      <div class="absolute bottom-1 left-4">
        <div
          :class="{
            'badge badge-primary': tag === 'Personal',
            'badge badge-neutral': tag === 'Professional',
          }"
        >
          {{ tag }}
        </div>
      </div>
    </div>

    <!-- Modal du projet -->
    <Modal
      ref="projectModal"
      :modalTitle="modalTitle"
      :modalDescription="modalDescription"
      :modalImg="modalImg"
      :modalTechnos="modalTechnos"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "../common/ProjectModal.vue";

const props = defineProps({
  title: String,
  description: String,
  img: String,
  technos: Array,
  tag: {
    type: String,
    required: true,
    default: "",
  },
  company: {
    type: String,
    required: true,
    default: "",
  },
  modalTitle: String,
  modalDescription: String,
  modalImg: String,
});

const projectModal = ref(null);

const openProjectModal = () => {
  projectModal.value.openModal();
};
</script>

<style scoped>
.card {
  min-height: 200px;
}

img {
  right: -120px;
  top: 0;
  height: 100%;
  opacity: 0.2;
  object-fit: contain;
}

.tech-icon {
  font-size: 32px;
}
</style>
