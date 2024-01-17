<script setup>
defineEmits(["editPost", "deletePost"]);
const props = defineProps({
  posts: Array,
});
</script>

<template>
  <ul class="posts">
    <li v-for="post in props.posts" :key="post.id" class="posts-item">
      <div class="post">
        <div class="post-image">
          <img :src="post.image_src" />
        </div>
        <div class="post-content">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <span class="post-meta">31 December 2023</span>
        </div>
      </div>
      <div class="post-actions">
        <button class="btn btn--primary" @click="$emit('editPost', post.id)">
          Edit Post
        </button>
        <button
          class="btn btn--secondary"
          @click="$emit('deletePost', post.id)"
        >
          Delete Post
        </button>
      </div>
    </li>
  </ul>
</template>
