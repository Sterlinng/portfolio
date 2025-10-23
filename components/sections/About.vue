<template>
  <section class="about-section relative py-12 px-6 sm:px-12 lg:px-20">
    <div class="max-w-7xl mx-auto">
      <!-- Introduction avec animation -->
      <div class="mb-12 scroll-reveal">
        <div class="max-w-4xl">
          <p
            class="text-lg sm:text-xl lg:text-2xl leading-relaxed text-secondary mb-6"
          >
            {{ $t("about.intro.p1") }}
          </p>
          <p
            class="text-lg sm:text-xl lg:text-2xl leading-relaxed text-secondary mb-6"
          >
            {{ $t("about.intro.p2") }}
            <a
              href="https://www.ipanipan.com"
              target="_blank"
              class="text-accent hover:underline font-medium transition-all"
              >IPAN IPAN</a
            >{{ $t("about.intro.p2end") }}
          </p>
        </div>
      </div>

      <!-- Experience & Education Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Experience -->
        <div>
          <h3
            class="text-sm uppercase tracking-wider text-secondary font-semibold mb-6 flex items-center gap-2"
          >
            <svg
              class="w-5 h-5 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {{ $t("about.experience.title") }}
          </h3>
          <div class="space-y-6">
            <div
              class="group hover:translate-x-1 transition-transform duration-300"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-1 bg-accent group-hover:bg-info transition-all duration-300 group-hover:w-2 flex-shrink-0"
                  style="min-height: 80px"
                ></div>
                <div class="flex-1">
                  <h4
                    class="font-semibold text-primary text-lg group-hover:text-accent transition-colors"
                  >
                    {{ $t("about.experience.ipan.role") }}
                  </h4>
                  <p class="text-secondary text-sm mb-2">
                    {{ $t("about.experience.ipan.company") }} ·
                    {{ $t("about.experience.ipan.period") }}
                  </p>
                  <p class="text-secondary text-sm leading-relaxed">
                    {{ $t("about.experience.ipan.description") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div>
          <h3
            class="text-sm uppercase tracking-wider text-secondary font-semibold mb-6 flex items-center gap-2"
          >
            <svg
              class="w-5 h-5 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            {{ $t("about.education.title") }}
          </h3>
          <div class="space-y-6">
            <div
              class="group hover:translate-x-1 transition-transform duration-300"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-1 bg-accent group-hover:bg-info transition-all duration-300 group-hover:w-2 flex-shrink-0"
                  style="min-height: 60px"
                ></div>
                <div class="flex-1">
                  <h4
                    class="font-semibold text-primary group-hover:text-accent transition-colors"
                  >
                    {{ $t("about.education.cesi2024.degree") }}
                  </h4>
                  <p class="text-secondary text-sm">
                    {{ $t("about.education.cesi2024.school") }} ·
                    {{ $t("about.education.cesi2024.year") }}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="group hover:translate-x-1 transition-transform duration-300"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-1 bg-accent group-hover:bg-info transition-all duration-300 group-hover:w-2 flex-shrink-0"
                  style="min-height: 60px"
                ></div>
                <div class="flex-1">
                  <h4
                    class="font-semibold text-primary group-hover:text-accent transition-colors"
                  >
                    {{ $t("about.education.cesi2023.degree") }}
                  </h4>
                  <p class="text-secondary text-sm">
                    {{ $t("about.education.cesi2023.school") }} ·
                    {{ $t("about.education.cesi2023.year") }}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="group hover:translate-x-1 transition-transform duration-300"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-1 bg-accent group-hover:bg-info transition-all duration-300 group-hover:w-2 flex-shrink-0"
                  style="min-height: 60px"
                ></div>
                <div class="flex-1">
                  <h4
                    class="font-semibold text-primary group-hover:text-accent transition-colors"
                  >
                    {{ $t("about.education.esg2022.degree") }}
                  </h4>
                  <p class="text-secondary text-sm">
                    {{ $t("about.education.esg2022.school") }} ·
                    {{ $t("about.education.esg2022.year") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>
