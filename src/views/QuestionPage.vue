<script setup>
import { watch, ref } from 'vue'
import { useRoute } from "vue-router";

import useAPI from '@/composables/useAPI.js';
import BaseTitle from "@/components/BaseTitle.vue";

const route = useRoute();
const api = useAPI()
const question = ref(null)

onMounted(async () => {
      question.value = await api.getQuestion(route.params.id)
})  
</script>

<template>
  <div v-if="question">
  <BaseTitle> {{ question.category }} </BaseTitle>
  <p class="question">{{ question.question }}</p>
  <pre>{{ question }}</pre>
  </div>
</template>

<style lang="postcss" scoped>
.question{
  @apply text-center text-2xl font-bold;
}
</style>