<template>
  <div class="card lg:card-side bg-base-100 shadow-xl card-spacing relative">
    <figure class="relative group">
      <div>
        <i :class="tech.icon" class="tech-icon"></i>
      </div>

      <!-- Overlay qui slide du bas vers le haut -->
      <div class="overlay">
        <p class="overlay-text text-neutral-content">{{ tech.name }}</p>
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    tech: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
figure {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0;
  position: relative;
  overflow: hidden; /* Pour éviter que l'overlay dépasse de la figure */
}

.tech-icon {
  font-size: 60px;
  transition: transform 0.3s ease;
}

.card-spacing {
  margin-bottom: 10px;
}

/* Style de l'overlay */
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: height 0.5s ease;
}

/* Le texte de l'overlay */
.overlay-text {
  font-size: 18px;
  opacity: 0; /* Texte caché au début */
  transition: opacity 0.3s ease; /* Apparition du texte */
}

/* Slide de l'overlay lors du hover */
figure:hover .overlay {
  height: 50%; /* L'overlay s'arrête au milieu */
}

figure:hover .overlay-text {
  opacity: 1; /* Le texte apparaît */
}
</style>
