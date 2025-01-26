<template>
  <section
    class="contact-section grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8 w-full"
  >
    <div class="contact-info space-y-6 flex items-center">
      <ul class="space-y-4">
        <li class="flex items-center text-gray-700 dark:text-gray-300">
          <Phone class="w-6 h-6 text-primary mr-3" />
          <span>+33 6 22 63 90 26</span>
        </li>

        <!-- E-mail -->
        <li class="flex items-center text-gray-700 dark:text-gray-300">
          <Mail class="w-6 h-6 text-primary mr-3" />
          <a
            href="mailto:your.email@example.com"
            class="link link-hover text-gray-700 dark:text-gray-300"
          >
            contact@aminefodilcherif.com
          </a>
        </li>

        <!-- Localisation -->
        <li class="flex items-center text-gray-700 dark:text-gray-300">
          <MapPin class="w-6 h-6 text-primary mr-3" />
          <span>Bordeaux, France</span>
        </li>
      </ul>
    </div>

    <!-- Partie droite : Formulaire -->
    <div class="contact-form">
      <h2 class="text-3xl font-bold text-primary mb-6">Get in Touch</h2>

      <p class="text-gray-500 mb-4">
        If you have any questions, feel free to contact me.
      </p>

      <form @submit.prevent="sendEmail">
        <div class="mb-4">
          <label for="first-name" class="label">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="First Name"
            class="input input-bordered w-full"
            v-model="formData.firstName"
          />
        </div>

        <div class="mb-4">
          <label for="last-name" class="label">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Last Name"
            class="input input-bordered w-full"
            v-model="formData.lastName"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            class="input input-bordered w-full"
            v-model="formData.email"
          />
        </div>

        <div class="mb-4">
          <label for="project-details" class="label">Details</label>
          <textarea
            id="project-details"
            name="project-details"
            class="textarea textarea-bordered w-full"
            placeholder="Tell me about what you want to know!"
            v-model="formData.projectDetails"
          ></textarea>
        </div>

        <button
          type="submit"
          class="btn btn-primary flex items-center justify-center"
          :disabled="isLoading"
        >
          <span v-if="isLoading" class="loading loading-spinner mr-2"></span>
          <span>{{ isLoading ? "Sending..." : "Submit" }}</span>
        </button>
      </form>

      <!-- Messages de succès ou d'erreur -->
      <div v-if="successMessage" role="alert" class="alert alert-success mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{{ successMessage }}</span>
      </div>

      <div v-if="errorMessage" role="alert" class="alert alert-error mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{{ errorMessage }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import { Phone, Mail, MapPin } from "@iconoir/vue";
import emailjs from "emailjs-com";

export default {
  name: "ContactSection",
  components: {
    Phone,
    Mail,
    MapPin,
  },
  data() {
    return {
      successMessage: "",
      errorMessage: "",
      isLoading: false,
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        projectDetails: "",
      },
    };
  },
  methods: {
    sendEmail(e) {
      // Vérifier si tous les champs sont remplis
      if (
        !this.formData.firstName ||
        !this.formData.lastName ||
        !this.formData.email ||
        !this.formData.projectDetails
      ) {
        this.errorMessage = "Please fill out all the fields.";
        this.successMessage = "";
        return;
      }

      const form = e.target;
      const config = useRuntimeConfig();

      // Activer le spinner
      this.isLoading = true;

      emailjs
        .sendForm(
          config.public.SERVICE_ID,
          config.public.TEMPLATE_ID,
          form,
          config.public.USER_ID
        )
        .then(
          (result) => {
            this.successMessage =
              "Email sent successfully! I'll answer as soon as possible!";
            this.errorMessage = "";
            console.log(result.text);
            form.reset();
            // Réinitialiser les champs après envoi
            this.formData = {
              firstName: "",
              lastName: "",
              email: "",
              projectDetails: "",
            };
          },
          (error) => {
            this.errorMessage = "Failed to send email, please try again later.";
            this.successMessage = "";
            console.log(error.text);
          }
        )
        .finally(() => {
          // Désactiver le spinner
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.contact-section {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
