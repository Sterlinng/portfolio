<template>
  <div class="container mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold text-center mb-8">
      {{ $t("projectsTable.title") }}
    </h1>

    <div class="overflow-x-auto">
      <table class="table w-full">
        <!-- En-tête du tableau -->
        <thead>
          <tr class="bg-base-200 text-base font-semibold">
            <th>{{ $t("projectsTable.year") }}</th>
            <th>{{ $t("projectsTable.project") }}</th>
            <th>{{ $t("projectsTable.context") }}</th>
            <th>{{ $t("projectsTable.description") }}</th>
            <th>{{ $t("projectsTable.builtWith") }}</th>
            <th>{{ $t("projectsTable.link") }}</th>
          </tr>
        </thead>
        <!-- Corps du tableau -->
        <tbody>
          <tr
            v-for="(project, index) in allProjects"
            :key="index"
            class="hover"
          >
            <td>{{ project.year }}</td>
            <td class="font-bold">{{ project.title }}</td>
            <td>
              <span
                class="badge"
                :class="
                  project.context === 'Professional'
                    ? 'badge-primary'
                    : 'badge-secondary'
                "
              >
                {{ project.context }}
              </span>
            </td>
            <td>{{ project.description }}</td>
            <td>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, i) in project.technos"
                  :key="i"
                  class="badge badge-outline"
                >
                  {{ tech }}
                </span>
              </div>
            </td>
            <td>
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                class="link link-hover flex items-center gap-1 text-primary"
              >
                {{ $t("projectsTable.view") }}<ArrowUpRight class="w-4 h-4" />
              </a>
              <span v-else class="text-gray-400">{{
                $t("projectsTable.notAvailable")
              }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import getAllProjects from "~/assets/js/allProjects";
import { ArrowUpRight } from "@iconoir/vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const allProjects = computed(() => {
  locale.value;
  return getAllProjects(t);
});

useHead({
  title: "Amine - Projects",
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css",
    },
  ],
});
</script>
