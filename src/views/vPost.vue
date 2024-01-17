<script setup>
import vBackButton from "@/components/vBackButton.vue";
import { ref } from "vue";

const post = ref({
  id: 1,
  title: "Post 1 - Test title",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquam quasi laborum similique assumenda ex dolorem incidunt itaque labore animi, quibusdam vel accusamus quae molestias earum minus deleniti? Recusandae, odit!",
});
</script>

<template>
  <div class="post-top">
    <div class="container">
      <vBackButton />
      <h1>{{ post.title }}</h1>
    </div>
  </div>
  <div class="container">{{ post.content }}</div>
</template>
