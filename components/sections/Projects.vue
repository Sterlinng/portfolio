<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :description="project.description"
      :img="project.img"
      :link="project.link"
      :technos="project.technos"
      :company="project.company"
      :tag="project.tag"
      :modalTitle="project.modalTitle"
      :modalDescription="project.modalDescription"
      :modalImg="project.modalImg"
    />
  </div>
</template>

<script setup>
import ProjectCard from "../common/ProjectCard.vue";
import projects from "~/assets/js/projects";
</script>
