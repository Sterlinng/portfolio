<template>
  <section id="hero">
    <Hero />
  </section>
  <div class="divider">{{ $t("sections.about") }}</div>
  <section id="about">
    <About />
  </section>
  <div class="divider">{{ $t("sections.projects") }}</div>
  <section id="projects">
    <Projects />
  </section>
  <div class="divider">{{ $t("sections.contact") }}</div>
  <section id="contact">
    <Contact />
  </section>
</template>

<script setup>
import Header from "./components/shared/Header.vue";
import Hero from "./components/sections/Hero.vue";
import Projects from "./components/sections/Projects.vue";
import About from "./components/sections/About.vue";
import Contact from "./components/sections/Contact.vue";
import Footer from "./components/shared/Footer.vue";
import { useHead } from "nuxt/app";

useHead({
  title: "Amine - Portfolio",
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css",
    },
  ],
});
</script>
