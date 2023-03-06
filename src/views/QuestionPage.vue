<script setup>
import BaseTitle from "@/components/BaseTitle.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const categoryID = route.params.id;
</script>

<template>
  <BaseTitle>
     I'm Question Page for {{ categoryID }}
  </BaseTitle>
</template>
