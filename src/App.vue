<template>
  <vue3-route-breadcrumbs :route="route" :router="router" :name-dictionary='nameDictionary' />
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const nameDictionary = {
  "/":"home",
  "a": "第一層",
  "b": "第二層",
  "c": "第三層"
}
</script>
