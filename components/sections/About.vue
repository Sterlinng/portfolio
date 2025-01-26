<template>
  <section
    class="about-section grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8 w-full"
  >
    <div class="introduction flex flex-col items-center w-full">
      <!-- Titre de la section -->
      <h2 class="text-3xl font-bold text-primary mb-6">
        {{ $t("about.introduction.title") }}
      </h2>

      <div class="text-lg text-gray-700 p-6">
        <!-- Première phrase -->
        <p class="mb-4">
          {{ $t("about.introduction.paragraph1.part1") }}
          <span class="font-bold text-accent">{{
            $t("about.introduction.name")
          }}</span
          >,
          {{ $t("about.introduction.paragraph1.part2") }}
          <span class="font-bold text-accent">{{
            $t("about.introduction.jobTitle")
          }}</span>
          {{ $t("about.introduction.paragraph1.part3") }}
          <span class="font-bold text-accent">{{
            $t("about.introduction.location")
          }}</span
          >,
          {{ $t("about.introduction.paragraph1.part4") }}
          <a
            href="https://www.ipanipan.com"
            target="_blank"
            class="text-primary font-bold"
            >{{ $t("about.introduction.company") }}</a
          >,
          {{ $t("about.introduction.paragraph1.part5") }}
          <span class="text-accent font-bold">{{
            $t("about.introduction.internalTeams")
          }}</span>
          {{ $t("about.introduction.and") }}
          <span class="text-accent font-bold">{{
            $t("about.introduction.externalClients")
          }}</span
          >.
        </p>

        <p>
          {{ $t("about.introduction.paragraph2.part1") }}
          <span class="font-bold text-accent">{{
            $t("about.introduction.paragraph2.streamlined")
          }}</span
          >,
          <span class="font-bold text-accent">{{
            $t("about.introduction.paragraph2.powerful")
          }}</span
          >,
          {{ $t("about.introduction.and") }}
          <span class="font-bold text-accent">{{
            $t("about.introduction.paragraph2.intuitive")
          }}</span>
          {{ $t("about.introduction.paragraph2.part2") }}.
        </p>
      </div>
    </div>

    <div class="timeline flex flex-col items-center w-full">
      <div>
        <h2 class="text-3xl font-bold text-primary mb-6">
          {{ $t("about.timeline.title") }}
        </h2>
      </div>
      <div class="w-full">
        <ul class="timeline timeline-vertical space-y-4">
          <li>
            <hr />
            <div class="timeline-start timeline-box">
              {{ $t("about.timeline.cesi2024.title") }}
              <p class="italic text-gray-500 mb-2 text-sm">
                {{ $t("about.timeline.cesi2024.description") }}
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-end timeline-box">
              {{ $t("about.timeline.cesi2023.title") }}
              <p class="italic text-gray-500 mb-2 text-sm">
                {{ $t("about.timeline.cesi2023.description") }}
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-start timeline-box">
              {{ $t("about.timeline.esg2022.title") }}
              <p class="italic text-gray-500 mb-2 text-sm">
                {{ $t("about.timeline.esg2022.description") }}
              </p>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
.about-section {
  max-width: 100%;
  margin: 0 auto;
}
</style>
