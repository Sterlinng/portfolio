<script setup>
import {
  PeaceHand,
  GithubCircle,
  Linkedin,
  Spotify,
  DocMagnifyingGlass,
} from "@iconoir/vue";
</script>

<template>
  <footer class="footer items-center p-4 relative z-10" style="background: transparent;">
    <aside class="grid-flow-col items-center">
      <PeaceHand />
      <p>
        {{ $t("footer.madeWith") }}
        <a
          href="https://nuxtjs.org"
          target="_blank"
          class="text-green-600 font-bold"
        >
          {{ $t("footer.nuxt") }}
        </a>
      </p>
    </aside>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a href="https://github.com/Sterlinng" target="_blank">
        <GithubCircle />
      </a>
      <a
        href="https://www.linkedin.com/in/amine-fodil-cherif-961805206/"
        target="_blank"
      >
        <Linkedin />
      </a>
      <a
        href="https://open.spotify.com/user/sr4c7onjwxonuballyxdj5dhg?si=ed6dceec17754166"
        target="_blank"
      >
        <Spotify />
      </a>
      <a href="/cv_amine.pdf" target="_blank">
        <DocMagnifyingGlass />
      </a>
    </nav>
  </footer>
</template>
