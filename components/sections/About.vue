<template>
  <section
    class="about-section grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8 w-full"
  >
    <div class="introduction flex flex-col items-center w-full">
      <!-- Titre de la section -->
      <h2 class="text-3xl font-bold text-primary mb-6">A few words about me</h2>

      <div class="text-lg text-gray-700 p-6">
        <!-- Première phrase -->
        <p class="mb-4">
          I'm <span class="font-bold text-accent">Amine FODIL-CHERIF</span>, a
          <span class="font-bold text-accent">full-stack developer</span> based
          in <span class="font-bold text-accent">Bordeaux</span>, currently
          working as a
          <span class="font-bold text-accent">software engineer</span> at
          <a href="https://www.ipanipan.com" class="text-accent font-bold"
            >IPAN IPAN</a
          >, where I am responsible for developing applications for both
          <span class="text-accent font-bold">internal teams</span> and
          <span class="text-accent font-bold">external clients</span>.
        </p>

        <p>
          I specialize in creating
          <span class="font-bold text-accent">streamlined</span>,
          <span class="font-bold text-accent">powerful</span>, and
          <span class="font-bold text-accent">highly intuitive</span>
          applications that optimize processes and improve user experiences.
        </p>
      </div>
    </div>

    <div class="timeline flex flex-col items-center w-full">
      <div>
        <h2 class="text-3xl font-bold text-primary mb-6">Education</h2>
      </div>
      <div class="w-full">
        <ul class="timeline timeline-vertical space-y-4">
          <li>
            <hr />
            <div class="timeline-start timeline-box">
              CESI - Engineering School - 2024
              <p class="italic text-gray-500 mb-2 text-sm">
                Master's - Manager in Software Application Architecture (In
                Progress)
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-end timeline-box">
              CESI - Engineering School - 2023
              <p class="italic text-gray-500 mb-2 text-sm">
                Bachelor's - Application Design and Development (Achieved)
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-start timeline-box">
              ESG - Business School - 2022
              <p class="italic text-gray-500 mb-2 text-sm">
                Bachelor's - Business & Marketing (Achieved)
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
