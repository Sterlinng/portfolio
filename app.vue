<template>
  <Header />
  <div class="inline-divider"></div>
  <section id="hero">
    <Hero />
  </section>
  <div class="divider">WHO AM I ?</div>
  <section id="about">
    <About />
  </section>
  <div class="divider">TECHNOLOGIES</div>
  <section id="technologies">
    <Technologies />
  </section>
  <div class="divider">PROJECTS</div>
  <section id="projects">
    <Projects />
  </section>
  <div class="divider">CONTACT</div>
  <section id="contact">
    <Contact />
  </section>
  <Footer />
</template>

<script setup>
import Header from "./components/shared/Header.vue";
import Hero from "./components/sections/Hero.vue";
import Projects from "./components/sections/Projects.vue";
import Technologies from "./components/sections/Technologies.vue";
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
