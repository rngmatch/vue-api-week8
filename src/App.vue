<script setup>

</script>

<template>
  <main>
    <div class="card">
  <RouterView />
  </div>
  </main>
</template>

<style lang="postcss" scoped>
main {
  @apply flex justify-center items-center h-screen bg-gradient-to-tr from-blue-700 via-blue-800 to-gray-900 first-letter::after;
  & .card {
    @apply flex h-5/6 min-h-fit w-11/12 flex-col items-center gap-16 overflow-auto rounded-lg bg-slate-400 p-8 shadow-lg;
  }
}
</style>