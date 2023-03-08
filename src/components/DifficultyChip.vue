<script setup>


</script>

<template>
  <p class="difficulty">
    <slot/>
    </p>
</template>

<style lang="postcss" scoped>
    .difficulty {
  @apply absolute bottom-6 left-8 rounded-full px-4 py-2 font-bold capitalize text-slate-700 text-white;
}
</style>