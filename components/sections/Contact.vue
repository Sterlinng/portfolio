<template>
  <section
    class="contact-section grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8 w-full"
  >
    <!-- Composant Mockup Téléphone -->
    <div class="phone-mockup">
      <div class="mockup-phone">
        <div class="camera"></div>
        <div class="display">
          <div class="artboard artboard-demo phone-1">
            <div class="chat chat-start">
              <div class="chat-bubble chat-bubble-info">
                Hey, I’m tired of all<br />these repetitive tasks!
              </div>
            </div>
            <div class="chat chat-end">
              <div class="chat-bubble chat-bubble-accent">
                Why not automate them?
              </div>
            </div>
            <div class="chat chat-start">
              <div class="chat-bubble chat-bubble-info">Automate? But how?</div>
            </div>
            <div class="chat chat-end">
              <div class="chat-bubble chat-bubble-accent">
                With my help!<br />
                I create <strong>custom applications</strong><br />
                that streamline your processes.
              </div>
            </div>
            <div class="chat chat-start">
              <div class="chat-bubble chat-bubble-info">
                That sounds amazing!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-form">
      <h2 class="text-3xl font-bold text-primary mb-6">Get in Touch</h2>

      <p class="text-gray-500 mb-4">
        Have a project in mind? Great! I'm freelancing, feel free to reach out
        to me.
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
          />
        </div>

        <div class="mb-4">
          <label for="project-details" class="label">Project Details</label>
          <textarea
            id="project-details"
            name="project-details"
            class="textarea textarea-bordered w-full"
            placeholder="Tell me about your project"
          ></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
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
import emailjs from "emailjs-com";

export default {
  name: "ContactSection",
  data() {
    return {
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    sendEmail(e) {
      const form = e.target;

      const config = useRuntimeConfig();

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
          },
          (error) => {
            this.errorMessage = "Failed to send email, please try again later.";
            this.successMessage = "";
            console.log(error.text);
          }
        );
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
