<template>
  <section class="relative py-20 px-6 sm:px-12 lg:px-20 min-h-screen">
    <div class="max-w-7xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold text-primary mb-4">{{ $t('projectsPage.title') }}</h1>
        <p class="text-lg text-secondary max-w-2xl mx-auto">
          {{ $t('projectsPage.subtitle') }}
        </p>
      </div>

      <!-- Tabs -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex rounded-lg bg-base-200 p-1">
          <button
            @click="activeTab = 'professional'"
            :class="[
              'px-6 py-3 rounded-lg font-medium transition-all duration-300',
              activeTab === 'professional'
                ? 'bg-accent text-white shadow-lg'
                : 'text-secondary hover:text-primary'
            ]"
          >
            {{ $t('projectsPage.tabs.professional') }}
          </button>
          <button
            @click="activeTab = 'personal'"
            :class="[
              'px-6 py-3 rounded-lg font-medium transition-all duration-300',
              activeTab === 'personal'
                ? 'bg-accent text-white shadow-lg'
                : 'text-secondary hover:text-primary'
            ]"
          >
            {{ $t('projectsPage.tabs.personal') }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="index"
          class="group cursor-pointer"
          @click="handleProjectClick(project)"
        >
          <!-- Card -->
          <div class="relative overflow-hidden rounded-lg bg-base-200 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1">

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

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="text-center py-20">
        <p class="text-lg text-secondary">{{ $t('projectsPage.emptyState', { tab: $t(`projectsPage.tabs.${activeTab}`) }) }}</p>
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
import { ref, computed } from "vue";
import { ArrowUpRight } from "@iconoir/vue";
import allProjects from "~/assets/js/projects";
import ProjectModal from "~/components/ui/ProjectModal.vue";

const activeTab = ref('professional');
const selectedProject = ref(null);
const isModalOpen = ref(false);

// Filter projects based on active tab
const filteredProjects = computed(() => {
  return allProjects.filter(project => {
    const client = project.client.toLowerCase();
    if (activeTab.value === 'professional') {
      return client !== 'personal';
    } else {
      return client === 'personal';
    }
  });
});

const handleProjectClick = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => {
    selectedProject.value = null;
  }, 300);
};

useHead({
  title: "Amine - All Projects",
});
</script>
