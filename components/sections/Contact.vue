<template>
  <section class="relative py-12 px-6 sm:px-12 lg:px-20">
    <div class="max-w-4xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-sm uppercase tracking-wider text-secondary font-semibold mb-4">{{ $t("sections.contact") }}</h2>
        <h3 class="text-4xl sm:text-5xl font-bold text-primary mb-6">Get in Touch</h3>
        <p class="text-lg text-secondary max-w-2xl mx-auto">
          Have a project in mind or just want to chat? Drop me a message and I'll get back to you as soon as possible.
        </p>
      </div>

      <!-- Contact Form -->
      <div class="bg-base-200 rounded-2xl p-8 sm:p-12">

        <form @submit.prevent="sendEmail" class="space-y-6">
          <!-- Name Fields (side by side) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label for="first-name" class="block text-sm font-medium text-secondary mb-2">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="John"
                class="w-full px-4 py-3 rounded-lg bg-base-100 border border-base-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all hover:border-accent/50 focus:scale-[1.02]"
                v-model="formData.firstName"
                required
              />
            </div>

            <div>
              <label for="last-name" class="block text-sm font-medium text-secondary mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Doe"
                class="w-full px-4 py-3 rounded-lg bg-base-100 border border-base-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all hover:border-accent/50 focus:scale-[1.02]"
                v-model="formData.lastName"
                required
              />
            </div>
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-secondary mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john.doe@example.com"
              class="w-full px-4 py-3 rounded-lg bg-base-100 border border-base-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all hover:border-accent/50 focus:scale-[1.02]"
              v-model="formData.email"
              required
            />
          </div>

          <!-- Message -->
          <div>
            <label for="project-details" class="block text-sm font-medium text-secondary mb-2">
              Message
            </label>
            <textarea
              id="project-details"
              name="project-details"
              rows="6"
              placeholder="Tell me about your project or inquiry..."
              class="w-full px-4 py-3 rounded-lg bg-base-100 border border-base-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none hover:border-accent/50 focus:scale-[1.02]"
              v-model="formData.projectDetails"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full sm:w-auto px-8 py-4 text-base font-medium text-white bg-accent hover:bg-accent/90 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            :disabled="isLoading"
          >
            <span v-if="isLoading" class="loading loading-spinner loading-sm"></span>
            <span>{{ isLoading ? "Sending..." : "Send Message" }}</span>
            <svg v-if="!isLoading" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>

        <!-- Messages de succès ou d'erreur -->
        <Transition name="fade">
          <div v-if="successMessage" class="mt-6 p-4 rounded-lg bg-success/10 border border-success/20">
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-sm font-medium text-success">{{ successMessage }}</span>
            </div>
          </div>
        </Transition>

        <Transition name="fade">
          <div v-if="errorMessage" class="mt-6 p-4 rounded-lg bg-error/10 border border-error/20">
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-sm font-medium text-error">{{ errorMessage }}</span>
            </div>
          </div>
        </Transition>
      </div>

    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactSection",
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
