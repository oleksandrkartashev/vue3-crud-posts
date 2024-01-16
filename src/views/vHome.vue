<script setup>
import { ref } from "vue";
import vPosts from "@/components/vPosts.vue";
import vEmptyResults from "@/components/vEmptyResults.vue";

const postsList = ref([
  {
    id: 1,
    title: "Post 1",
    image_src: "https://placehold.co/600x400",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste illo molestiae fugit non voluptates, tempora labore corporis velit incidunt cum quo veritatis, soluta commodi distinctio sapiente blanditiis ducimus suscipit.",
    author: "maxwell",
    status: "published",
  },
  {
    id: 2,
    title: "Post 2",
    image_src: "https://placehold.co/600x400",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste illo molestiae fugit non voluptates, tempora labore corporis velit incidunt cum quo veritatis, soluta commodi distinctio sapiente blanditiis ducimus suscipit.",
    author: "maxwell",
    status: "published",
  },
  {
    id: 3,
    title: "Post 3",
    image_src: "https://placehold.co/600x400",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste illo molestiae fugit non voluptates, tempora labore corporis velit incidunt cum quo veritatis, soluta commodi distinctio sapiente blanditiis ducimus suscipit.",
    author: "maxwell",
    status: "pending",
  },
]);
</script>

<template>
  <div class="container">
    <h1>Posts</h1>
    <vPosts v-if="postsList.length" :posts="postsList" />
    <vEmptyResults v-else />
  </div>
</template>
