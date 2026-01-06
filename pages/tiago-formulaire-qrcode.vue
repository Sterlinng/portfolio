<template>
  <div class="container mx-auto px-4 py-16 max-w-2xl">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Formulaire
      </h1>
      <div class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
        {{ count }} {{ count > 104 ? "inscriptions" : "pré-inscription" }}
      </div>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-semibold mb-2 opacity-80">Nom</label>
          <input
            type="text"
            v-model="formData.nom"
            placeholder="Dupont"
            class="input input-bordered w-full focus:input-primary transition-all"
          />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2 opacity-80">Prénom</label>
          <input
            type="text"
            v-model="formData.prenom"
            placeholder="Jean"
            class="input input-bordered w-full focus:input-primary transition-all"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-semibold mb-2 opacity-80">Email</label>
        <input
          type="email"
          v-model="formData.email"
          placeholder="jean.dupont@email.com"
          class="input input-bordered w-full focus:input-primary transition-all"
        />
      </div>

      <div>
        <label class="block text-sm font-semibold mb-2 opacity-80">Numéro de téléphone</label>
        <input
          type="tel"
          v-model="formData.telephone"
          placeholder="06 12 34 56 78"
          class="input input-bordered w-full focus:input-primary transition-all"
        />
      </div>

      <div class="pt-4">
        <button
          type="submit"
          class="btn btn-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Valider
        </button>
      </div>
    </form>

    <footer class="text-center text-sm opacity-50 mt-16">
      Fait par Gaspard, Gabriel, Leo, Vatea, Tiago
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(104);

const formData = ref({
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
});

const handleSubmit = () => {
  count.value = 105;
};
</script>
