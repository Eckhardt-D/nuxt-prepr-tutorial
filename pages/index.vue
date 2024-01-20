<script lang="ts" setup>
const page = ref(1)
const limit = ref(24)

const pagination = reactive({
 limit: limit.value,
 skip: (page.value - 1) * limit.value,
})
const result = await GqlGetBlogs({
  limit: pagination.limit,
  skip: pagination.skip,
})
</script>

<template>
  <h1 class="text-3xl font-bold text-center my-10">Welcome to the blog</h1>
  <div class="max-w-7xl mx-auto">
    <div v-if="result.Blogs" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <BlogCard v-for="item in result.Blogs!.items!" :blog="item" />
    </div>
  </div>
</template>
