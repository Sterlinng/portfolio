<template>
  <section class="technologies-section">
    <!-- Langages Section -->
    <div class="section">
      <h3 class="section-header font-bold">Langages</h3>
      <div class="grid-container">
        <TechCard v-for="(tech, index) in langages" :key="index" :tech="tech" />
      </div>
    </div>

    <!-- Frameworks Section -->
    <div class="section">
      <h3 class="section-header font-bold">Frameworks</h3>
      <div class="grid-container">
        <TechCard
          v-for="(tech, index) in frameworks"
          :key="index"
          :tech="tech"
        />
      </div>
    </div>

    <!-- DevOps Section -->
    <div class="section">
      <h3 class="section-header font-bold">DevOps</h3>
      <div class="grid-container">
        <TechCard v-for="(tech, index) in devops" :key="index" :tech="tech" />
      </div>
    </div>
  </section>
</template>

<script>
import TechCard from "../common/TechCard.vue";
import techData from "~/assets/js/tech.js";

export default {
  components: {
    TechCard,
  },
  data() {
    return {
      langages: techData.find((category) => category.category === "Langages")
        .technologies,
      frameworks: techData.find(
        (category) => category.category === "Frameworks"
      ).technologies,
      devops: techData.find((category) => category.category === "DevOps")
        .technologies,
    };
  },
};
</script>

<style scoped>
.technologies-section {
  text-align: center;
  padding: 50px;
}

.section {
  margin-bottom: 40px;
}

.section-header {
  font-size: 2rem;
  margin-bottom: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
}
</style>
