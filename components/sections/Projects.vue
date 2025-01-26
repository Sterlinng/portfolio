<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 sm:px-12">
    <div class="max-w-lg">
      <div class="space-y-6">
        <h2 class="text-3xl font-bold">{{ $t("aboutProjects.title") }}</h2>
        <p class="text-gray-500">{{ $t("aboutProjects.description1") }}</p>
        <p class="text-gray-500">
          {{ $t("aboutProjects.description2") }}
          <a href="#contact" class="font-bold text-primary">{{
            $t("aboutProjects.contact")
          }}</a
          >.
        </p>
      </div>
    </div>

    <div class="space-y-8">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="flex items-center justify-between pb-6 border-b border-base-300"
      >
        <div>
          <h3 class="text-xl font-semibold">{{ $t(project.title) }}</h3>
          <p class="italic text-sm text-gray-500 mb-2">{{ project.client }}</p>
          <p class="text-sm text-gray-500 mb-2">{{ $t(project.subtitle) }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tech, i) in project.technos"
              :key="i"
              class="rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium py-1 px-3"
            >
              {{ tech.name }}
            </span>
          </div>
        </div>

        <div>
          <a
            v-if="!project.isConfidential"
            :href="project.link"
            target="_blank"
            class="link link-hover flex items-center text-primary"
          >
            <ArrowUpRight />
          </a>
          <div
            v-else
            class="flex items-center text-gray-500 dark:text-gray-300"
            :title="$t('projects.confidential')"
          >
            <Lock />
          </div>
        </div>
      </div>
      <div style="margin-top: 20px; margin-bottom: 20px">
        <a class="link link-hover">{{ $t("projects.archive") }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowUpRight, Lock } from "@iconoir/vue";
import projects from "~/assets/js/projects";
</script>
