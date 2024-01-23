<script setup>
import { ref, onMounted } from "vue";
import { getPosts, deleteSinglePost } from "@/services/api";
import vPosts from "@/components/vPosts.vue";

const postsList = ref([]);

const fetchPosts = async () => {
  const data = await getPosts();
  if (data.length) {
    postsList.value = data;
  }
};

const deletePost = async (id) => {
  const data = await deleteSinglePost(id);
  if (data) {
    const index = postsList.value.findIndex((post) => post.id === data.id);
    if (index !== -1) {
      postsList.value.splice(index, 1);
    }
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
    <vPosts :posts="postsList" @delete-post="deletePost" />
  </div>
</template>
