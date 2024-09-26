<template>
  <dialog ref="modal" class="modal">
    <div class="modal-box max-w-5xl">
      <h3 class="text-lg font-bold mb-4">{{ modalTitle }}</h3>

      <!-- Section mockup -->
      <div class="mockup-window border">
        <div class="bg-base-200 flex justify-center">
          <img :src="modalImg" alt="Project Mockup" class="mockup-image" />
        </div>
      </div>

      <p class="py-4 text-secondary-content italic">{{ modalDescription }}</p>

      <!-- Modal Actions -->
      <div class="modal-action">
        <button class="btn" @click="closeModal">Close</button>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  modalTitle: String,
  modalDescription: String,
  modalImg: String,
});

const modal = ref(null);

const openModal = () => {
  modal.value.showModal();
};

const closeModal = () => {
  modal.value.close();
};

defineExpose({
  openModal,
});
</script>

<style scoped>
.modal-box {
  max-width: 800px;
}

.mockup-window {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mockup-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
