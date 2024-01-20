<script lang="ts" setup>
import type { Blog } from '~/types'

defineProps<{
  blog: Blog 
}>();
</script>

<template>
    <div
      class="flex flex-col space-y-3 w-full border shadow-sm p-10 rounded-lg"
    >
      <img :src="blog.cover_image!.url!" />
      <h1 class="text-xl font-bold">{{ blog.name }}</h1>
      <div class="h-24 overflow-clip">
        <p class="text-sm tracking-wider">{{ blog.short_description }}</p>
      </div>
      <nuxt-link :href="`/${blog._slug!}`">View More</nuxt-link>
    </div>
</template>
