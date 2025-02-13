<template>
  <div class="container mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold text-center mb-8">All Projects</h1>

    <div class="overflow-x-auto">
      <table class="table w-full">
        <!-- En-tête du tableau -->
        <thead>
          <tr class="bg-base-200 text-base font-semibold">
            <th>Year</th>
            <th>Project</th>
            <th>Context</th>
            <th>Description</th>
            <th>Built With</th>
            <th>Link</th>
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
                View<ArrowUpRight class="w-4 h-4" />
              </a>
              <span v-else class="text-gray-400">Not Available</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import allProjects from "~/assets/js/allProjects";

import { ArrowUpRight } from "@iconoir/vue";
</script>
