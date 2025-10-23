<template>
  <section class="relative py-12 px-6 sm:px-12 lg:px-20">
    <div class="max-w-7xl mx-auto">

      <!-- Header -->
      <div class="mb-10">
        <h2 class="text-sm uppercase tracking-wider text-secondary font-semibold mb-4">{{ $t("sections.projects") }}</h2>

        <!-- Discreet notice about confidential projects -->
        <p class="text-xs italic text-secondary/60 max-w-3xl mb-8">
          {{ $t("aboutProjects.description1") }}
          {{ $t("aboutProjects.description2") }}
          <a href="#contact" class="text-accent hover:underline transition-all">{{ $t("aboutProjects.contact") }}</a>.
        </p>
      </div>

      <!-- Projects Grid (max 3 projects) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects.slice(0, 3)"
          :key="index"
          class="group cursor-pointer"
          @click="handleProjectClick(project)"
        >
          <!-- Card with enhanced animations -->
          <div class="relative overflow-hidden rounded-lg bg-base-200 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 hover:rotate-1">

            <!-- Image -->
            <div class="aspect-[4/3] overflow-hidden bg-base-300">
              <img
                v-if="project.coverImage"
                :src="project.coverImage"
                :alt="$t(project.title)"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div v-else class="w-full h-full flex items-center justify-center">
                <span class="text-4xl text-base-content/20">📁</span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <!-- Year and Client -->
              <div class="flex items-center gap-3 mb-3 text-xs text-secondary">
                <span>{{ project.year }}</span>
                <span class="w-1 h-1 rounded-full bg-secondary"></span>
                <span>{{ project.client }}</span>
              </div>

              <!-- Title -->
              <h3 class="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                {{ $t(project.title) }}
              </h3>

              <!-- Description -->
              <p class="text-sm text-secondary mb-4 line-clamp-2">
                {{ $t(project.shortDescription) }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, i) in project.technos.slice(0, 3)"
                  :key="i"
                  class="text-xs px-2 py-1 rounded bg-base-300 text-secondary"
                >
                  {{ tech.name }}
                </span>
                <span
                  v-if="project.technos.length > 3"
                  class="text-xs px-2 py-1 text-secondary"
                >
                  +{{ project.technos.length - 3 }}
                </span>
              </div>
            </div>

            <!-- Hover indicator (only if has external link) -->
            <div
              v-if="project.link && project.link !== '#'"
              class="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <div class="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <ArrowUpRight class="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer with CTA -->
      <div class="mt-12 text-center">
        <!-- View More Button -->
        <a
          href="/projects"
          class="inline-flex items-center gap-2 px-8 py-3 text-base font-medium text-primary bg-base-200 hover:bg-base-300 rounded-lg transition-all duration-300 hover:scale-105"
        >
          {{ $t("projects.archive") }}
          <ArrowUpRight class="w-5 h-5" />
        </a>
      </div>

    </div>

    <!-- Project Modal -->
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      :is-open="isModalOpen"
      @close="closeModal"
    />

  </section>
</template>

<script setup>
import { ref } from "vue";
import { ArrowUpRight } from "@iconoir/vue";
import projects from "~/assets/js/projects";
import ProjectModal from "~/components/ui/ProjectModal.vue";

const selectedProject = ref(null);
const isModalOpen = ref(false);

const handleProjectClick = (project) => {
  // Ouvrir la modale avec les détails du projet
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  // Attendre la fin de l'animation avant de vider selectedProject
  setTimeout(() => {
    selectedProject.value = null;
  }, 300);
};
</script>
