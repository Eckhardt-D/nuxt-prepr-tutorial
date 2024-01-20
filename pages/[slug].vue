<script lang="ts" setup>
const route = useRoute()
const { slug } = route.params

const result = await GqlGetBlog({
  slug: slug as string
})
</script>

<template>
  <div class="mx-auto my-10 prose">
    <h1>{{ result.Blog!.name }}</h1>
    <p>{{ result.Blog!.date }}</p>

    <div class="prose mx-auto" v-html="result.Blog!.article!"/>
  </div>
</template>
