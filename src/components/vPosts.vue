<script setup>
import vEmptyResults from "@/components/vEmptyResults.vue";

const emit = defineEmits(["deletePost"]);
const props = defineProps({
  posts: Array,
});
</script>

<template>
  <ul v-if="posts.length" class="posts">
    <li v-for="post in props.posts" :key="post" class="posts-item">
      <div class="post">
        <div class="post-image">
          <img :src="post.image_src" />
        </div>
        <div class="post-content">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <span class="post-meta">31 December 2023 | by {{ post.author }}</span>
        </div>
      </div>
      <div class="post-actions">
        <router-link
          class="btn btn--primary"
          :to="{ name: 'edit-post', params: { id: post.id } }"
        >
          Edit Post
        </router-link>
        <button class="btn btn--secondary" @click="emit('deletePost', post.id)">
          Delete Post
        </button>
      </div>
    </li>
  </ul>
  <vEmptyResults v-else />
  <div v-if="posts.length" class="posts-add">
    <router-link class="btn btn--md btn--primary" :to="{ name: 'add-post' }">
      Add Post
    </router-link>
  </div>
</template>
