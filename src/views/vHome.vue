<script setup>
import { onMounted, reactive } from "vue";
import { getPosts, deletePost } from "@/services/api";
import vPosts from "@/components/vPosts.vue";

const state = reactive({
  postsList: [],
});

const fetchPosts = async () => {
  const data = await getPosts();
  if (data.length) {
    state.postsList = data;
  }
};

const deletePostHandler = async (id) => {
  const data = await deletePost(id);
  if (data) {
    const updatedPosts = state.postsList.filter((post) => post.id !== data.id);
    state.postsList = updatedPosts;
  }
};

onMounted(() => {
  if (!state.postsList.length) {
    fetchPosts();
  }
});
</script>

<template>
  <div class="container">
    <h1>Posts</h1>
    <vPosts :posts="state.postsList" @delete-post="deletePostHandler" />
  </div>
</template>
