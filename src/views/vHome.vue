<script setup>
import { ref, onMounted } from "vue";
import { getPosts, deletePost } from "@/services/api";
import vPosts from "@/components/vPosts.vue";

const postsList = ref([]);

const fetchPosts = async () => {
  const data = await getPosts();
  if (data.length) {
    postsList.value = data;
  }
};

const deletePostHandler = async (id) => {
  const data = await deletePost(id);
  if (data) {
    const updatedPosts = postsList.value.filter((post) => post.id !== data.id);
    postsList.value = updatedPosts;
  }
};

onMounted(() => {
  if (!postsList.value.length) {
    fetchPosts();
  }
});
</script>

<template>
  <div class="container">
    <h1>Posts</h1>
    <vPosts :posts="postsList" @delete-post="deletePostHandler" />
  </div>
</template>
