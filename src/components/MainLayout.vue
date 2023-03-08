<script setup>
import MainScore from "@/components/MainScore.vue"
import useScore from "@/composables/useScore"


</script>

<template>
  <main>
    <div class="card">
      <RouterView />
    </div>
  </main>
 <MainScore />
</template>

<style lang="postcss" scoped>
main {
  @apply flex h-screen items-center justify-center bg-gradient-to-tr from-slate-800 via-blue-700 to-slate-900;
  & .card {
    @apply flex h-5/6 min-h-fit w-11/12 flex-col items-center gap-16 overflow-auto rounded-lg bg-white p-8 shadow-lg;
  }
}

</style>